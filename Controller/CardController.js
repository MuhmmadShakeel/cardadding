import Card from '../Modal/CardModal.js'
export const POST = async (req, res) => {
  try {
    const { title, description } = req.body;

    const imagePath = req.file ? req.file.filename : null;

    console.log("Data:", title, description, imagePath);

    await Card.create({
      cardImage: imagePath,
      cardTitle: title,
      content: description
    });

    res.send("Card created successfully");

  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating card");
  }
};

export const GetDate=async (req,res)=>{
    const CardData=Card.find({ID:_id})
}