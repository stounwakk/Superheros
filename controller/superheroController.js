import {Superhero} from '../db.js'

class superheroController {
    setHeroStats(req,res) {
        const heroConfig = req.body
        Superhero.create(heroConfig)
            .then((hero) => res.status(200).json({hero}))
            .catch((e) => res.status(500).json({message: 'Неверно указаны данные'}))
    }

    getHeroStats(req,res) {
        const id = req.params.id
        Superhero.findByPk(id)
            .then((hero)=>{
                if(!hero) res.status(400).json({message:'Супергероев не существует'})
                res.status(200).json({hero})
            })
            .catch(e=> res.status(500).json(e))
    }

    async uploadHeroImage(req,res) {
        const idx = req.params.id
        const file = req.files
        Superhero.update({heroImage: file[0].path}, {
            where:{
                id:idx
            },
            returning:true
        })
            .then((result) => res.status(200).json({result}))
            .catch(e=>res.status(500).json(e))

    }

    getHeroImage(req,res) {
        const id = req.params.id
        Superhero.findByPk(id)
            .then((candidate)=>{
                if(!candidate) res.status(400).json({message:'Супергероев не существует'})
                const imagePath = candidate.heroImage
                res.status(200).json({imagePath})
            })
            .catch(e=> res.status(500).json(e))
    }
}

export default new superheroController()