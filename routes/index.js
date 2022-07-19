module.exports = app => {
  // app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  //   );
  //   res.setHeader(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  //   );
  //   next();
  // });
const router = require("express").Router();
const favourites = require('../controllers/favourites.controller');
const user = require("../controllers/user.controller")
const verifyToken = require("../middlewares/authJwt")

router
/**
 * @openapi
 * '/rick-morty/favourites':
 *  get:
 *     tags:
 *     - All Favourites
 *     summary: Get all favourite characters
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  type:
 *                    type: string
 *                 
 *       400:
 *         description: Bad request
 */

  .get("/favourites",verifyToken,favourites.findall)

  /**
 * @openapi
 * '/rick-morty/favourites':
 *  post:
 *     tags:
 *     - Add Favourite
 *     summary: Add favourite
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              name:
 *                type: string
 *                default: New favourite name
 *              type:
 *                type: string
 *                default: New favourite type
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
  .post("/favourites",verifyToken,favourites.create )

  /**
 * @openapi
 * '/rick-morty/favourites':
 *  delete:
 *     tags:
 *     - Remove Favourite 
 *     summary: Remove favourite by name
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
  .delete("/favourites", verifyToken, favourites.remove)

  /**
 * @openapi
 * '/rick-morty/register':
 *  post:
 *     tags:
 *     - User Registration
 *     summary: Register User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: New user email
 *              password:
 *                type: string
 *                default: New user password
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
  .post("/signup",user.create)

  /**
 * @openapi
 * '/rick-morty/login':
 *  post:
 *     tags:
 *     - User Login
 *     summary: login user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default:  user email
 *              password:
 *                type: string
 *                default:  user password
 *     responses:
 *      200:
 *        description: Created
 *      404:
 *        description: Not Found
 */
  .post("/signin",user.signin)

app.use('/rick-morty',router);

}