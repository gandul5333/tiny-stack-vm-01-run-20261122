import{mkdirSync,readdirSync,readFileSync,writeFileSync}from"node:fs";
import{join}from"node:path";
const E=new TextEncoder;
function R(p,q){
const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),O=new Uint8Array(65536);
let s=0,c=0,n=0,j=0,pc=0,t=0;
const F=e=>({o:O.slice(0,n),c:e});
for(;;){
if(t==1e6)return F(10);
if(pc<0||pc>=p.length)return F(9);
const o=p[pc];
if(o>7&&!(o>=16&&o<=34)&&!(o>=48&&o<=52)&&o!=64&&o!=65&&!(o>=80&&o<=83))return F(5);
const m=o==1?1:o==2?4:o>=48&&o<=51?2:0;
if(pc+m>=p.length)return F(9);
t++;
const x=pc+1+m;
const u=o==7?3:o==5||o==6||o==65||o>=16&&o<=34&&o!=23&&o!=27?2:o==3||o==4||o==23||o==27||o==49||o==50||o==64||o==80||o==81||o==83?1:0;
const v=o==6||o==7?3:o==4||o==5?2:o==1||o==2||o==64||o==82||o>=16&&o<=34?1:0;
if(s<u)return F(2);
if(s-u+v>256)return F(3);
pc=x;
if(o==0)return F(0);
if(o==1){D[s++]=(p[x-1]<<24)>>24;continue}
if(o==2){D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;continue}
if(o==3){s--;continue}
if(o==4){D[s]=D[s-1];s++;continue}
if(o==5){const w=D[s-1];D[s-1]=D[s-2];D[s-2]=w;continue}
if(o==6){D[s]=D[s-2];s++;continue}
if(o==7){const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;continue}
if(o>=16&&o<=34){
if(o==23){D[s-1]=-D[s-1]|0;continue}
if(o==27){D[s-1]=~D[s-1];continue}
const b=D[s-1],a=D[s-2];let r=0;
if(o==16)r=a+b|0;else if(o==17)r=a-b|0;else if(o==18)r=Math.imul(a,b);
else if(o==19){if(!b)return F(4);r=a==-2147483648&&b==-1?a:(a/b)|0}
else if(o==20){if(!b)return F(4);r=b==-1?0:a%b|0}
else if(o==21){if(!b)return F(4);r=Math.floor((a>>>0)/(b>>>0))|0}
else if(o==22){if(!b)return F(4);r=(a>>>0)%(b>>>0)|0}
else if(o==24)r=a&b;else if(o==25)r=a|b;else if(o==26)r=a^b;
else if(o==28)r=a<<(b&31);else if(o==29)r=a>>(b&31);else if(o==30)r=(a>>>(b&31))|0;
else if(o==32)r=a==b?1:0;else if(o==33)r=a<b?1:0;else r=a>>>0<b>>>0?1:0;
s-=2;D[s++]=r;continue}
if(o>=48&&o<=50){
const g=((p[x-2]|p[x-1]<<8)<<16)>>16;let k=1;
if(o!=48){const w=D[--s];k=o==49?w==0:w!=0}
if(k)pc=x+g;continue}
if(o==51){if(c==64)return F(7);C[c++]=x;pc=p[x-2]|p[x-1]<<8;continue}
if(o==52){if(!c)return F(8);pc=C[--c];continue}
if(o==64){const a=D[s-1];if(a<0||a>255)return F(6);D[s-1]=M[a];continue}
if(o==65){const a=D[s-1],w=D[s-2];if(a<0||a>255)return F(6);s-=2;M[a]=w;continue}
if(o==80){const y=E.encode(String(D[s-1]));if(n+y.length>65536)return F(11);s--;O.set(y,n);n+=y.length;continue}
if(o==81){if(n+1>65536)return F(11);O[n++]=D[--s]&255;continue}
if(o==82){D[s++]=j<q.length?q[j++]:-1;continue}
return F(D[--s]&255)}
}
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(const d of readdirSync(I,{withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>e.name).sort()){
const r=R(new Uint8Array(readFileSync(join(I,d,"program.bin"))),new Uint8Array(readFileSync(join(I,d,"input.bin"))));
mkdirSync(join(O,d),{recursive:true});
writeFileSync(join(O,d,"stdout.bin"),r.o);
writeFileSync(join(O,d,"exit.txt"),r.c+"\n")}
