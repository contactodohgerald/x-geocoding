import dotevn from 'dotenv';

dotevn.config();

class DefaultExports {

    port: any = () => process.env.SERVER_PORT || 9000;

    db_url: any = () => process.env.MONGO_URI

    jwt_secret: any = () => process.env.JWT_SECRET

    jwt_expires: any = () => process.env.JWT_EXPIRES

}

const defaults = new DefaultExports()
export default defaults