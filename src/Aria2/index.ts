import {} from "utils/Fetch"

/**
 * Aria2Client 类
 */
class Aria2Client {
    host: string | any = "localhost";
    port: number = 6800;
    path: string = "jsonrpc";
    secure: boolean = false;
    private secret : string = "";
    // constructor(){
    //     this.localhost = "localhsot";
    //     this.port = 6800;
    //     this.path = "/"
    // }
    /**
     * 调用方法
     */
    call = async (method: string, params: Object) => {
        const data = {
            id: "ll",
            method: method,
            jsonrpc: '2.0',
            ...params,
        }
        return fetch(`http://${this.host}:${this.port}/${this.path}`, {
            // headers: { 
            //     "Content-Type": "application/json"
            // },
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
        }).then(rs => rs.json())
    }
}
const Aria2 = new Aria2Client();
export const Aria2Info = {
    /**
     * 获取状态详情
     */
    getSpeedInfo: () => {
        return Aria2.call("aria2.getGlobalStat", {
            id: "ll",
            jsonrpc: "2.0",
            method: "aria2.getGlobalStat",
          })
    }
};
Aria2.host = "192.168.0.5"
Aria2.port = 16800

export default Aria2;