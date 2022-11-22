import { Router } from 'express'
import * as flagsCtrl from '../controllers/flags.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', flagsCtrl.index)
router.post('/:id', flagsCtrl.addFlag)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
