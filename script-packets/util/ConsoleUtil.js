function consoleTemplate(type = "Log", message = "Message") {
    var full_msg = `${type}: ${message}`;
    var send_alert = true;
    
    switch (type.toLowerCase()) {
      case 'warning' || 'warn': console.warn(message);
      case 'error' || 'err': console.error(message);
      default: console.log(message); send_alert = false;
    }
  
    if (send_alert) { alert(full_msg); }
  }
  
  
  export function log(msg = "Message") { consoleTemplate("Log", msg); }
  export function throwWarning(msg = "Warning Message") { consoleTemplate("Warning", msg); }
  export function throwError(msg = "Error Message") { consoleTemplate("Error", msg); }