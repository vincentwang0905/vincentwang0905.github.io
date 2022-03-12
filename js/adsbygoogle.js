Swal.fire({
  title: 'Cookie',
  html:
    '本網站使用Cookie</br>是否同意我們使用Cookie收集您的資料?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '<i class="fa-solid fa-check"></i>是的我同意!',
  cancelButtonText: '<a href="about:blink" class="ahref"><i class="fa-solid fa-xmark"></i>否我不同意!</a>',
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  customClass: {
  container: 'text-decoration: none;color: #FFFFFF'
  },
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
  position: 'bottom-end',
  icon: 'success',
  title: '完成，您現在可以瀏覽網站了!',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
})
};
# Swal.fire({
#    title: '注意',
#    icon: 'warning',
#    html:
#      '偵測到您使用廣告攔截器(AD Blocker)</br>請關閉您的廣告攔截器(AD Blocker)',
#    confirmButtonText: '<a href="https://www.friedshrimp.ga/" class="ahref"><i class="fa-solid fa-check "></i>我已關閉!',
#    });
