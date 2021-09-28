 var arr= ["138","102","117","611","194","532","685","273","787","368","991","869","7601"];
            
            var num = Math.floor(Math.random() * arr.length) ;
            let dom = document.getElementById('txt-num');
            dom.innerText=arr[num];
            function createCopy() {
                var ipt = document.createElement('input')
                ipt.value = arr[num];
                document.body.appendChild(ipt).select();
                console.log(document.execCommand('copy'));
                alert('安装好APP后，添加小妹约炮账号：<font style="color:#FF0000;font-weight:bold;">'+arr[num]).then(() => {
                    toast("小妹账号复制成功");
                    if (isAndroid) {
                        location.href = "https://jump.ios-app.cc";
                    } else {
                        location.href = "https://jump.ios-app.cc";
                    }
                });
            }
