import express from 'express'
import { 
  checkoutSessionEmbedded, 
  checkoutSessionHosted, 
  webhook } from '../controllers/stripeController';
const router = express.Router()

router.post('/create-checkout-session-hosted', checkoutSessionHosted)
router.post('/create-checkout-session-embedded', checkoutSessionEmbedded)
router.post('/webhook', webhook)

export default router;