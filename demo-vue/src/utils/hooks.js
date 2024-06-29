import {ref,onMounted} from 'vue';
export function useMouse(){
    let x=ref(0);
    let y=ref(0);

    onMounted(()=>window.addEventListener('mousemove',(event)=>{
        x.value=event.pageX;
        y.value=event.pageY;
    }))
    return {x,y};      //返回对象{x，y}
    //return (x,y);    //取值，返回y的值


}