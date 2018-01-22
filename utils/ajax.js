import $ from 'jquery';
function getDataWithToken(url) {
  return new Promise((resolve, reject)=>{
    $.ajax({
      url: url,
      success: (data)=> {
        resolve(data);
      },
      error: (error)=> {
        reject(error);
      }
    });
  });
}
function postDataWithToken(url, data) {
  return new Promise((resolve, reject)=>{
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: (data)=> {
        resolve(data);
      },
      error: (error)=> {
        reject(error);
      }
    });
  }); 
}
export {
  getDataWithToken,
  postDataWithToken
};