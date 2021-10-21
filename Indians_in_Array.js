let pisnicka = [];
let radekSloka1 = " ";
let radekSloka2 = " ";
let i = 0; // místo v poli, kam budu vkládat radekSloka1


for (let pocet = 1; pocet <= 10; pocet++) {
  radekSloka1 += pocet
  radekSloka1 += " little";
  radekSloka2 += 11 - pocet;
  radekSloka2 += " little"
  
  if (pocet % 3 === 0) {
    radekSloka1 += " Indians,";
    radekSloka2 += " Indians,";
    pisnicka.splice(i, 0, radekSloka1);
    i += 1;
    pisnicka.push(radekSloka2);
    radekSloka1 = " ";
    radekSloka2 = " ";

  } else if (pocet === 10) {
      radekSloka1 += " Indian boys.\n";
      radekSloka2 += " Indian boy."
      pisnicka.splice(i, 0, radekSloka1);
      pisnicka.push(radekSloka2)
      radekSloka1 = " ";
      radekSloka2 = " ";
    
  } else {
    radekSloka1 += ", ";
    radekSloka2 += ", ";
    
  }
  
}


for (i = 0; i < pisnicka.length; i++) {
    console.log(pisnicka[i])
}

