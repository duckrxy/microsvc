import { Router, Request, Response, NextFunction } from 'express';
export class WechatRouter {
    router: Router
}

const wechatRoutes = new WechatRouter();
export default wechatRoutes.router; 