import * as path from "path";
import * as fs from "fs";
class Logger {
  public baseDir: string;
  public fileName: string;
  public linePrefix: string;
  public logDate: Date = new Date();
  constructor() {
    let _dateString = `${this.logDate.getFullYear()}-${
      this.logDate.getMonth() + 1
    }-${this.logDate.getDate()}`;
    let _timeString = `${this.logDate.getHours()}:${this.logDate.getMinutes()}:${this.logDate.getSeconds()}`;
    this.baseDir = path.join(__dirname, "../../.logs/");
    this.fileName = `${_dateString}.log`;
    this.linePrefix = `[${_dateString} ${_timeString}]`;
  }

  public info(_info: string): void {
    this.addLog("INFO :: " + this.linePrefix + " " + _info);
  }
  public error(_info: string): void {
    this.addLog("ERROR :: " + this.linePrefix + " " + _info);
  }
  public warn(_info: string): void {
    this.addLog("WARNING :: " + this.linePrefix + " " + _info);
  }

  // addLog(_type: string, _info: string) {
  //   _type = _type.toLocaleUpperCase();
  //   const instance = this;
  //   fs.open(
  //     `${instance.baseDir}${instance.fileName}`,
  //     "a",
  //     (_err, _fileDescriptor) => {
  //       if (!_err && _fileDescriptor) {
  //         // Append to file and close it
  //         fs.appendFile(
  //           _fileDescriptor,
  //           `${instance.linePrefix} [${_type}] ${_info}\n`,
  //           (_err) => {
  //             if (!_err) {
  //               fs.close(_fileDescriptor, (_err) => {
  //                 if (!_err) {
  //                   return true;
  //                 } else {
  //                   return console.log(
  //                     "\x1b[31m%s\x1b[0m",
  //                     "Error closing log file that was being appended"
  //                   );
  //                 }
  //               });
  //             } else {
  //               return console.log(
  //                 "\x1b[31m%s\x1b[0m",
  //                 "Error appending to the log file"
  //               );
  //             }
  //           }
  //         );
  //       } else {
  //         return console.log(
  //           "\x1b[31m%s\x1b[0m",
  //           "Error cloudn't open the log file for appending"
  //         );
  //       }
  //     }
  //   );
  // }

  addLog(_info: string) {
    console.log(_info);
  }
}

export default new Logger();
