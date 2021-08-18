import { Router } from 'express';

const router: Router = Router();

router.get('auth', (res, req) => { return "hello World" })

export default router;