import Policy from "../models/policy.js"
import Category from "../models/category.js"

export const createPolicy = async (req,res) => {
    try {
       const {title,description,department,tags,categoryId,createdBy} = req.body;
       
    //    const categoryExists = await Category.findById(categoryId);
    //    if(!categoryExists) {
    //     return res.status(400).json(
    //         {
    //             message:"Invalid Category"
    //         }
    //     )
    //    }

       const newPolicy = await Policy.create({
        title,
        description,
        department,
        tags,
        categoryId,
        createdBy
       });

       res.status(201).json(newPolicy);
    } catch (error) {
        res.status(500).json({
            message:"Error creating policy",
            error:error.message
        })
    }
};

export const getAllPolicy = async (req,res) => {
    try {
        const policies = await Policy.find()
        // .populate('categoryId','name')
        // .populate('createdBy','email','role')
        // .populate('votes')
        // .populate('comments');

        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({message:'Error fetching policies',
            error:error.message
        })
    }
};

export const getPolicyById = async (req, res) => {
  try {
    const { id } = req.params;
    const policy = await Policy.findById(id)
    //   .populate('categoryId', 'name')
    //   .populate('createdBy', 'email role')
    //   .populate('votes')
    //   .populate('comments');

    if (!policy) return res.status(404).json({ message: 'Policy not found' });

    res.status(200).json(policy);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching policy', error: err.message });
  }
};
