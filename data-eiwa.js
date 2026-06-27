const dictEiwa = {
    // ==========================================
    // 前半：日本語の単語（60個）
    // ==========================================
    "東京": {
        search: ["東京", "とうきょう", "トウキョウ", "tokyo"],
        html: "<p><b>英語訳:</b> Tokyo</p><p><b>解説:</b> The capital city of Japan. (日本の首都。)</p>"
    },
    "学校": {
        search: ["学校", "がっこう", "ガッコウ", "school"],
        html: "<p><b>英語訳:</b> school</p><p><b>解説:</b> An institution for educating children. (子供を教育するための施設。)</p>"
    },
    "先生": {
        search: ["先生", "せんせい", "センセイ", "teacher"],
        html: "<p><b>英語訳:</b> teacher</p><p><b>解説:</b> A person who teaches, especially in a school. (学校などで教える人。)</p>"
    },
    "友達": {
        search: ["友達", "ともだち", "トモダチ", "friend"],
        html: "<p><b>英語訳:</b> friend</p><p><b>解説:</b> A person whom one knows and has a bond of mutual affection. (お互いに好意を持っている、よく知る人。)</p>"
    },
    "家族": {
        search: ["家族", "かぞく", "カゾク", "family"],
        html: "<p><b>英語訳:</b> family</p><p><b>解説:</b> A group of one or more parents and their children living together as a unit. (一緒に暮らす親と子の集まり。)</p>"
    },
    "勉強": {
        search: ["勉強", "べんきょう", "ベンキョウ", "study"],
        html: "<p><b>英語訳:</b> study</p><p><b>解説:</b> The devotion of time and attention to acquiring knowledge on an academic subject. (知識を得るために時間や注意を注ぐこと。)</p>"
    },
    "英語": {
        search: ["英語", "えいご", "エイゴ", "english"],
        html: "<p><b>英語訳:</b> English</p><p><b>解説:</b> The language that originated in England and is now spoken all over the world. (イギリス発祥で、現在は世界中で話されている言語。)</p>"
    },
    "日本語": {
        search: ["日本語", "にほんご", "ニホンゴ", "japanese"],
        html: "<p><b>英語訳:</b> Japanese</p><p><b>解説:</b> The language spoken by the people of Japan. (日本の人々によって話されている言語。)</p>"
    },
    "本棚": {
        search: ["本棚", "ほんだな", "ホンダナ", "bookshelf"],
        html: "<p><b>英語訳:</b> bookshelf</p><p><b>解説:</b> A shelf on which books can be stored. (本を置いておくための棚。)</p>"
    },
    "教室": {
        search: ["教室", "きょうしつ", "キョウシツ", "classroom"],
        html: "<p><b>英語訳:</b> classroom</p><p><b>解説:</b> A room in a school in which classes are held. (学校で授業が行われる部屋。)</p>"
    },
    "時計": {
        search: ["時計", "とけい", "トケイ", "clock", "watch"],
        html: "<p><b>英語訳:</b> clock / watch</p><p><b>解説:</b> A mechanical or electrical device for measuring and showing time. (時間を測って示すための機械や装置。)</p>"
    },
    "電話": {
        search: ["電話", "でんわ", "デンワ", "phone", "telephone"],
        html: "<p><b>英語訳:</b> phone / telephone</p><p><b>解説:</b> A system for transmitting voices over a distance using wire or radio. (電線や無線を使って声を遠くに届けるシステム。)</p>"
    },
    "電車": {
        search: ["電車", "でんしゃ", "デンシャ", "train"],
        html: "<p><b>英語訳:</b> train</p><p><b>解説:</b> A series of connected railway carriages or wagons moved by a locomotive or integral motor. (機関車やモーターで動く、連結された鉄道車両。)</p>"
    },
    "自転車": {
        search: ["自転車", "じてんしゃ", "ジテンシャ", "bike", "bicycle"],
        html: "<p><b>英語訳:</b> bicycle / bike</p><p><b>解説:</b> A vehicle consisting of two wheels held in a frame one behind the other, propelled by pedals. (ペダルで進む、前後に並んだ2つの車輪を持つ乗り物。)</p>"
    },
    "車掌": {
        search: ["車掌", "しゃしょう", "シャショウ", "conductor"],
        html: "<p><b>英語訳:</b> conductor</p><p><b>解説:</b> A person in charge of a train, tram, or other public conveyance, who shows passengers to their seats and checks tickets. (列車の運行や乗客、チケットを管理する人。)</p>"
    },
    "駅員": {
        search: ["駅員", "えきいん", "エキイン", "station staff"],
        html: "<p><b>英語訳:</b> station staff / station employee</p><p><b>解説:</b> A person who works at a railway station. (鉄道の駅で働く職員。)</p>"
    },
    "交番": {
        search: ["交番", "こうばん", "コウバン", "police box"],
        html: "<p><b>英語訳:</b> police box</p><p><b>解説:</b> A small neighborhood police station found in Japan. (日本で見られる、地域の小さな警察の拠点。)</p>"
    },
    "病院": {
        search: ["病院", "びょういん", "ビョウイン", "hospital"],
        html: "<p><b>英語訳:</b> hospital</p><p><b>解説:</b> An institution providing medical and surgical treatment and nursing care for sick or injured people. (病気やケガの人に医療や看護を提供する施設。)</p>"
    },
    "薬局": {
        search: ["薬局", "やっきょく", "ヤッキョク", "pharmacy"],
        html: "<p><b>英語訳:</b> pharmacy / drugstore</p><p><b>解説:</b> A store where medicinal drugs are dispensed and sold. (薬を調剤したり販売したりするお店。)</p>"
    },
    "公園": {
        search: ["公園", "こうえん", "コウエン", "park"],
        html: "<p><b>英語訳:</b> park</p><p><b>解説:</b> A large public green area in a town, used for recreation. (街の中にある、みんなが休憩や娯楽で使う広い緑地。)</p>"
    },
    "動物園": {
        search: ["動物園", "どうぶつえん", "ドウブツエン", "zoo"],
        html: "<p><b>英語訳:</b> zoo</p><p><b>解説:</b> An establishment which maintains a collection of wild animals, typically in a park or gardens, for study, conservation, or display to the public. (野生動物を集めて飼育し、みんなに見せるための施設。)</p>"
    },
    "図書館": {
        search: ["図書館", "としょかん", "トショカン", "library"],
        html: "<p><b>英語訳:</b> library</p><p><b>解説:</b> A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to. (本などを集め、人々が読んだり借りたりできる建物。)</p>"
    },
    "映画館": {
        search: ["映画館", "えいがかん", "エイガカン", "movie theater"],
        html: "<p><b>英語訳:</b> movie theater / cinema</p><p><b>解説:</b> A theater where movies are shown for public entertainment. (映画を上映してみんなを楽しませるための劇場。)</p>"
    },
    "銀行": {
        search: ["銀行", "ぎんこう", "ギンコウ", "bank"],
        html: "<p><b>英語訳:</b> bank</p><p><b>解説:</b> A financial establishment that invests money deposited by customers, pays it out when required, makes loans at interest, and exchanges currency. (お金を預かったり貸し出したりする金融機関。)</p>"
    },
    "郵便局": {
        search: ["郵便局", "ゆうびんきょく", "ユウビンキョク", "post office"],
        html: "<p><b>英語訳:</b> post office</p><p><b>解説:</b> A public department or corporation responsible for mail services and often for telecommunications. (郵便サービスなどを担当する公的な機関。)</p>"
    },
    "商店街": {
        search: ["商店街", "しょうてんがい", "ショウテンガイ", "shopping street"],
        html: "<p><b>英語訳:</b> shopping street / shopping district</p><p><b>解説:</b> A street lined with shops and stores where people can do daily shopping. (お店が立ち並び、買い物ができる通りのこと。)</p>"
    },
    "料理": {
        search: ["料理", "りょうり", "リョウリ", "cooking"],
        html: "<p><b>英語訳:</b> cooking / cuisine</p><p><b>解説:</b> The practice or skill of preparing food by combining, mixing, and heating ingredients. (食材を混ぜたり加熱したりして食べ物を用意すること。)</p>"
    },
    "食堂": {
        search: ["食堂", "しょくどう", "ショクドウ", "cafeteria", "restaurant"],
        html: "<p><b>英語訳:</b> cafeteria / dining hall</p><p><b>解説:</b> A restaurant in a school, college, or factory where people can buy and eat meals. (学校や工場などで、食事を買って食べる場所。)</p>"
    },
    "朝御飯": {
        search: ["朝御飯", "あさごはん", "アサゴハン", "breakfast"],
        html: "<p><b>英語訳:</b> breakfast</p><p><b>解説:</b> A meal eaten in the morning, the first of the day. (朝に食べる、一日の最初の食事。)</p>"
    },
    "昼御飯": {
        search: ["昼御飯", "ひるごはん", "ヒルゴハン", "lunch"],
        html: "<p><b>英語訳:</b> lunch</p><p><b>解説:</b> A meal eaten in the middle of the day, typically one that is lighter or less formal than an evening meal. (一日の真ん中に食べる食事。)</p>"
    },
    "晩御飯": {
        search: ["晩御飯", "ばんごはん", "バンゴハン", "dinner"],
        html: "<p><b>英語訳:</b> dinner / evening meal</p><p><b>解説:</b> The main meal of the day, taken either around midday or in the evening. (一日の中でメインとなる、夕方や夜の食事。)</p>"
    },
    "お茶": {
        search: ["お茶", "おちゃ", "オチャ", "tea", "green tea"],
        html: "<p><b>英語訳:</b> tea / green tea</p><p><b>解説:</b> A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water. (お湯の中に乾燥した茶葉を入れて作る温かい飲み物。)</p>"
    },
    "水筒": {
        search: ["水筒", "すいとう", "スイトウ", "water bottle"],
        html: "<p><b>英語訳:</b> water bottle / thermos</p><p><b>解説:</b> A container for carrying drinking water, used by travelers or workers. (お出かけする人などが水を持ち歩くための容器。)</p>"
    },
    "音楽": {
        search: ["音楽", "おんがく", "オンガク", "music"],
        html: "<p><b>英語訳:</b> music</p><p><b>解説:</b> Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion. (美しさや感情を表現した、歌や楽器の音。)</p>"
    },
    "楽器": {
        search: ["楽器", "がっき", "ガッキ", "musical instrument"],
        html: "<p><b>英語訳:</b> musical instrument</p><p><b>解説:</b> An object or device created or adapted to make musical sounds. (音楽の音を出すために作られた道具。)</p>"
    },
    "歌唱": {
        search: ["歌唱", "かしょう", "カショウ", "singing"],
        html: "<p><b>英語訳:</b> singing</p><p><b>解説:</b> The activity of performing songs or tunes with the voice. (声を使って歌をうたう活動。)</p>"
    },
    "絵画": {
        search: ["絵画", "かいが", "カイガ", "painting", "picture"],
        html: "<p><b>英語訳:</b> painting / picture</p><p><b>解説:</b> A painted picture or image produced using colors on a surface. (壁やキャンバスの上に絵の具を使って描かれた絵。)</p>"
    },
    "筆箱": {
        search: ["筆箱", "ふでばこ", "フデバコ", "pencil case"],
        html: "<p><b>英語訳:</b> pencil case</p><p><b>解説:</b> A box or case for holding pencils, pens, and other writing utensils. (ペンや鉛筆などの筆記用具をしまっておくケース。)</p>"
    },
    "消しゴム": {
        search: ["消しゴム", "けしごむ", "ケシゴム", "eraser"],
        html: "<p><b>英語訳:</b> eraser / rubber</p><p><b>解説:</b> An object, typically a piece of rubber or plastic, used to rub out something written. (書いた文字をこすって消すためのゴム。)</p>"
    },
    "宿題": {
        search: ["宿題", "しゅくだい", "シュクダイ", "homework"],
        html: "<p><b>英語訳:</b> homework</p><p><b>解説:</b> Schoolwork that a student is required to do at home. (学生が家でやるように言われる勉強の課題。)</p>"
    },
    "試験": {
        search: ["試験", "しけん", "シケン", "test", "exam"],
        html: "<p><b>英語訳:</b> test / examination</p><p><b>解説:</b> A formal test of a person's knowledge or proficiency in a particular subject or skill. (知識や技術を測るための公式な検査。)</p>"
    },
    "運動": {
        search: ["運動", "うんどう", "ウンドウ", "exercise", "sports"],
        html: "<p><b>英語訳:</b> exercise / sports</p><p><b>解説:</b> Activity requiring physical effort, carried out to sustain or improve health and fitness. (健康維持などのために体を動かす活動。)</p>"
    },
    "野球": {
        search: ["野球", "やきゅう", "ヤキュウ", "baseball"],
        html: "<p><b>英語訳:</b> baseball</p><p><b>解説:</b> A ball game played with a bat and ball between two teams of nine players each on a field with four bases. (9人ずつのチームがバットとボールを使い、4つのベースのあるコートで行う球技。)</p>"
    },
    "庭球": {
        search: ["庭球", "てにす", "テニス", "tennis"],
        html: "<p><b>英語訳:</b> tennis</p><p><b>解説:</b> A game in which two or four players strike a ball with rackets over a net stretched across a court. (ラケットを使ってネット越しにボールを打ち合うゲーム。)</p>"
    },
    "籠球": {
        search: ["籠球", "ばすけっとぼーる", "バスケットボール", "basketball"],
        html: "<p><b>英語訳:</b> basketball</p><p><b>解説:</b> A game played between two teams of five players each on a rectangular court, usually indoors, where points are scored by tossing a ball through an elevated hoop. (カゴにボールを入れて得点を競う、5人ずつの球技。)</p>"
    },
    "排球": {
        search: ["排球", "ばれーぼーる", "バレーボール", "volleyball"],
        html: "<p><b>英語訳:</b> volleyball</p><p><b>解説:</b> A game for two teams, usually of six players, in which a large ball is hit by hand over a high net, the aim being to score points by making the ball reach the ground on the opponent's side. (ネット越しに手でボールを打ち合う6人ずつの球技。)</p>"
    },
    "蹴球": {
        search: ["蹴球", "さっかー", "サッカー", "soccer", "football"],
        html: "<p><b>英語訳:</b> soccer / football</p><p><b>解説:</b> A game played by two teams of eleven players with a round ball which may not be touched with the hands or arms during play except by the goalkeepers. (足で丸い球を操る11人ずつの大人気スポーツ。)</p>"
    },
    "水泳": {
        search: ["水泳", "すいえい", "スイエイ", "swimming"],
        html: "<p><b>英語訳:</b> swimming</p><p><b>解説:</b> The sport or activity of propelling oneself through water using the limbs. (手足を使って水の中を進むスポーツや活動。)</p>"
    },
    "階段": {
        search: ["階段", "かいだん", "カイダン", "stairs"],
        html: "<p><b>英語訳:</b> stairs / staircase</p><p><b>解説:</b> A set of steps leading from one floor of a building to another, typically inside the building. (上下のフロアをつなぐためのステップ。)</p>"
    },
    "窓口": {
        search: ["窓口", "まどぐち", "まどぐち", "window"],
        html: "<p><b>英語訳:</b> window / service counter</p><p><b>解説:</b> A counter or window at which a specific service is provided in a bank, office, or station. (銀行や駅などで、特定の案内を受けるための受付。)</p>"
    },
    "切符": {
        search: ["切符", "きっぷ", "キップ", "ticket"],
        html: "<p><b>英語訳:</b> ticket</p><p><b>解説:</b> A piece of paper or card that gives the holder a certain right, especially to travel or to enter a place. (乗り物に乗ったり、中に入ったりするための紙のふだ。)</p>"
    },
    "改札": {
        search: ["改札", "かいさつ", "カイサツ", "ticket gate"],
        html: "<p><b>英語訳:</b> ticket gate / turnstile</p><p><b>解説:</b> A barrier where tickets are checked before passengers board a train. (乗車前に切符の確認を行うためのゲート。)</p>"
    },
    "天気": {
        search: ["天気", "てんき", "テンキ", "weather"],
        html: "<p><b>英語訳:</b> weather</p><p><b>解説:</b> The state of the atmosphere at a place and time as regards heat, dryness, sunshine, wind, rain, etc. (気温や雨、風などの、その時々の大気の状態。)</p>"
    },
    "太陽": {
        search: ["太陽", "たいよう", "タイヨウ", "sun"],
        html: "<p><b>英語訳:</b> the sun</p><p><b>解説:</b> The star around which the earth orbits, providing light and heat. (地球が周りを回っている、光と熱をくれる星。)</p>"
    },
    "向日葵": {
        search: ["向日葵", "ひまわり", "ヒマワリ", "sunflower"],
        html: "<p><b>英語訳:</b> sunflower</p><p><b>解説:</b> A tall plant with a large yellow flower head that turns towards the sun. (太陽のほうを向いて咲く、黄色い大きな花。)</p>"
    },
    "桜花": {
        search: ["桜花", "おうか", "オウカ", "さくら", "サクラ", "cherry blossom"],
        html: "<p><b>英語訳:</b> cherry blossom</p><p><b>解説:</b> The blossom of the cherry tree, highly celebrated in Japan. (日本でとても愛されている、サクラの木に咲く花。)</p>"
    },
    "紅葉": {
        search: ["紅葉", "もみじ", "モミジ", "こうよう", "コウヨウ", "autumn leaves"],
        html: "<p><b>英語訳:</b> autumn leaves / colorful foliage</p><p><b>解説:</b> Leaves that change their colors into red or yellow during autumn. (秋に赤や黄色に変わる、木々の葉っぱ。)</p>"
    },
    "富士山": {
        search: ["富士山", "ふじさん", "フジサン", "mt. fuji"],
        html: "<p><b>英語訳:</b> Mt. Fuji</p><p><b>解説:</b> The highest and most famous mountain in Japan. (日本で一番高くて有名な、美しい山。)</p>"
    },
    "新幹線": {
        search: ["新幹線", "しんかんせん", "シンカンセン", "bullet train"],
        html: "<p><b>英語訳:</b> bullet train / Shinkansen</p><p><b>解説:</b> A high-speed railway network in Japan known for its safety and punctuality. (安全で正確なことで知られる日本の高速鉄道。)</p>"
    },
    "お土産": {
        search: ["お土産", "おみやげ", "オミヤゲ", "souvenir"],
        html: "<p><b>英語訳:</b> souvenir</p><p><b>解説:</b> A thing that is kept as a reminder of a person, place, or event. (旅などの思い出として購入し、家族らに配るもの。)</p>"
    },

    // ==========================================
    // 後半：英語の単語（60個）★品詞データ内蔵
    // ==========================================
    "Apple": {
        search: ["apple", "アップル", "りんご", "リンゴ", "林檎"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> リンゴ（林檎）</p><p><b>例文:</b> I eat an apple every morning. (私は毎朝リンゴを1個食べます。)</p>"
    },
    "Book": {
        search: ["book", "ブック", "ほん", "本", "書籍"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 本、書籍 ／ (動詞) 予約する</p><p><b>例文:</b> He is reading an interesting book. (彼は面白い本を読んでいる。)</p>"
    },
    "Dog": {
        search: ["dog", "ドッグ", "いぬ", "犬"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> イヌ（犬）</p><p><b>例文:</b> She walks her dog in the park. (彼女は公園で犬の散歩をします。)</p>"
    },
    "Cat": {
        search: ["cat", "キャット", "ねこ", "猫"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> ネコ（猫）</p><p><b>例文:</b> The black cat is sleeping on the sofa. (黒い猫がソファの上で眠っています。)</p>"
    },
    "Boy": {
        search: ["boy", "ボーイ", "おとこのこ", "男の子", "少年"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 男の子、少年</p><p><b>例文:</b> The boy is running fast. (その男の子は速く走っている。)</p>"
    },
    "Girl": {
        search: ["girl", "ガール", "おんなのこ", "女の子", "少女"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 女の子、少女</p><p><b>例文:</b> She is a smart girl. (彼女は賢い女の子です。)</p>"
    },
    "Teacher": {
        search: ["teacher", "ティーチャー", "せんせい", "先生", "教師"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 先生、教師</p><p><b>例文:</b> Our English teacher is very kind. (私たちの英語の先生はとても優しい。)</p>"
    },
    "Student": {
        search: ["student", "スチューデント", "がくせい", "学生", "生徒"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 学生、生徒</p><p><b>例文:</b> I am a high school student. (私は高校生です。)</p>"
    },
    "School": {
        search: ["school", "スクール", "がっこう", "学校"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 学校</p><p><b>例文:</b> We go to school by bus. (私たちはバスで学校に行きます。)</p>"
    },
    "Friend": {
        search: ["friend", "フレンド", "ともだち", "友達", "友人"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 友達、友人</p><p><b>例文:</b> Ken is my best friend. (ケンは私の親友です。)</p>"
    },
    "Family": {
        search: ["family", "ファミリー", "かぞく", "家族"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 家族</p><p><b>例文:</b> I love my family very much. (私は家族が大好きです。)</p>"
    },
    "Home": {
        search: ["home", "ホーム", "おうち", "家", "我が家", "自宅"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 副詞 (adverb)</p><p><b>日本語訳:</b> 我が家、自宅 ／ (副詞) 家に、我が家へ</p><p><b>例文:</b> Let's go home now. (もう家に帰りましょう。)</p>"
    },
    "House": {
        search: ["house", "ハウス", "いえ", "家", "建物", "一軒家"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 家、住宅、建物</p><p><b>例文:</b> They built a new house. (彼らは新しい家を建てた。)</p>"
    },
    "Room": {
        search: ["room", "ルーム", "へや", "部屋", "室内"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 部屋、室、スペース</p><p><b>例文:</b> My room is on the second floor. (私の部屋は2階にあります。)</p>"
    },
    "Desk": {
        search: ["desk", "デスク", "つくえ", "机"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 机（つくえ）、デスク</p><p><b>例文:</b> There is a computer on the desk. (机の上にパソコンがあります。)</p>"
    },
    "Chair": {
        search: ["chair", "チェアー", "いす", "椅子"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 椅子（いす）</p><p><b>例文:</b> Please sit on this chair. (この椅子に座ってください。)</p>"
    },
    "Pen": {
        search: ["pen", "ペン", "ぺん"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> ペン</p><p><b>例文:</b> Can I borrow your pen? (ペンを借りてもいいですか？)</p>"
    },
    "Pencil": {
        search: ["pencil", "ペンシル", "えんぴつ", "鉛筆"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 鉛筆（えんぴつ）</p><p><b>例文:</b> Write your answer with a pencil. (答えは鉛筆で書いてください。)</p>"
    },
    "Notebook": {
        search: ["notebook", "ノートブック", "のーと", "ノート"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> ノート、帳面</p><p><b>例文:</b> I take notes in my notebook. (私はノートにメモを取ります。)</p>"
    },
    "Clock": {
        search: ["clock", "クロック", "とけい", "時計", "置時計", "掛け時計"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 時計（掛け時計・置き時計）</p><p><b>例文:</b> The clock on the wall is ten minutes fast. (壁の時計は10分進んでいる。)</p>"
    },
    "Watch": {
        search: ["watch", "ウォッチ", "うでどけい", "腕時計"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 腕時計 ／ (動詞) じっと見る、観察する</p><p><b>例文:</b> This watch was a gift from my father. (この腕時計は父からの贈り物です。)</p>"
    },
    "Bag": {
        search: ["bag", "バッグ", "かばん", "カバン", "袋", "鞄"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> カバン、バッグ、袋</p><p><b>例文:</b> Put your books into the bag. (本をカバンに入れなさい。)</p>"
    },
    "Shoes": {
        search: ["shoes", "シューズ", "くつ", "靴"],
        html: "<p><b>【品詞】</b> 名詞 (noun：通常は複数形)</p><p><b>日本語訳:</b> 靴（くつ）</p><p><b>例文:</b> Take off your shoes here. (ここで靴を脱いでください。)</p>"
    },
    "Hat": {
        search: ["hat", "ハット", "ぼうし", "帽子"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 帽子（ふちのあるもの）</p><p><b>例文:</b> He wears a straw hat in summer. (彼は夏に麦わら帽子をかぶる。)</p>"
    },
    "Shirt": {
        search: ["shirt", "シャツ", "ワイシャツ", "カッターシャツ"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> シャツ、ワイシャツ</p><p><b>例文:</b> White shirts stain easily. (白いシャツは汚れやすい。)</p>"
    },
    "Coat": {
        search: ["coat", "コート", "うわぎ", "上着", "防寒着"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> コート、上着</p><p><b>例文:</b> It's cold outside, so wear a coat. (外は寒いからコートを着ていきなさい。)</p>"
    },
    "Water": {
        search: ["water", "ウォーター", "みず", "水"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 水</p><p><b>例文:</b> May I have a glass of water? (水を一杯いただけますか？)</p>"
    },
    "Milk": {
        search: ["milk", "ミルク", "ぎゅうにゅう", "牛乳"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 牛乳、ミルク</p><p><b>例文:</b> Drinking milk is good for your bones. (牛乳を飲むことは骨に良い。)</p>"
    },
    "Tea": {
        search: ["tea", "ティー", "おちゃ", "お茶", "紅茶"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> お茶、紅茶</p><p><b>例文:</b> Would you prefer tea or coffee? (紅茶とコーヒー、どちらがいいですか？)</p>"
    },
    "Coffee": {
        search: ["coffee", "コーヒー", "こーひー"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> コーヒー</p><p><b>例文:</b> I smell fresh coffee. (淹れたてのコーヒーの香りがする。)</p>"
    },
    "Rice": {
        search: ["rice", "ライス", "おこめ", "お米", "ごはん", "白米"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> お米、ご飯、米飯</p><p><b>例文:</b> Rice is the staple food in Japan. (お米は日本の主食です。)</p>"
    },
    "Bread": {
        search: ["bread", "ブレッド", "ぱん", "パン", "食パン"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> パン</p><p><b>例文:</b> She spread butter on the bread. (彼女はパンにバターを塗った。)</p>"
    },
    "Cake": {
        search: ["cake", "ケーキ", "けーき"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> ケーキ、洋菓子</p><p><b>例文:</b> She baked a chocolate cake. (彼女はチョコレートケーキを焼いた。)</p>"
    },
    "Egg": {
        search: ["egg", "エッグ", "たまご", "卵", "玉子"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 卵（たまご）</p><p><b>例文:</b> Birds lay eggs in spring. (鳥は春に卵を産みます。)</p>"
    },
    "Fish": {
        search: ["fish", "フィッシュ", "さかな", "魚", "お魚"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 魚 ／ (動詞) 魚釣りをする</p><p><b>例文:</b> Many kinds of fish live in this river. (この川にはたくさんの種類の魚が住んでいます。)</p>"
    },
    "Meat": {
        search: ["meat", "ミート", "おにく", "肉", "お肉"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> （食用の）お肉</p><p><b>例文:</b> I don't eat meat very often. (私は普段あまりお肉を食べません。)</p>"
    },
    "Orange": {
        search: ["orange", "オレンジ", "みかん", "ミカン", "蜜柑"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 形容詞 (adjective)</p><p><b>日本語訳:</b> オレンジ、みかん ／ (形容詞) オレンジ色の</p><p><b>例文:</b> She peeled an orange for me. (彼女は私のためにオレンジを剥いてくれた。)</p>"
    },
    "Banana": {
        search: ["banana", "バナナ", "ばなな"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> バナナ</p><p><b>例文:</b> Bananas are rich in potassium. (バナナはカリウムが豊富です。)</p>"
    },
    "Sun": {
        search: ["sun", "サン", "たいよう", "太陽", "日輪"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 太陽</p><p><b>例文:</b> The sun rises in the east. (太陽は東から昇る。)</p>"
    },
    "Moon": {
        search: ["moon", "ムーン", "つき", "月", "お月様"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 月（つき）</p><p><b>例文:</b> The moon was bright last night. (昨夜は月が明るかった。)</p>"
    },
    "Star": {
        search: ["star", "スター", "ほし", "星", "星辰"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 星（ほし）、スター</p><p><b>例文:</b> The sky is full of stars tonight. (今夜の空は星でいっぱいです。)</p>"
    },
    "Sky": {
        search: ["sky", "スカイ", "そら", "空", "大空"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 空（そら）</p><p><b>例文:</b> The plane flew high up into the sky. (飛行機は空高くへ飛び立った。)</p>"
    },
    "Rain": {
        search: ["rain", "レイン", "あめ", "雨", "降雨"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 雨 ／ (動詞) 雨が降る</p><p><b>例文:</b> We had heavy rain yesterday. (昨日は激しい雨が降った。)</p>"
    },
    "Snow": {
        search: ["snow", "スノー", "ゆき", "雪", "降雪"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 雪 ／ (動詞) 雪が降る</p><p><b>例文:</b> Children love playing in the snow. (子供たちは雪の中で遊ぶのが大好きだ。)</p>"
    },
    "Wind": {
        search: ["wind", "ウィンド", "かぜ", "風", "強風"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 風（かぜ）</p><p><b>例文:</b> A cold wind is blowing outside. (外は冷たい風が吹いている。)</p>"
    },
    "Sea": {
        search: ["sea", "シー", "うみ", "海", "海洋"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 海（うみ）</p><p><b>例文:</b> They went swimming in the sea. (彼らは海へ泳ぎに行った。)</p>"
    },
    "River": {
        search: ["river", "リバー", "かわ", "川", "河川"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 川（かわ）</p><p><b>例文:</b> This river flows into the Pacific Ocean. (この川は太平洋へ流れ込んでいます。)</p>"
    },
    "Mountain": {
        search: ["mountain", "マウンテン", "やま", "山", "山岳"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 山（やま）</p><p><b>例文:</b> We climbed the mountain last weekend. (私たちは先週末、その山に登った。)</p>"
    },
    "Tree": {
        search: ["tree", "ツリー", "き", "木", "樹木"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 木（き）、樹木</p><p><b>例文:</b> Birds are singing in the tree. (鳥たちが木の中で鳴いている。)</p>"
    },
    "Flower": {
        search: ["flower", "フラワー", "はな", "花", "草花"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 花（はな）</p><p><b>例文:</b> She gave me a beautiful flower. (彼女は私に美しい花をくれた。)</p>"
    },
    "Bird": {
        search: ["bird", "バード", "とり", "鳥", "野鳥"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 鳥（とり）</p><p><b>例文:</b> Some birds cannot fly, like penguins. (ペンギンのように飛べない鳥もいる。)</p>"
    },
    "Car": {
        search: ["car", "カー", "くるま", "車", "自動車"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 車、自動車</p><p><b>例文:</b> He washed his car on Sunday. (彼は日曜日に車を洗った。)</p>"
    },
    "Train": {
        search: ["train", "トレイン", "でんしゃ", "電車", "列車", "汽車"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 列車、電車 ／ (動詞) 訓練する、鍛える</p><p><b>例文:</b> The train arrived exactly on time. (列車は時間ぴったりに到着した。)</p>"
    },
    "Bike": {
        search: ["bike", "バイク", "じてんしゃ", "自転車", "オートバイ"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 自転車、バイク</p><p><b>例文:</b> He rides his bike to the office. (彼は会社まで自転車で行きます。)</p>"
    },
    "Bus": {
        search: ["bus", "バス", "ばす"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> バス</p><p><b>例文:</b> I missed the last bus home. (家に帰る最終バスを逃してしまった。)</p>"
    },
    "Plane": {
        search: ["plane", "プレーン", "ひこうき", "飛行機", "航空機"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 飛行機、航空機</p><p><b>例文:</b> The plane is flying over the mountains. (飛行機が山の上を飛んでいる。)</p>"
    },
    "Station": {
        search: ["station", "ステーション", "えき", "駅"],
        html: "<p><b>【品詞】</b> 名詞 (noun)</p><p><b>日本語訳:</b> 駅、停留所</p><p><b>例文:</b> Excuse me, where is the nearest station? (すみません、一番近い駅はどこですか？)</p>"
    },
    "Park": {
        search: ["park", "パーク", "こうえん", "公園"],
        html: "<p><b>【品詞】</b> 名詞 (noun) / 動詞 (verb)</p><p><b>日本語訳:</b> 公園 ／ (動詞) 駐車する</p><p><b>例文:</b> Let's meet at the entrance of the park. (公園の入り口で会いましょう。)</p>"
    },
    "Good": {
        search: ["good", "グッド", "いい", "良い", "よい"],
        html: "<p><b>【品詞】</b> 形容詞 (adjective)</p><p><b>日本語訳:</b> 良い、好ましい、上手な</p><p><b>例文:</b> This is a very good idea. (これはとても良いアイデアです。)</p>"
    },
    "Happy": {
        search: ["happy", "ハッピー", "うれしい", "幸せ", "しあわせ", "幸福"],
        html: "<p><b>【品詞】</b> 形容詞 (adjective)</p><p><b>日本語訳:</b> 幸せな、嬉しい、幸福な</p><p><b>例文:</b> I am so happy to see you. (あなたに会えてとても嬉しいです。)</p>"
    }
};