# deep-lu-trans
json或array的深度key值大小写转换模块

## json example
```
import t from 'deep-lu-trans';

const obj = {
  AS_DD_S: 123213,
  AND_SAJ_JDK_JSAKD_: {
    DJK_ASJ: {
      SA_DSA_DSA: 123123,
      ASDA_SDH_KAS: {
        ASD_SAD: [{
          ASD_SAD_SA: 123123,
          III_ASDA: [1, 23, {
            ASD_SAD: 123
          }]
        }]
      }
    }
  },
  KIO: [{
    OP: 1,
    OOP: 2
  }, {
    OL: 1,
    OP: 2
  }]
};

t.objKeysToLower(obj).then((res) => {
  console.log(JSON.stringify(res));

});
t.objKeysToLower(obj).then((res) => {
  console.log(JSON.stringify(res));
  /*
  {"as_dd_s":123213,"and_saj_jdk_jsakd_":{"djk_asj":{"sa_dsa_dsa":123123,"asda_sdh_kas":{"asd_sad":[{"asd_sad_sa":123123,"iii_asda":[1,23,{"asd_sad":123}]}]}}},"kio":[{"op":1,"oop":2},{"ol":1,"op":2}]}
   */
  t.objKeysToUpper(res).then((_s) => {
    console.log(JSON.stringify(_s));
    /*
    {"AS_DD_S":123213,"AND_SAJ_JDK_JSAKD_":{"DJK_ASJ":{"SA_DSA_DSA":123123,"ASDA_SDH_KAS":{"ASD_SAD":[{"ASD_SAD_SA":123123,"III_ASDA":[1,23,{"ASD_SAD":123}]}]}}},"KIO":[{"OP":1,"OOP":2},{"OL":1,"OP":2}]}
     */
  });
});
```

## array example
```
import t from 'deep-lu-trans';

const arr = [{
  A_B: 1,
  B_C: 2
}, 3, 4, 'abc', [{
  A_B: 1,
  B_C: {
    C_D: [0, {
      CK: 1,
      KL: 2
    }]
  }
}]]

t.arrKeysToLower(arr).then((res) => {
  console.log(JSON.stringify(res));
  /*
  [{"a_b":1,"b_c":2},3,4,"abc",[{"a_b":1,"b_c":{"c_d":[0,{"ck":1,"kl":2}]}}]]
   */
  t.arrKeysToUpper(res).then((_s) => {
    console.log(JSON.stringify(_s));
    [{"A_B":1,"B_C":2},3,4,"abc",[{"A_B":1,"B_C":{"C_D":[0,{"CK":1,"KL":2}]}}]]
  });
})
```
