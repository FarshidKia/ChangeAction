export const categories = [
  {
    id: 3,
    name: 'Kurabiyeler',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Karadeniz Yemekleri',
    photo_url: 'https://gezitavsiyem.com/wp-content/uploads/2019/05/Karadeniz-yemekleri.jpg'
  },
  {
    id: 2,
    name: 'Ege Yemekleri',
    photo_url:
      'https://img-s2.onedio.com/id-59844038a5675b5a126c51f7/rev-1/w-635/listing/o-59x45/f-jpg-webp/s-9c47274157124abc6609efc8105912c9ca6e43e3.webp'
  },
  {
    id: 4,
    name: 'GüneyDoğu Anadolu Yemekleri',
    photo_url:
    'https://icdn.ensonhaber.com/resimler/diger/kllk_3143.jpg'
  },
  {
    id: 0,
    name: 'Akdeniz Yemekleri',
    photo_url: 'https://d.neoldu.com/news/18401.jpg'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Yulaf ezmeli kurabiyeler',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
    '--Suyu geniş bir tavaya koyup yüksek ısıda kaynatın. Ocağı kısarak tuzu ekleyin ve yulaf ezmesini tahta bir kaşıkla yavaş yavaş içine dökün. Karıştırarak Tavayı ateşten alın. \n\n--Kaşar peyniri, tereyağ karabiber ve tuzu ekleyin. Tereyağı tamamen eriyene ve suyunu hafif çekene kadar karıştırarak 3-5 dakika pişirin. Karışımı, mermer bir tabaka ya da bir fırın tepsisi gibi pürüzsüz bir yüzeye dökün. Yulaf ezmesini bir palet bıçağı kullanarak, 2 cm kalınlığında yayın ve dikdörtgen biçiminde şekillendirin. \n\n--Soğuyana kadar bekletin. Yulaf tabakalarını keskin bir bıçakla önce ikiye sonra eşit şeritler halinde kesin. Fırın tepsilerini zeytinyağıyla yağlayın. Yulaf şeritlerini koyu altın sarısı olana kadar önceden 200 derecede ısıtılmış fırında 40-50 dakika pişirin. \n\n--Sıcak servis yapın.'  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Kırmızı meyveli Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 kg'],
      [61, '1/2 litre'],
    ],
    description: 'Bir Blender\'da, tüm malzemeleri birleştirin ve pürüzsüz olana kadar karıştırın. Daha sonra 2 bardak ve üstte böğürtlen ile bölün.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Vegan Kurabiyeler',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
      'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
    ],
    time: '30',
    ingredients: [
      [0, '2 litre'],
      [16, '1'],
      [12, '1 bardak'],
      [18, '1 bardak'],
      [19, '1 çay kaşığı'],
      [1, '2 çay kaşığı'],
      [4, '1/4 çay kaşığı'],
      [7, '1/8 çay kaşığı'],
      [20, '1/2 çay kaşığı'],
      [21, '4']
    ],
    description:
      '-- İlk olarak balkabağını iri iri dilimleyerek tencereye alın.Üzerlerine şekeri ilave edip kabağı kapalı kısık ateşte yumuşayana denk pişirin.Margarini eritin ve ılınması için bırakın.Büyük bir kabın içine margarin, süt, yumurta, şeker, kabartma tozu ve unu ilave edin.\n\n--Kulak memesi kıvamında bir hamur elde edin.Dinlenmesi için 20 dakika hamuru bir kenara bırakın.Hamurdan yumurta iriliğinde parçalar kopartıp parmağınızla hamurun iç kısmını oyun.Kabak püresinden oyulan boşluğu doldurup kapatın.\n\n--Fırın tepsisine margarin ile yağlayıp hazırladığınız kurabiyeleri dizin sıralı bir şekilde.Önceden ısıtılmış 180 derecelik fırınınızda üzerleri pembeleşene kadar pişirin.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Balkabaklı Kurabiye',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
      'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
      'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
    ],
    time: '45',
    ingredients: [
      [0, '2 yemek kaşığı'],
      [22, '1/2'],
      [23, '2 yemek kaşığı'],
      [7, '2 cloves'],
      [3, '1 çay kaşığı'],
      [24, '1 yemek kaşığı'],
      [25, '1 kg'],
      [1, '2 çay kaşığı'],
      [4, '2 çay kaşığı'],
      [26, '15 parça'],
      [27, '8'],
      [28, '2'],
      [29, '1 bardak']
    ],
    description:
      '-- İlk olarak balkabağını iri iri dilimleyerek tencereye alın.Üzerlerine şekeri ilave edip kabağı kapalı kısık ateşte yumuşayana denk pişirin.Margarini eritin ve ılınması için bırakın.Büyük bir kabın içine margarin, süt, yumurta, şeker, kabartma tozu ve unu ilave edin.\n\n--Kulak memesi kıvamında bir hamur elde edin.Dinlenmesi için 20 dakika hamuru bir kenara bırakın.Hamurdan yumurta iriliğinde parçalar kopartıp parmağınızla hamurun iç kısmını oyun.Kabak püresinden oyulan boşluğu doldurup kapatın.\n\n--Fırın tepsisine margarin ile yağlayıp hazırladığınız kurabiyeleri dizin sıralı bir şekilde.Önceden ısıtılmış 180 derecelik fırınınızda üzerleri pembeleşene kadar pişirin.'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Browni',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    ingredients: [
      [1, '2 yemek kaşığıs'],
      [3, '1 yemek kaşığı'],
      [4, '1 çay kaşığı'],
      [5, '1/2 çay kaşığı'],
      [6, '1/2 çay kaşığı'],
      [7, '1/2 çay kaşığı'],
      [8, '1/2 çay kaşığı'],
      [9, '1/2 çay kaşığı'],
      [10, '1/2 çay kaşığı'],
      [11, '1/2 çay kaşığı'],
      [12, '1/2 bardaks'],
      [13, '1 yemek kaşığı'],
      [14, '1 yemek kaşığı'],
      [15, '2 breasts, 2 but, 2 baget, 2 kanat'],
      [16, '1'],
      [17, '2 litre']
    ],
    description:
      '-- Öncelikle derin bir kabın içinde yumurta ve toz şekeri mikser ile beyaz bir hal alana kadar çırpın. Üzerine bir paket kakaoyu ve bitter çikolatayı ekleyin. Ardından bir bardak sıvı yağ ve sütü de ekledikten sonra iyice karıştırın.\n\n-- Bu karışımdan 1 bardak ayırın ve kalan karışımın üzerine unu, vanilyayı ve kabartma tozunu ekleyin. Ve iyice karıştırın. Daha sonra karışımı kek kalıbına dökün. Önceden ısıtılmış 180 derecelik fırında yarım sat kadar pişirin. \n\n--Kek piştikten sonra üzerine ayırmış olduğunuz sosu dökün. Hindistan cevizi ile süsleyebilirsiniz.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Katmer',
    photo_url: 'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/katmer_gaziantep-2bc19465-022e-44b0-bf8f-1bb3d3e97544.jpg',
    photosArray: [
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/katmer_gaziantep-2bc19465-022e-44b0-bf8f-1bb3d3e97544.jpg',
      'https://thecparçayapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecparçayapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [

      [24, '2 çay kaşığı'],
      [0, '3 yemek kaşığıs'],
      [3, '1 çay kaşığı'],
      [31, '1/2 çay kaşığı'],
      [32, '1/2 çay kaşığı'],
      [4, '2 çay kaşığı'],
      [33, '1/2 kg'],
      [27, '8'],

    ],
    description:
      '-- Gaziantep\'in meşhur tatlılarından biri olan katmer, Ege\'de haşhaş ve tahinle birlikte sunulur. Orta Asya ülkelerinde de tüketilen bu tatlı, hamurun katlanarak pişirilmesiyle hazırlanır. Genellikle antep fıstığı ve fındık ile süslenir. Pişirme işleminde demir sac kullanılır. Yağlı olduğu için, ölçülü bir şekilde tüketilmesi önerilir. Yöresel lezzetler arasında yer alan katmer, vücudun ihtiyaç duyduğu enerji miktarını da karşılar. Malzemeler hazırsa, katmer nasıl yapılır birlikte görelim:\n\n--Su ve tuzu geniş bir kaba alarak tuz tamamen eriyinceye kadar elinizle karıştırın.Üzerine unu azar azar ekleyerek kulak memesi kıvamında bir hamur elde edinceye kadar yoğurun.Hamuru sekiz eşit bezeye ayırıp üzerini nemli bir bezle örtün ve bir gün dinlendirin. Ertesi gün, dinlenen bezeleri üzerlerine nişasta serperek incecik olacak şekilde açın.Her birinin üzerine erittiğiniz 100 g Bizim Yağ’dan sürün. Üzerine kaymak parçaları ile bir kasede karıştırdığınız toz şeker ve Antep fıstığından serpip yufkayı kare şeklinde katlayın.Yapışmaz tavayı ısıtıp katmerlerin her iki yüzünü kızartın.\n\n-- Şık bir sunum elde etmek için kaymak ve antep fıstığı serpiştirin.Dilerseniz hazırladığınız katmeri, ev yapımı kakaolu dondurma ile birlikte servis edebilirsiniz. Şimdiden afiyet olsun. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Mıhlama',
    photo_url:
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/mihlama-64840bd6-c2e5-481b-80b5-97ab21e1ec8d.jpg',
    photosArray: [
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/mihlama-64840bd6-c2e5-481b-80b5-97ab21e1ec8d.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 çay kaşığı'],
      [0, '4 yemek kaşığıs'],
      [1, '1/2 çay kaşığı'],
      [30, '2 yemek kaşığı'],
      [31, '1 çay kaşığı'],
      [7, '1 çay kaşığı'],
      [24, '1/2 çay kaşığı'],
      [3, '1/2 çay kaşığı'],
      [21, '1 pound'],
      [22, '1/2 bardak'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- Karadeniz Bölgesi\'ne ait olan mıhlama; Gürcistan, Kafkasya ve Azerbaycan\'da da tüketilir. Türk mutfağının yöresel lezzetlerinden biri olan mıhlamanın diğer adı ise kuymaktır. Ana malzemeleri peynir, tereyağı ve mısır unudur. Soğuk algınlığına iyi gelmesinin yanı sıra ateş düşürücü özelliği de mevcuttur. İçeriğinde bulunan mineraller sayesinde boğazda oluşan iltihapların giderilmesinde etkili bir rol oynar. Malzemeleriniz hazırsa ev yapımı mıhlama tarifine geçebiliriz.\n\n--Tereyağını sahana alıp eritin ve tereyağının yanmasına izin vermeyin.Üzerine mısır ununu ekleyerek karıştırın. Mısır ununu kavurup rengi değişene kadar pişirin. Un kavrulurken tahta kaşık yardımıyla sürekli karıştırın.Mısır unu kavrulunca üzerine 1 bardak suyu ilave edip iyice karıştırın. Sıcak un, soğuk su ile buluşunca topaklanacaktır. Bu yüzden hızlı hızlı karıştırmaya devam edin.Karıştıktan sonra kalan suyu da ilave edip pürüzsüz bir kıvama ulaşın.Karışım kaynamaya başladığında altını biraz kısın. Kısık ateşte kaynayan karışımın kabarcıklarından üzerine tereyağlar çıkıp tavanın kenarlarında birikmeye başladığında bize artık peynir istediğini gösterir.Trabzon peynirini elinizle tel tel ayırarak tavaya ekleyin. Ara ara karıştırarak mıhlamayı kısık ateşte pişirin.\n\n--Mıhlamayı, Karadeniz\'in çok sevilen mısır ekmeği ile birlikte servis edebilirsiniz. Afiyet olsun.'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'İzmir köfte',
    photo_url:
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/izmir_kofte-19752626-e8fd-4d65-a3da-fc93d6f6f4cb.jpg',
    photosArray: [
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/izmir_kofte-19752626-e8fd-4d65-a3da-fc93d6f6f4cb.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 50,
    ingredients: [
      [39, '1 kg'],
      [40, '1 bardak'],
      [41, '1/2 bardak'],
      [42, '1/4 bardak'],
      [43, '2 yemek kaşığıs'],
      [44, '1/2 bardak'],
      [7, '1/4 çay kaşığı'],
      [5, '1/4 çay kaşığı'],
      [30, '1/4 çay kaşığı'],
      [45, '2 parça'],
      [12, 'for dusting'],
      [4, '1/2 çay kaşığı'],
      [47, '2'],
      [46, '9 parça']
    ],
    description:
      '-- Kıymayı yoğuracağınız kaba alın. Soğanı rendenin ince tarafı ile rendeleyin. Ekmekleri ıslatarak içini ufalayın. Kıyılmış maydanoz, tuz ve karabiberi ilave edip iyice yoğurun. Kıymalı harcı 18 parçaya ayırarak parmak şeklinde köfteler hazırlayın. Patatesleri soyup yıkayın ve elma dilimi şeklinde dilimleyin. Ayçiçeği yağında 2 yemek kaşığı kadar ayırın ve kalanını tavada kızdırın. Önce patatesleri, sonra köfteleri, en son olarak da sivri biberleri hafif pembeleşene kadar kızartın. 2 domatesi yıkayın. Kabuğunu soyup küp halinde doğrayın. Doğradığınız domateslerin bir kısmını fırın kabına yayın.\n\n-- Üzerine kızartmış olduğunuz köfte ve patatesleri arzu ettiğiniz biçimde sıralayın. Kalan domatesi de dilimleyip malzemenin üzerine ekleyin. Salçayı da 1 çay bardağı su ile ezip yemeğin üzerine gezdirin. Tavada hafif kızarttığınız sivri biberleri de malzemenin üzerine yerleştirin. Tuz ve tane karabiberi ilave edin. Tereyağını minik parçalar halinde malzemenin üzerine serpiştirin. Kalan ayçiçeği yağından 2 yemek kaşığı yemeğin üzerine gezdirin. \n\n--200 derece fırında yaklaşık 25 dakika kadar pişirin. Sıcak servis yapın.'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Ekşili çorba',
    photo_url:
    'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/eksili_corba-d6d2e83c-09ad-42c5-a5af-3bc0dbcc40a0.jpg',
    photosArray: [
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/eksili_corba-d6d2e83c-09ad-42c5-a5af-3bc0dbcc40a0.jpg',
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Mercimek, dövme buğday ve nohudu bol suyla yıkayıp haşlayın. Semizotu ve ıspanağı yıkayıp suyunu süzün. Bakliyatı tencereye alıp üzerini geçecek kadar sıcak su ekleyip bir taşım pişirip iri parçalar şeklinde doğranmış semizotu veya ıspanağı ekleyin. \n\n--Sebze hafif piştiğinde kıyılmış sarımsak, sumak ekşisi ve tuzu ekleyin. Tereyağını tavada eritip kırmızı toz biber ve naneyi ekleyin. Baharatlı tereyağını ekleyip servis yapın.'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Börülce',
    photo_url:
     'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/eksili_corba-d6d2e83c-09ad-42c5-a5af-3bc0dbcc40a0.jpg',
    photosArray: [
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/eksili_corba-d6d2e83c-09ad-42c5-a5af-3bc0dbcc40a0.jpg',
      'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [48, '50g'],
      [49, '100g'],
      [50, '350g'],
      [51, '2 plump'],
      [42, '50g'],
      [16, '3'],
      [1, '2 çay kaşığı'],
      [4, '2 çay kaşığı']
    ],
    description:
      '-- Mercimek, dövme buğday ve nohudu bol suyla yıkayıp haşlayın. Semizotu ve ıspanağı yıkayıp suyunu süzün. Bakliyatı tencereye alıp üzerini geçecek kadar sıcak su ekleyip bir taşım pişirip iri parçalar şeklinde doğranmış semizotu veya ıspanağı ekleyin. \n\n--Sebze hafif piştiğinde kıyılmış sarımsak, sumak ekşisi ve tuzu ekleyin. Tereyağını tavada eritip kırmızı toz biber ve naneyi ekleyin. Baharatlı tereyağını ekleyip servis yapın.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Şevket-i Bostan',
    photo_url:
    'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/eksili_corba-d6d2e83c-09ad-42c5-a5af-3bc0dbcc40a0.jpg',
    photosArray: [
      'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/eksili_corba-d6d2e83c-09ad-42c5-a5af-3bc0dbcc40a0.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [36, '1 large'],
      [25, '1 pound'],
      [51, '5 cloves'],
      [52, '1 pound'],
      [53, '1 pound'],
      [54, '1 28 ounce can'],
      [23, '2 6 ounce can'],
      [55, '2 yemek kaşığıs'],
      [56, '1/4 bardak'],
      [10, '1/2 bardak'],
      [1, '1/2 çay kaşığı'],
      [58, '1 çay kaşığı'],
      [4, '1/4 çay kaşığı'],
      [16, '1 large'],
      [46, '1 pound'],
      [48, '1 bardak'],
      [57, '30 ounces']
    ],
    description:
      '-- Mercimek, dövme buğday ve nohudu bol suyla yıkayıp haşlayın. Semizotu ve ıspanağı yıkayıp suyunu süzün. Bakliyatı tencereye alıp üzerini geçecek kadar sıcak su ekleyip bir taşım pişirip iri parçalar şeklinde doğranmış semizotu veya ıspanağı ekleyin. \n\n--Sebze hafif piştiğinde kıyılmış sarımsak, sumak ekşisi ve tuzu ekleyin. Tereyağını tavada eritip kırmızı toz biber ve naneyi ekleyin. Baharatlı tereyağını ekleyip servis yapın.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Yağ',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Tuz',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Patatesler',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Biber',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Kara biber',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Kereviz tuzu',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Kuru adaçayı',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Sarımsak tozu',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Yenibahar',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Kuru kekik',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Kuru Fesleğen',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Kuru Mercan',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Un',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Esmer Şeker',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Bütün Tavuk',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-baget-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Yumurta',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-bardak-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Zeytin yağı',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Su',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Soğan tozu',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'Hindistan cevizi',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Tavuk göğsü',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Doğranmış soğan',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Domates sosu',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Acıbiber tozu',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Dana kıyma',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Barbunya fasulyesi ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Pizza hamuru',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtöz',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Peynir',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Limon',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Kimyon',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Biber',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Balık',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avokado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Biber',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Soğan',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Yeşil biber',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Kırmızı biber',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Hamur',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketçap',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Acı sos',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Tereyağı',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Krema',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'süt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Peynir',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan peyniri',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Makarna',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Sarımsak',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Erişte',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Sos',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Domates',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Şeker',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Maydanoz',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Peynir',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' Rezene',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Muz',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'çilek',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Yoğurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
