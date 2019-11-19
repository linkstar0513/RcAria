import { } from "utils/Fetch"

export interface Aria2RpcResponse<T> {
  id?: any;
  jsonrpc: string;
  result: T;
  error?: any;
}

export interface GlobalStat {
  downloadSpeed: number; // 总体下载速度（字节/秒）。
  uploadSpeed: number; // 总体上传速度（字节/秒）。
  numActive: number; //  活动下载数
  numWaiting: number; //  等待下载的次数。
  numStopped: number; // 当前会话中已停止的下载数。该值由--max-download-result选项限制
  numStoppedTotal: number; // 当前会话中已停止的下载次数，但不受 该--max-download-result选项的限制。
}

/**
 * Aria2Client 类
 */
class Aria2Client {
  host: string | any = "localhost";
  port: number = 6800;
  path: string = "jsonrpc";
  secure: boolean = false;
  secret: string = "";
  // constructor(){
  //     this.localhost = "localhsot";
  //     this.port = 6800;
  //     this.path = "/"
  // }
  /**
   * 调用方法
   */
  call = async (method: string, parameters?: Object | Array<any>) => {
    let params: Array<any> = []
    const data = {
      id: new Date().getTime(),
      method: method,
      jsonrpc: '2.0',
      // params,
    }
    
    if (Array.isArray(parameters)) {
      // params = params.concat(parameters)
      params.push(parameters)
    }
    if (params) Object.assign(data, { params })
    // TODO 加密
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
export const Aria2Info: any = {
  /**
   * 获取状态详情
   */
  getSpeedInfo: () => {
    return Aria2Info.getGlobalStat()
  },
  addUri: () => { },
  addTorrent: () => { },
  addMetalink: () => { },
  remove: () => { },
  forceRemove: () => { },
  pause: () => { },
  pauseAll: () => { },
  forcePause: () => { },
  forcePauseAll: () => { },
  unpause: () => { },
  unpauseAll: () => { },
  tellStatus: () => { },
  getUris: () => { },
  getFiles: () => { },
  getPeers: () => { },
  getServers: () => { },
  tellActive: () => { },
  tellWaiting: () => { },
  tellStopped: () => { },
  changePosition: () => { },
  changeUri: () => { },
  getOption: () => { },
  changeOption: () => { },
  getGlobalOption: () => { },
  changeGlobalOption: () => { },

  /**
   * 此方法返回全局统计信息，例如总体下载和上传速度。响应是一个结构，包含以下键。值是字符串。
   * downloadSpeed 总体下载速度（字节/秒）。
   * uploadSpeed 总体上传速度（字节/秒）
   * numActive 活动下载数。
   * numWaiting 等待下载的次数。
   * numStopped 当前会话中已停止的下载数。该值由--max-download-result选项限制。
   * numStoppedTotal 当前会话中已停止的下载次数，但不受 该--max-download-result选项的限制。
   */
  getGlobalStat: () => {
    return Aria2.call("aria2.getGlobalStat")
  },
  purgeDownloadResult: () => { },
  removeDownloadResult: () => { },
  getVersion: () => { },
  getSessionInfo: () => { },
  shutdown: () => { },
  forceShutdown: () => { },
  saveSession: () => { },
  multicall: () => { },
  listMethods: () => { },
  listNotifications: () => { },
  onDownloadStart: () => { },
  onDownloadPause: () => { },
  onDownloadStop: () => { },
  onDownloadComplete: () => { },
  onDownloadError: () => { },
  onBtDownloadComplete: () => { },
};
export class Aria2Rpc {
  static addUri: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static addTorrent: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static addMetalink: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static remove: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static forceRemove: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static pause: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static pauseAll: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static forcePause: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static forcePauseAll: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static unpause: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static unpauseAll: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static tellStatus: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getUris: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getFiles: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getPeers: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getServers: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  /**活动中的数据 */
  static tellActive: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.tellActive", ["gid","totalLength","completedLength","uploadSpeed","downloadSpeed","connections","numSeeders","seeder","status","errorCode","verifiedLength","verifyIntegrityPending"])
  }
  static tellWaiting: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static tellStopped: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static changePosition: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static changeUri: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getOption: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static changeOption: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getGlobalOption: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static changeGlobalOption: () => Promise<Aria2RpcResponse<any>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
  static getGlobalStat: () => Promise<Aria2RpcResponse<GlobalStat>> = () => {
    return Aria2.call("aria2.getGlobalStat")
  }
}
Aria2.host = "192.168.0.5"
Aria2.port = 16800

export default Aria2;