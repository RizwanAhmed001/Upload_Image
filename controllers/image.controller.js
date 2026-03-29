

export const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    if(!file){
      return res.status(400).json({message: "File Not Found!"})
    }

    return res.status(200).json({
      message: "File Upload Success"
    })


  } catch (error) {
    return res.status(500).json({error: error})
  }
}