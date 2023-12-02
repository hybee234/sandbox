const router = require('express').Router();
const { Brand } = require('../../models'); 

// http://localhost:3001/api/brand/

// GET - Route to render the homepage with Brand data
router.get('/', async (req, res) => {
    try {
        // Fetch all active brands from the database with specified attributes
        const getActiveBrand = await Brand.findAll({
            attributes: ['brand_name'], // Specify the columns to fetch
            where: {
                active_ind: 1 // This will only include brands where active_ind is 1
            }
        });
        const brands = getActiveBrand.map((brand) => brand.get({ plain: true }));

        res.status(200).json(getActiveBrand);   // To view in insomnia
        res.render('homepage', {
            brands,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// POST - Add a Brand 
router.post('/', async (req, res) => {
    try {
        const postNewBrand = await Brand.create(req.body);
        res.status(200).json(postNewBrand);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT - Update Brand by ID
router.put('/:brand_id', async (req, res) => {
    try {
        const putBrand = await Brand.update(
            {
                brand_name: req.body.brand_name,
                active_ind: req.body.active_ind,
            },
            {
                where: {
                    brand_id: req.params.brand_id,
                },
            }
        )
        res.json(`Brand ID ${req.params.brand_id} updated`);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT - Soft Delete Brand by ID
router.put('/inactivate/:brand_id', async (req, res) => {
    try {
        const inactivateBrand = await Brand.update(
            {
                active_ind: 0,
            },
            {
                where: {
                    brand_id: req.params.brand_id,
                },
            }
        )
        res.json(`Brand ID ${req.params.brand_id} inactivated`);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
