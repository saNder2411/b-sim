(ns app.shared.components.equipment-bg
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc equipment-bg [{:keys [id-path]}]
  (<>
    (d/path {:fill "#ececec" :fill-rule "evenodd" :d "m 149.9907,349.4276 263.4454,0 c 1.6025,0 4.1275,1.7169 4.1275,4.2381 l 3e-4,76.3736 c 0,2.622 -2.6225,4.1112 -4.2886,4.1112 l -263.2846,0.033 c -1.5982,0 -4.2694,-1.5897 -4.2694,-4.1052 l 0,-76.4078 c 0,-2.5156 2.67,-4.2426 4.2694,-4.2429 z"})
    (d/path {:fill "#2d3279" :fill-rule "evenodd" :d "m 178.4235,369.797 c 0,1.1773 -0.1685,2.3139 -0.4802,3.3905 -0.182,0.6253 -0.4125,1.2313 -0.6874,1.8122 -0.06,0.1259 -0.1897,0.2054 -0.3311,0.2054 l -21.3467,0 c -0.1414,0 -0.2691,-0.0795 -0.3292,-0.2073 -0.275,-0.5809 -0.5073,-1.185 -0.6893,-1.8103 -0.3118,-1.0766 -0.4802,-2.2132 -0.4802,-3.3905 0,-6.6101 5.2975,-12.0083 11.871,-12.169 l 0.002,0 0.004,0 c 0.0984,0.003 0.1416,0.1272 0.0656,0.1937 l -3.2508,2.7881 c -3.706,1.4076 -6.347,4.9935 -6.347,9.1872 0,1.0978 0.1839,2.1531 0.519,3.1426 l 9.3092,-0.97 9.3093,0.97 c 0.3331,-0.9895 0.517,-2.0448 0.517,-3.1426 0,-0.3289 -0.0174,-0.6544 -0.0484,-0.9758 -0.0136,-0.1432 -0.031,-0.2865 -0.0523,-0.4279 -0.0213,-0.153 -0.0464,-0.3059 -0.0755,-0.4549 -0.7861,-4.0874 -4.1144,-7.2821 -8.2695,-7.8688 l 0,10.7421 c 0,0.0639 -0.0562,0.1142 -0.1201,0.1085 l -1.2431,-0.1356 c -0.0116,-0.002 -0.0232,-0.002 -0.0348,0 l -1.243,0.1356 c -0.0658,0.006 -0.122,-0.0446 -0.122,-0.1085 l 0,-10.5775 c 0,-0.1065 0.0464,-0.2072 0.1278,-0.277 l 2.6352,-2.2537 c 5.2374,0.5963 9.4719,4.523 10.531,9.6017 0.0271,0.1278 0.0523,0.2594 0.0755,0.3893 0.004,0.0212 0.008,0.0444 0.0117,0.0676 0.004,0.0252 0.01,0.0504 0.0115,0.0756 0.0214,0.1278 0.0407,0.2555 0.0582,0.3852 0.0135,0.1027 0.0251,0.2054 0.0367,0.3099 0.008,0.087 0.0175,0.1723 0.0232,0.2595 0.0117,0.1219 0.0194,0.2458 0.0252,0.3677 0.004,0.0738 0.008,0.1473 0.01,0.2209 0.006,0.1374 0.008,0.2768 0.008,0.4161 z"})
    (d/path {:fill "#2d3279" :fill-rule "evenodd" :d "m195.258 366.7086c-0.1009 0-0.1764-0.0902-0.1617-0.19 0.1139-0.784 0.3838-1.5425 0.8047-2.0039 0.4682-0.5131 1.1062-0.7728 1.895-0.7728 0.7766 0 1.3809 0.2509 1.7954 0.7466 0.3801 0.4526 0.5904 1.227 0.6268 2.0509 4e-3 0.0923-0.0716 0.1692-0.164 0.1692zm6.8141 0.3733c0-1.3982-0.3845-2.6709-1.1437-3.5285-0.7613-0.8602-1.809-1.2959-3.1136-1.2959-1.3908 0-2.5156 0.5006-3.3433 1.4894-0.8227 0.9838-1.2398 2.4549-1.2398 4.1191 0 1.6543 0.4494 3.0943 1.3372 4.0293 0.889 0.9364 2.1161 1.4108 3.648 1.4108h3.2999c0.0908 0 0.1646-0.0735 0.1646-0.1643v-1.2139c0-0.0908-0.0738-0.1643-0.1646-0.1643h-3.1678l-0.0759 2e-3c-1.0138 0-1.809-0.3046-2.3634-0.9038-0.5138-0.5551-0.8076-1.4907-0.8738-2.5329-6e-3 -0.0938 0.0701-0.173 0.164-0.173h6.7086c0.0905 0 0.1636-0.0734 0.1636-0.164v-0.9098zm31.748 1.4552 1.4443-4.4487c0.0329-0.1012 0.1758-0.1016 0.2091-6e-4l1.4715 4.4487c0.0237 0.0712-0.0296 0.1446-0.1044 0.1446h-2.9157c-0.0749 0-0.1278-0.073-0.1048-0.144zm2.4403-6.2796h-1.7696c-0.0687 0-0.1304 0.0428-0.1546 0.1074l-4.0214 10.793c-0.0269 0.0718 0.0261 0.1484 0.103 0.1484h1.6292c0.0699 0 0.1324-0.0442 0.1556-0.1102l1.003-2.8478c0.0232-0.066 0.0858-0.1102 0.1556-0.1102h3.9916c0.0699 0 0.1318 0.0436 0.1554 0.1093l1.0249 2.8496c0.0234 0.0656 0.0856 0.1093 0.1553 0.1093h1.645c0.0766 0 0.1299-0.0766 0.1032-0.1484l-4.0215-10.793c-0.0242-0.0646-0.086-0.1074-0.1547-0.1074zm-9.8194 4.6704c-0.3779 0.3124-0.9876 0.4685-1.8289 0.4685h-1.0893c-0.0912 0-0.1652-0.0739-0.1652-0.1651v-3.2822c0-0.0911 0.074-0.165 0.1651-0.165h1.029c0.8211 0 1.4359 0.1359 1.8438 0.4081 0.4082 0.272 0.6123 0.7205 0.6123 1.3451 0 0.6148-0.189 1.0782-0.5668 1.3906zm2.4257-1.4511c0-1.078-0.3425-1.8841-1.0275-2.4182-0.6854-0.534-1.7411-0.8011-3.1667-0.8011h-2.956c-0.091 0-0.165 0.0738-0.165 0.1651l1e-4 10.718c0 0.0912 0.0738 0.1651 0.1649 0.1651h1.476c0.0912 0 0.1651-0.0739 0.1651-0.1651v-4.0832c0-0.0912 0.074-0.1651 0.1651-0.1651h1.5134c0.0641 0 0.1224 0.0371 0.1495 0.0953l1.9738 4.223c0.0269 0.0581 0.0854 0.0951 0.1494 0.0951h1.7694c0.0826 0 0.1357-0.0875 0.0977-0.1607l-2.4011-4.6242c-0.0294-0.0566-3e-3 -0.1254 0.0554-0.1507 1.3577-0.5892 2.0365-1.5538 2.0365-2.8937zm-9.008-1.8353v-1.2189c0-0.0913-0.074-0.1651-0.1652-0.1651h-7.9751c-0.0913 0-0.1651 0.0738-0.1651 0.1651v1.2189c0 0.0913 0.0738 0.1651 0.1651 0.1651h2.9195c0.0911 0 0.1649 0.074 0.1649 0.1651l1e-4 9.1693c0 0.0912 0.0739 0.1651 0.1651 0.1651h1.476c0.0912 0 0.1651-0.0739 0.1651-0.1651l1e-4 -9.1693c0-0.0911 0.0737-0.1651 0.1649-0.1651h2.9194c0.0912 0 0.1652-0.0738 0.1652-0.1651zm-9.2046 6.6644c0-0.4988-0.0883-0.932-0.2649-1.2997-0.1761-0.3678-0.4532-0.698-0.8312-0.9901-0.3778-0.2921-0.9722-0.6071-1.7832-0.9447-0.7207-0.2972-1.2195-0.5365-1.4965-0.7179-0.2773-0.1814-0.4762-0.3741-0.597-0.5782-0.121-0.2039-0.1812-0.4496-0.1812-0.7367 0-0.4182 0.151-0.7545 0.4532-1.009 0.3023-0.2542 0.7449-0.223 1.3295-0.223h2.4296c0.0911 0 0.1651-0.0738 0.1651-0.165v-1.219c0-0.0913-0.074-0.1651-0.1652-0.1651h-3.1349c-0.6128 0-1.2237 0.1617-1.7252 0.5137-0.0552 0.0386-0.1088 0.079-0.1609 0.1212-0.655 0.5289-0.9822 1.2544-0.9822 2.1764 0 0.7356 0.2064 1.3653 0.6196 1.8892 0.413 0.5241 1.1232 0.99 2.1312 1.3981 0.977 0.3931 1.6219 0.7331 1.9344 1.0203 0.3123 0.2872 0.4686 0.6374 0.4686 1.0503 0 0.4585-0.17 0.8239-0.51 1.096-0.3402 0.272-1.2779 0.2492-1.9931 0.2492h-2.4857c-0.0915 0-0.165 0.0739-0.165 0.165v1.2041c0 0.0912 0.0735 0.1651 0.1649 0.1651h3.6218c0.6186 0 1.2364-0.1433 1.7662-0.4627 0.1146-0.069 0.2234-0.1439 0.3264-0.225 0.7104-0.5593 1.0657-1.33 1.0657-2.3125zm-19.636-8.0484h-3.2817c-0.8442 0-1.6851 0.1949-2.4149 0.6191-0.3496 0.2033-0.6685 0.4464-0.9568 0.7298-1.0229 1.0052-1.5341 2.3971-1.5341 4.1753 0 1.8038 0.4533 3.2006 1.3602 4.1906 0.206 0.2248 0.4318 0.4241 0.6773 0.5979 0.7054 0.4988 1.4905 0.7359 2.2326 0.7359h4.6938c0.0912 0 0.165-0.0739 0.165-0.1651v-5.6626c0-0.0912-0.0738-0.1651-0.165-0.1651h-3.7355c-0.0912 0-0.1652 0.0739-0.1652 0.1651v1.219c0 0.0911 0.074 0.1651 0.1652 0.1651h1.9596c0.091 0 0.165 0.0739 0.165 0.165v2.5198c0 0.0909-0.0726 0.1647-0.1634 0.165-0.3658 2e-3 -1.2539 6e-3 -1.7107 6e-3 -1.1588 0-2.0467-0.139-2.6638-0.8418-0.6173-0.7028-0.9259-1.7292-0.9259-3.0794 0-1.2849 0.3425-2.2975 1.0277-3.0381s1.3449-0.8815 2.5239-0.8815h2.7467c0.091 0 0.165-0.0739 0.165-0.1651v-1.2897c0-0.0913-0.074-0.1651-0.165-0.1651z"})
    (d/path {:fill "#151616" :fill-rule "evenodd" :d id-path})
    (d/path {:fill "#2d3279" :fill-rule "evenodd" :d "m 154.0894,397.8884 53.8579,0 0,21.3857 -53.8579,0 0,-21.3857 z"})
    (d/path {:fill "#2d3279" :fill-rule "evenodd" :d "m 213.6223,398.0004 136.063,0 0,21.2596 -136.063,0 0,-21.2596 z"})
    (d/path {:fill "#2d3279" :fill-rule "evenodd" :d "m 355.2582,398.0004 53.8571,0 0,21.3857 -53.8571,0 0,-21.3857 z"})))