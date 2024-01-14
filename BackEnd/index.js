import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const cardSchema = new Schema({
  name: String,
  img: String,
  title: String,
}, { timestamps: true });

const Card = mongoose.model("Card", cardSchema);

app.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards); 
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const cardItem = await Card.findById(req.params.id);
    if (!cardItem) {
      res.json({ message: "Card not found" }); 
    } else {
      res.json(cardItem);
    }
  } catch (error) {
    res.json({ message: error.message }); 
  }
});

app.post("/", async (req, res) => {
  const cardItem = new Card(req.body);
  try {
    await cardItem.save();
    res.json(cardItem);
  } catch (error) {
    res.json({ message: error.message }); 
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const cardItem = await Card.findByIdAndDelete(req.params.id);
    if (!cardItem) {
      res.json({ message: "Card not found" }); 
    } else {
      res.json({ message: "Card deleted successfully", cardItem });
    }
  } catch (error) {
    res.json({ message: error.message }); 
  }
});

mongoose.connect("mongodb+srv://huz3yn:huseyn04ru@hakunamatata.wsdwnh9.mongodb.net/")
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
