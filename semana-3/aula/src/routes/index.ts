import { Router } from 'express'
import { routerHealth } from './health.router'
import { routerStudents } from './students.router'

export const router = Router()

router.use('/health', routerHealth)
router.use('/students', routerStudents)
