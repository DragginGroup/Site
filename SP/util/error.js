export var ERR_SIGNATURE = "DraggingBlog - the shits and giggles blog site"

export function throwError(error_message)
{
  error(error_message);
  throw error_message;
}

export function error(err_msg)
{
  var msg = err_msg + ' - ' + ERR_SIGNATURE

  alert(msg);
  console.error(msg);
}
