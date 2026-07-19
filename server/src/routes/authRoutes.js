// import ro from 'mongoose'

const router = express.router();

router.port("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/profile",protect,getUser);

export default router;
