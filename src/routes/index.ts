import  userRoutes from './user.routes';
import authRoute from './auth.route';

const routes = (app: any) => {
    userRoutes(app)
    authRoute(app)
}

export default routes;