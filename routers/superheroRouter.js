import {Router} from 'express'
import upload from '../multer.js'
import superheroController from '../controller/superheroController.js'
const router = Router()


router.post('/setHeroStats', superheroController.setHeroStats)
router.get('/getHeroStats/:id', superheroController.getHeroStats)
router.get('/getHeroImage/:id', superheroController.getHeroImage)
router.post('/uploadHeroImage/:id', upload.any(),superheroController.uploadHeroImage)

export default router