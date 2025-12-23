const { pool } = require("../models/db");

pool;
const addNewCategory = async (req, res) => {
  const { name, description, imgsrc } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO categories (name,description,imgsrc) VALUES ($1,$2,$3) RETURNING *`,
      [name, description, imgsrc]
    );
    res.status(201).json({
      success: true,
      result: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      result: "Server error",
    });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
            SELECT name,imgsrc , description FROM categories WHERE id = $1 RETURNING *`,
      [id]
    );
    res.status(200).json({
        success:true,
        result: result.rows
    })
  } catch (err) {
    console.log(err);
  }
};

// const updateCategoryById = async(req,res)=>{
//     const {}
// }

module.exports = { addNewCategory,getCategoryById };
