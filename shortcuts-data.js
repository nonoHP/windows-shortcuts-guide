const CATEGORIES = [
  {
    "id": "all",
    "name": "すべて",
    "icon": "⚡",
    "color": "#6366f1",
    "description": "主要20サイト＋公式ドキュメントを統合した全10カテゴリのショートカットキーを一括で検索・閲覧できます"
  },
  {
    "id": "win11",
    "name": "Windows 11",
    "icon": "🪟",
    "color": "#0078d4",
    "description": "OS操作・ウィンドウ整列・仮想デスクトップ・スクショ・画面録画・システム設定・アクセシビリティを完全網羅"
  },
  {
    "id": "explorer",
    "name": "エクスプローラー",
    "icon": "📁",
    "color": "#d97706",
    "description": "フォルダ操作・タブ管理・階層移動・フルパスコピー・表示レイアウト一発切替・プレビュー/詳細パネルを完全網羅"
  },
  {
    "id": "excel",
    "name": "Excel",
    "icon": "📊",
    "color": "#107c41",
    "description": "セル移動・範囲選択・データ入力・数式・名前定義・書式・行列の非表示/グループ化・テーブル・ピボットを完全網羅"
  },
  {
    "id": "word",
    "name": "Word",
    "icon": "📝",
    "color": "#185abd",
    "description": "文字装飾・段落配置・インデント・見出し構造・拡張選択(F8)・表操作・脚注・フィールド・校閲を完全網羅"
  },
  {
    "id": "powerpoint",
    "name": "PowerPoint",
    "icon": "📽️",
    "color": "#c2410c",
    "description": "スライド作成・図形の複製/グループ化/重ね順/整列・スライドショー制御・発表者ツールを完全網羅"
  },
  {
    "id": "outlook",
    "name": "Outlook",
    "icon": "📧",
    "color": "#0284c7",
    "description": "メール作成・返信/全員返信/転送・既読/未読/フラグ整理・予定表（カレンダー）・会議招待・高度検索を完全網羅"
  },
  {
    "id": "onenote",
    "name": "OneNote",
    "icon": "📓",
    "color": "#7c3aed",
    "description": "ページ/セクション追加・ToDoチェックボックス/重要タグ・日時スタンプ・Tab表作成・アウトライン折りたたみを完全網羅"
  },
  {
    "id": "pdf",
    "name": "Adobe PDF",
    "icon": "📄",
    "color": "#dc2626",
    "description": "Acrobat / Reader でのページ移動・表示倍率（全体/幅/100%）・回転・しおり・複数PDF横断検索・ハイライト注釈を完全網羅"
  },
  {
    "id": "browser",
    "name": "ブラウザ",
    "icon": "🌐",
    "color": "#ea580c",
    "description": "Chrome / Edge 共通のタブ管理・アドレスバー・検索・履歴・ブックマーク・リーダー表示・開発者ツールを完全網羅"
  },
  {
    "id": "common",
    "name": "共通・文字入力",
    "icon": "⌨️",
    "color": "#475569",
    "description": "全アプリ共通の基本操作・ファイル保存・日本語入力（IME）・ファンクションキー変換・再変換を完全網羅"
  }
];

const KEY_GROUP_META = [
  {
    "id": "kg-1-single",
    "order": 1,
    "label": "① 単独キー（1キー）"
  },
  {
    "id": "kg-2-fn",
    "order": 2,
    "label": "② ファンクションキー（F1〜F12）"
  },
  {
    "id": "kg-3-ctrl-num",
    "order": 3,
    "label": "③ Ctrl ＋ 数字（Ctrl + 0〜9）"
  },
  {
    "id": "kg-4-ctrl-alpha",
    "order": 4,
    "label": "④ Ctrl ＋ 英字（Ctrl + A〜Z）"
  },
  {
    "id": "kg-5-ctrl-other",
    "order": 5,
    "label": "⑤ Ctrl ＋ 記号・特殊キー・Fキー"
  },
  {
    "id": "kg-6-shift",
    "order": 6,
    "label": "⑥ Shift ＋ キー"
  },
  {
    "id": "kg-7-alt",
    "order": 7,
    "label": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）"
  },
  {
    "id": "kg-8-ctrl-shift",
    "order": 8,
    "label": "⑧ Ctrl ＋ Shift ＋ キー"
  },
  {
    "id": "kg-9-multi-mod",
    "order": 9,
    "label": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー"
  },
  {
    "id": "kg-10-win",
    "order": 10,
    "label": "⑩ Win ＋ キー（Windowsキー）"
  }
];

const MEMORY_RULES = [
  {
    "title": "① 英単語の頭文字ルール（全体の約70%！）",
    "desc": "C＝Copy（コピー）、S＝Save（保存）、P＝Print（印刷）、F＝Find（検索）、N＝New（新規）、O＝Open（開く）、W＝Window（閉じる）、T＝Tab/Table、D＝Desktop/Down/Duplicate など、英語の頭文字を知るだけで丸暗記が不要になります。"
  },
  {
    "title": "② 頭文字が被ったときの「2文字目・末尾・形」ルール",
    "desc": "Cがコピーで使われているため、中央揃えは cEnter の「E」、切り取りはハサミの形「✂️＝X」、貼り付けは校正の挿入記号「∨＝V」、リンクは LinK の末尾「K」が割り当てられています。"
  },
  {
    "title": "③ Shiftキー ＝「逆方向・範囲選択・パワーアップ」",
    "desc": "Shiftを足すと「逆向き」または「強化版」になります。Tab（次へ）⇔ Shift+Tab（前へ）、Ctrl+T（タブ開く）⇔ Ctrl+Shift+T（閉じたタブ復活）、Ctrl+V（貼り付け）⇔ Ctrl+Shift+V（書式なし/値貼り付け）、Ctrl+R（返信/更新）⇔ Ctrl+Shift+R（全員に返信/強制更新）。"
  },
  {
    "title": "④ Altキー ＝「もうひとつの動作（Alternate）・階層/リボン操作」",
    "desc": "Enter単体だと「確定/次のセル」ですが、Alt+Enterにすると「セル内改行（Excel）」「別タブで開く（ブラウザ）」「プロパティ表示（エクスプローラー）」のように、通常とは違う便利な別動作に変わります。"
  },
  {
    "title": "⑤ Winキー ＝「Windows OS全体・画面・システム機能」",
    "desc": "アプリの中ではなくPC全体に効く操作はすべてWinキー起点です。Win+L（Lock）、Win+D（Desktop）、Win+E（Explorer）、Win+I（Information/設定）、Win+V（クリップボード履歴）。"
  },
  {
    "title": "⑥ キーボードの印字記号・並び順そのままルール",
    "desc": "Excelの Ctrl+Shift+1〜5 は数字キーの上に印字されている記号（1＝!、3＝#、4＝$通貨、5＝%パーセント）そのもの！また文字入力の F6(ひら)→F7(全カナ)→F8(半カナ)→F9(全英)→F10(半英) は左から順番に並んでいます。"
  }
];

const RESEARCHED_SOURCES = [
  "1. Microsoft 公式サポート（Windows 11 / エクスプローラーのキーボード ショートカット）",
  "2. Microsoft 公式サポート（Excel のキーボード ショートカット）",
  "3. Microsoft 公式サポート（Word のキーボード ショートカット）",
  "4. Microsoft 公式サポート（PowerPoint / Outlook / OneNote のショートカット）",
  "5. Adobe 公式ヘルプ（Adobe Acrobat / Acrobat Reader キーボードショートカット）",
  "6. Google Chrome / Microsoft Edge 公式ヘルプ（ブラウザ ショートカット）",
  "7. できるネット（インプレス）ショートカットキーまとめ",
  "8. パソコン工房 NEXMAG ショートカットキー特集",
  "9. ドスパラ（サードウェーブ）PCショートカット解説",
  "10. ショートカットキー.com（shortcutkeysjp.com）",
  "11. Youseful（ユースフル）Excel・Office実務ショートカット",
  "12. Moug（モーグ）/ Excel神髄 ショートカット辞典",
  "13. パソコン教室わかるとできる ショートカット一覧",
  "14. NEC LAVIE / 富士通 FMV / Dynabook 公式サポートガイド",
  "15. お名前.com / GMO ブラウザ・ビジネス効率化コラム",
  "16. MarkeZine / マイナビニュース PC時短テクニック",
  "17. Qiita / Zenn エンジニア＆ビジネスPC操作まとめ",
  "18. Helpforest / ヘルパソ Office・PDFショートカット徹底解説",
  "19. BIGLOBE / All About デジタル仕事術ガイド",
  "20. PopInsight / Mazrica / 724685.com ビジネス資料作成ガイド"
];

/**
 * level:
 *   3 = 必須（毎日使う最重要ショートカット）
 *   2 = 便利（知っていると作業速度が2倍になる）
 *   1 = 玄人（さらに極めたい人向けの時短ワザ）
 */
const SHORTCUTS_DATA = [
  {
    "id": "w11-25",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Alt",
      "F4"
    ],
    "title": "アプリを終了する / シャットダウンメニュー",
    "desc": "現在アクティブなアプリを終了します。デスクトップ上で押すとWindowsのシャットダウンダイアログが出ます。",
    "tip": "マウスで右上の「×」ボタンを狙う必要がなくなります。",
    "level": 3,
    "memory": "F4（Finish / 4＝終わり）に Alt を合わせてアプリ終了",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710304
  },
  {
    "id": "w11-24",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Ctrl",
      "Shift",
      "Esc"
    ],
    "title": "タスクマネージャーを直接起動",
    "desc": "フリーズしたアプリの強制終了やCPU・メモリ使用率を確認するタスクマネージャーを即座に開きます。",
    "tip": "Ctrl + Alt + Del を経由せずに一発で開ける必須ショートカットです。",
    "level": 3,
    "memory": "Escape（フリーズから緊急脱出する）の「Esc」に左手端の Ctrl + Shift を同時押し！",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810400
  },
  {
    "id": "w11-41",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win"
    ],
    "title": "スタートメニューを開く / そのままタイピングしてアプリ検索",
    "desc": "Windowsキーを単独でポンと押してスタートメニューを開きます。そのまま文字を打てば即アプリ検索になります。",
    "tip": "Winキー →「ex」→ Enter でExcel起動、Winキー →「ca」→ Enter で電卓起動など、ランチャーとして最強です！",
    "memory": "キーボード左下の窓マーク「Win」単独押しですべての起点（スタート）を開く",
    "level": 3,
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1010000
  },
  {
    "id": "w11-21",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "A"
    ],
    "title": "クイック設定（Wi-Fi・Bluetooth・音量・明るさ）を開く",
    "desc": "画面右下のWi-Fi、Bluetooth、音量、画面輝度、夜間モード等のパネルを開きます。",
    "tip": "イヤホンの接続切り替えや明るさ調整に1秒でアクセスできます。",
    "level": 3,
    "memory": "Action Center（旧アクションセンター＝クイック設定）の頭文字「A」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020265
  },
  {
    "id": "w11-42",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "B"
    ],
    "title": "タスクバー右下の通知領域（隠れているインジケーター「^」）を選択",
    "desc": "画面右下のシステムトレイ（常駐アプリのアイコンやUSB安全な取り外し）にフォーカスを当てます。",
    "tip": "Win + B → Enter で隠れている常駐アイコン一覧をマウスなしで開けます。",
    "memory": "Bottom right（右下端のトレイ）の頭文字「B」",
    "level": 1,
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020266
  },
  {
    "id": "w11-43",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "C"
    ],
    "title": "Microsoft Copilot（AIアシスタント）を起動",
    "desc": "Windows 11搭載のAIアシスタント「Copilot」を呼び出します（最新PCでは単独のCopilotキーも搭載）。",
    "tip": "調べ物や文章の要約・翻訳をサイドパネル感覚ですぐAIに頼めます。",
    "memory": "Copilot（コパイロット）の頭文字「C」",
    "level": 2,
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020267
  },
  {
    "id": "w11-20",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "I"
    ],
    "title": "Windowsの「設定」を開く",
    "desc": "システム設定画面（Bluetooth、ディスプレイ、ネットワーク、Windows Updateなど）を直接起動します。",
    "tip": "スタートメニューから歯車アイコンを探す必要がなくなります。",
    "level": 3,
    "memory": "Information（システム情報・設定）の頭文字「I」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020273
  },
  {
    "id": "w11-29",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "K"
    ],
    "title": "ワイヤレスディスプレイ・Bluetooth機器へ接続（キャスト）",
    "desc": "Miracast対応のワイヤレスモニターやテレビ、オーディオ機器への接続パネルを開きます。",
    "tip": "ケーブルなしで会議室モニターに画面投影するときに使います。",
    "level": 1,
    "memory": "Konnekt（Connect＝ワイヤレス接続・キャスト）の「K」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020275
  },
  {
    "id": "w11-19",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "L"
    ],
    "title": "PCを即座にロック",
    "desc": "画面をロックし、パスワード/PIN/顔認証のサインイン画面に戻します。",
    "tip": "離席するときのセキュリティ対策として、席を立つ瞬間に押す習慣をつけましょう。",
    "level": 3,
    "memory": "Lock（ロックする）の頭文字「L」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020276
  },
  {
    "id": "w11-22",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "N"
    ],
    "title": "通知センターとカレンダーを開く",
    "desc": "画面右下の時計部分をクリックした時と同じ、カレンダーと新着通知一覧を開きます。",
    "tip": "作業中に今日の日付や曜日・予定をサッと確認したい時に便利です。",
    "level": 2,
    "memory": "Notification（通知）の頭文字「N」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020278
  },
  {
    "id": "w11-28",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "P"
    ],
    "title": "外部ディスプレイの表示モード切り替え（複製 / 拡張）",
    "desc": "プロジェクターや外部モニター接続時に「PC画面のみ / 複製 / 拡張 / セカンドスクリーンのみ」を切り替えます。",
    "tip": "会議室でモニターに繋いだのに映らない時はまず Win + P を押しましょう！",
    "level": 3,
    "memory": "Projector（プロジェクター・画面投影）の頭文字「P」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020280
  },
  {
    "id": "w11-27",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "R"
    ],
    "title": "「ファイル名を指定して実行」を開く",
    "desc": "calc（電卓）、notepad（メモ帳）、mspaint、cmd、control（コンパネ）等をコマンドで即起動します。",
    "tip": "shell:startup と入力すればスタートアップフォルダを一発で開けます。",
    "level": 2,
    "memory": "Run（プログラムを走らせる・実行する）の頭文字「R」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020282
  },
  {
    "id": "w11-26",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "S"
    ],
    "title": "Windows検索（アプリ・ファイル・Web検索）を開く",
    "desc": "PC内のアプリ起動やファイル検索を行う検索ウィンドウを開きます（Win + Q でも同じ）。",
    "tip": "実は Win キーを単独で押してそのままアプリ名をタイピングしても検索できます。",
    "level": 2,
    "memory": "Search（サーチ・検索）の頭文字「S」（または Query の Q）",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020283
  },
  {
    "id": "w11-44",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "W"
    ],
    "title": "ウィジェットボード（天気・ニュース・カレンダー・ToDo）を開く",
    "desc": "画面左側から天気予報、最新ニュース、株価、Outlook予定表などのウィジェットパネルを表示します。",
    "tip": "Widgets（ウィジェット）をサッと確認してもう一度 Win + W で閉じられます。",
    "memory": "Widgets（ウィジェット）の頭文字「W」",
    "level": 2,
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020287
  },
  {
    "id": "w11-23",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "X"
    ],
    "title": "クイックリンクメニュー（管理者メニュー）を開く",
    "desc": "スタートボタン右クリックと同じ管理メニュー（ターミナル、デバイスマネージャー、ディスク管理等）を開きます。",
    "tip": "Win + X → U → U で最速シャットダウン、Win + X → U → R で再起動ができます！",
    "level": 3,
    "memory": "eXpert（エキスパート・管理者用）裏メニューの「X」",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020288
  },
  {
    "id": "w11-30",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "Pause"
    ],
    "title": "システムのバージョン・PCスペック情報を開く",
    "desc": "CPU、メモリ容量（RAM）、PC名、Windowsのバージョン・エディション画面を一発で開きます。",
    "tip": "自分のPCのスペックを確認したい時に設定画面を探し回る必要がありません。",
    "level": 1,
    "memory": "Pause（立ち止まってPCのスペックを確認する）キー",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020432
  },
  {
    "id": "w11-49",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "Alt",
      "B"
    ],
    "title": "HDR（高輝度・広色域表示）のON / OFFを即座に切り替え",
    "desc": "HDR対応モニター使用時、設定画面を開かずにワンタッチでHDRモードと通常SDRモードを切り替えます。",
    "tip": "スクショ撮影時にHDRのままだと白飛びしてしまう場合、Win+Alt+B で一時的にOFFにすると綺麗に撮れます！",
    "memory": "Bright / HDR（高輝度表示）の「B」に Win + Alt",
    "level": 1,
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1050266
  },
  {
    "id": "w11-31",
    "category": "win11",
    "subcategory": "システム・設定・セキュリティ",
    "keys": [
      "Win",
      "Ctrl",
      "Shift",
      "B"
    ],
    "title": "グラフィックドライバーを再起動（画面フリーズ時の応急処置）",
    "desc": "PCの電源を切らずに、画面描画（GPUドライバー）だけをピッと鳴らしてリセット再起動します。",
    "tip": "画面が真っ暗になったり表示が固まった時に、作業データを失わずに復旧できる最後の切り札です。",
    "level": 1,
    "memory": "Blank screen（真っ暗な画面）または Beep（ピッと鳴ってGPUリセット）の「B」に全部盛り（Win+Ctrl+Shift）",
    "funcGroup": "システム・設定・セキュリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1060266
  },
  {
    "id": "w11-11",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Alt",
      "Esc"
    ],
    "title": "ウィンドウを開いた順番で直接切り替え",
    "desc": "サムネイル一覧を出さずに、現在開いているウィンドウを直接次々と切り替えます。",
    "tip": "画面のアニメーション待ち時間ゼロで切り替えたい玄人に人気です。",
    "level": 1,
    "memory": "Alt + Tab のすぐ上にある「Esc」でプレビューなしの直接切り替え",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710400
  },
  {
    "id": "w11-10",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Alt",
      "Tab"
    ],
    "title": "アプリの高速切り替え",
    "desc": "起動中のアプリ一覧を表示し、直前に使っていたウィンドウへ素早く切り替えます。",
    "tip": "Altを押したままTabを連打すると目的のウィンドウを選べます。Shiftを足すと逆順移動。",
    "level": 3,
    "memory": "Alternate（交互に切り替える）の「Alt」＋ Tab（タブ移動）",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710402
  },
  {
    "id": "w11-8",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "D"
    ],
    "title": "デスクトップを表示 / 元に戻す",
    "desc": "開いているすべてのウィンドウを一瞬で最小化し、デスクトップを表示します。",
    "tip": "もう一度押すと元のウィンドウ配置に戻ります。デスクトップ上のファイルを見る時に最適。",
    "level": 3,
    "memory": "Desktop（デスクトップ）の頭文字「D」",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020268
  },
  {
    "id": "w11-9",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "M"
    ],
    "title": "すべてのウィンドウを最小化（Win+Shift+Mで復元）",
    "desc": "開いている全ウィンドウを最小化します。Win + Shift + M で元のサイズに復元します。",
    "tip": "ダイアログが開いていない限り Win + D の方がトグル動作するため便利です。",
    "level": 1,
    "memory": "Minimize（最小化する）の頭文字「M」（Shiftを足すと逆＝元に戻す）",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020277
  },
  {
    "id": "w11-15",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "Z"
    ],
    "title": "スナップレイアウト（Windows 11専用）を開く",
    "desc": "画面右上に2分割・3分割・4分割の整列レイアウト選択ポップアップを表示します。",
    "tip": "矢印キーまたは数字キー（1〜6）で配置先をそのまま指定できます。",
    "level": 3,
    "memory": "アルファベット最後の「Z」＝究極（Zenith）の整列「スナップレイアウト」",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020290
  },
  {
    "id": "w11-12",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "Tab"
    ],
    "title": "タスクビュー（全ウィンドウ＆仮想デスクトップ一覧）",
    "desc": "現在開いている全ウィンドウの俯瞰と、仮想デスクトップの追加・切り替えを行います。",
    "tip": "キーから指を離しても一覧が閉じないため、マウスでも選びやすいのが特徴です。",
    "level": 3,
    "memory": "Alt + Tab（アプリ切替）のWindows全体俯瞰版だから「Win + Tab」",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020402
  },
  {
    "id": "w11-18",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "Home"
    ],
    "title": "作業中以外の背景ウィンドウをすべて最小化",
    "desc": "現在アクティブなウィンドウ1つだけを残し、後ろにある他のウィンドウを一括で最小化します。",
    "tip": "もう一度 Win + Home を押すと背景のウィンドウが元の位置に復帰します。",
    "level": 2,
    "memory": "Home（自分の家＝今作業中のウィンドウ1つ）だけを残して他を片付ける",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020414
  },
  {
    "id": "w11-14",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "↑ / ↓"
    ],
    "title": "ウィンドウの最大化（↑）/ 元のサイズ・最小化（↓）",
    "desc": "Win + ↑ でウィンドウを最大化し、Win + ↓ でサイズ復元または最小化します。",
    "tip": "Win + ←/→ のあとに ↑/↓ を押すと画面の4分割（四隅への配置）も自在にできます。",
    "level": 3,
    "memory": "Win（画面）＋ 上矢印（↑で大きく最大化）/ 下矢印（↓で小さく縮める）",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020422
  },
  {
    "id": "w11-13",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "← / →"
    ],
    "title": "ウィンドウを画面の左右半分にスナップ配置",
    "desc": "現在のウィンドウを画面の左半分または右半分にピタッと50%整列させます。",
    "tip": "左右に資料と作業画面を並べて見比べるときに必須のショートカットです。",
    "level": 3,
    "memory": "Win（画面）＋ 矢印の方向（左/右）へウィンドウをぶつけてピタッと寄せるイメージ",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020426
  },
  {
    "id": "w11-17",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "Shift",
      "↑"
    ],
    "title": "横幅はそのままにウィンドウを「縦方向だけ最大化」",
    "desc": "現在の横幅を維持したまま、画面の上端から下端まで縦いっぱいに広げます。",
    "tip": "縦に長いコードやWebページ、PDFを読むときに非常に重宝します。",
    "level": 1,
    "memory": "Win + ↑（全体最大化）に「Shift（縦方向だけに限定）」をプラス",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1030422
  },
  {
    "id": "w11-16",
    "category": "win11",
    "subcategory": "ウィンドウ・画面整理",
    "keys": [
      "Win",
      "Shift",
      "← / →"
    ],
    "title": "ウィンドウを別のモニター（ディスプレイ）へ移動",
    "desc": "マルチモニター環境で、アクティブなウィンドウを隣のディスプレイへ瞬時に移動します。",
    "tip": "マウスで画面端まで長距離ドラッグする手間がなくなります。",
    "level": 3,
    "memory": "Win + 矢印（画面端寄せ）に「Shift（モニターの枠を超える）」を足して別画面へワープ！",
    "funcGroup": "ウィンドウ・画面整理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1030426
  },
  {
    "id": "w11-5",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Alt",
      "PrintScreen"
    ],
    "title": "現在アクティブなウィンドウだけをスクショ（コピー）",
    "desc": "全画面ではなく、今最前面で操作しているウィンドウ1つだけを綺麗に切り取ってコピーします。",
    "tip": "背景のデスクトップや他のアプリを写り込ませたくない時に重宝します。",
    "level": 3,
    "memory": "Alt（今のウィンドウだけに限定）＋ PrintScreen（画面撮影）",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710430
  },
  {
    "id": "w11-6",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "G"
    ],
    "title": "Xbox Game Bar（ゲームバー・画面録画）を開く",
    "desc": "アプリの画面録画やオーディオ出力切り替え、パフォーマンス監視パネルを呼び出します。",
    "tip": "Win + Alt + R を押せば、パネルを開かずに即座に画面録画を開始/停止できます。",
    "level": 2,
    "memory": "Game Bar（ゲームバー）の頭文字「G」",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020271
  },
  {
    "id": "w11-1",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "V"
    ],
    "title": "クリップボード履歴を開く",
    "desc": "過去にコピーしたテキストや画像の履歴一覧を表示し、選んで貼り付けられます。",
    "tip": "初回のみ「有効にする」をクリックすれば、よく使う定型文のピン留めも使える最強機能です。",
    "level": 3,
    "memory": "通常の貼り付け（Ctrl+V）のOS進化版だから「Win + V」",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020286
  },
  {
    "id": "w11-4",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "PrintScreen"
    ],
    "title": "全画面スクショを即座に画像ファイルとして保存",
    "desc": "画面全体のスクリーンショットを撮影し、「ピクチャ > スクリーンショット」フォルダに自動保存します。",
    "tip": "画面が一瞬暗くなれば保存完了の合図です。貼り付け作業なしで連写保存できます。",
    "level": 3,
    "memory": "Win（OS機能で自動保存）＋ PrintScreen（画面撮影）",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020430
  },
  {
    "id": "w11-3",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "Shift",
      "R"
    ],
    "title": "画面範囲を指定して動画キャプチャ（画面録画）",
    "desc": "Windows 11のSnipping Toolの録画モードを直接起動し、指定領域の操作手順をMP4録画します。",
    "tip": "操作マニュアル作成やバグ報告の動画撮影が標準機能だけで完結します。",
    "level": 2,
    "memory": "Record（録画する）の頭文字「R」（スクショの Win+Shift+S のすぐ左上！）",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1030282
  },
  {
    "id": "w11-2",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "Shift",
      "S"
    ],
    "title": "範囲を指定してスクリーンショット（Snipping Tool）",
    "desc": "画面の好きな範囲をドラッグして切り取りスクショを撮影します。",
    "tip": "撮影した画像は自動でクリップボードに入り、そのままチャットや資料に Ctrl + V で貼り付け可能です。",
    "level": 3,
    "memory": "Screen（画面）を Snip（切り取る）の「S」に Win + Shift",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1030283
  },
  {
    "id": "w11-48",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "Alt",
      "G"
    ],
    "title": "直前の画面操作を遡って動画保存（バックグラウンド録画）",
    "desc": "Xbox Game Barでバックグラウンド録画がONの時、「今の操作もう一回見たい！」と思った瞬間に直前30秒等を動画保存します。",
    "tip": "再現しにくいエラー画面が出た直後に押すと、発生の瞬間を動画証拠として残せます。",
    "memory": "Game clip（ゲームクリップ・直前録画）の「G」に Win + Alt",
    "level": 1,
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1050271
  },
  {
    "id": "w11-7",
    "category": "win11",
    "subcategory": "クリップボード・スクショ・録画",
    "keys": [
      "Win",
      "Alt",
      "R"
    ],
    "title": "アクティブウィンドウの画面録画を即座に開始 / 停止",
    "desc": "今開いているアプリの画面録画をワンタッチで開始・終了します（ビデオ > キャプチャに保存）。",
    "tip": "オンライン会議やブラウザ動作の記録に便利です。",
    "level": 2,
    "memory": "Record（録画）の「R」に Win + Alt",
    "funcGroup": "クリップボード・スクショ・録画",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1050282
  },
  {
    "id": "w11-37",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "数字 (1〜9)"
    ],
    "title": "タスクバーのピン留めアプリを起動・切り替え",
    "desc": "タスクバーの左から数えて1〜9番目にピン留めされているアプリを起動・アクティブ化します。",
    "tip": "Win + Shift + 数字 を押すと、すでに開いているアプリの「新しい別ウィンドウ」を起動できます。",
    "level": 2,
    "memory": "タスクバーの左から「1番目、2番目、3番目…」の並び順の数字そのまま！",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020115
  },
  {
    "id": "w11-36",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "H"
    ],
    "title": "音声入力（AIディクテーション）を起動",
    "desc": "マイクに向かって話すだけで高精度にテキスト文字起こし・自動句読点入力を行います。",
    "tip": "長文メールの下書きや議事録メモでタイピング疲れを軽減できます。",
    "level": 2,
    "memory": "Hear（聞き取る・音声入力）の頭文字「H」",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020272
  },
  {
    "id": "w11-38",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "T"
    ],
    "title": "タスクバー上のアプリアイコンにフォーカスして選択",
    "desc": "タスクバーのアプリアイコンを矢印キーで順番に選び、Enterで開くことができます。",
    "tip": "Win + B なら画面右下のシステムトレイ（隠れているインジケーター）にフォーカスします。",
    "level": 1,
    "memory": "Taskbar（タスクバー）の頭文字「T」",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020284
  },
  {
    "id": "w11-40",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "U"
    ],
    "title": "アクセシビリティ設定を開く（Win+Ctrl+Oで画面キーボード）",
    "desc": "テキストサイズの拡大、コントラスト、ナレーターなどのアクセシビリティ設定画面を開きます。",
    "tip": "Win + Ctrl + L で音声のリアルタイム字幕（ライブキャプション）も呼び出せます。",
    "level": 1,
    "memory": "Utility（ユーティリティ・アクセシビリティ補助機能）の頭文字「U」",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020285
  },
  {
    "id": "w11-39",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "+ (プラス)"
    ],
    "title": "拡大鏡（画面ズーム）を起動（Win+Escで終了）",
    "desc": "画面全体をズームインして大きく表示します。Win + - で縮小、Win + Esc で拡大鏡を閉じます。",
    "tip": "プレゼンや画面共有中に、細かい文字や図の一部を聴衆に拡大して見せたい時に絶大な効果があります！",
    "level": 2,
    "memory": "「＋（プラス）」で画面を拡大ズーム、「Esc」で拡大鏡から脱出",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020543
  },
  {
    "id": "w11-35",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      ". (ピリオド)"
    ],
    "title": "絵文字・顔文字・記号パネルを開く",
    "desc": "カーソル位置に絵文字（😊👍🎉）や顔文字、特殊記号（㎡、※、①、℃など）を入力するパネルを出します。",
    "tip": "Win + ;（セミコロン）でも同じパネルが開きます。記号タブはビジネス文書でも重宝します。",
    "level": 3,
    "memory": "文末に付ける「.（ピリオド）」や「;（顔文字の目）」で絵文字・顔文字パネル！",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020546
  },
  {
    "id": "w11-45",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "Ctrl",
      "C"
    ],
    "title": "カラーフィルター（グレースケール・色覚サポート）のON / OFF",
    "desc": "画面全体を白黒（グレースケール）にしたり、色覚特性に合わせた配色フィルターを適用します（事前設定時）。",
    "tip": "資料が白黒コピーされた時にどう見えるかを画面上で一瞬でテスト確認するのにも使えます！",
    "memory": "Color filter（カラーフィルター）の頭文字「C」に Win + Ctrl",
    "level": 1,
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1040267
  },
  {
    "id": "w11-32",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "Ctrl",
      "D"
    ],
    "title": "新しい仮想デスクトップを作成",
    "desc": "作業スペース（仮想デスクトップ）を新しく追加して切り替えます。",
    "tip": "「仕事用」「調べ物用」「会議用」など画面を分けてスッキリ作業できます。",
    "level": 2,
    "memory": "Desktop（デスクトップ）の「D」に Win + Ctrl で仮想デスクトップ新規作成",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1040268
  },
  {
    "id": "w11-46",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "Ctrl",
      "L"
    ],
    "title": "ライブキャプション（PC内の音声をリアルタイムAI字幕表示）を起動",
    "desc": "Web会議や動画など、PCから流れるあらゆる音声をリアルタイムで画面上部にテキスト字幕として起こします。",
    "tip": "イヤホンがない環境で動画の内容を確認したい時や、英語会議のリスニング補助に絶大な威力を発揮します！",
    "memory": "Live captions（ライブキャプション・字幕）の頭文字「L」に Win + Ctrl",
    "level": 2,
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1040276
  },
  {
    "id": "w11-47",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "Ctrl",
      "O"
    ],
    "title": "スクリーンキーボード（画面上のソフトウェアキーボード）を表示",
    "desc": "モニター上にマウスクリックで打てる仮想キーボードを表示します。",
    "tip": "物理キーボードの一部のキーが故障して押せなくなった時の緊急入力手段として覚えておくと命拾いします！",
    "memory": "On-screen keyboard（オンスクリーンキーボード）の頭文字「O」に Win + Ctrl",
    "level": 2,
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1040279
  },
  {
    "id": "w11-34",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "Ctrl",
      "F4"
    ],
    "title": "現在の仮想デスクトップを閉じる",
    "desc": "今開いている仮想デスクトップを削除します（開いていたアプリは隣のデスクトップへ自動移動します）。",
    "tip": "アプリ自体は強制終了されないので安心して閉じられます。",
    "level": 2,
    "memory": "アプリ終了（Alt+F4）・タブ閉じ（Ctrl+F4）の仮想デスクトップ版だから「Win + Ctrl + F4」",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1040304
  },
  {
    "id": "w11-33",
    "category": "win11",
    "subcategory": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keys": [
      "Win",
      "Ctrl",
      "← / →"
    ],
    "title": "仮想デスクトップを左右に切り替え",
    "desc": "作成済みの複数の仮想デスクトップ間を瞬時にスライド移動します。",
    "tip": "作業中のウィンドウが開きすぎて散らかった時に一瞬で別画面へ移れます。",
    "level": 2,
    "memory": "仮想デスクトップ作成（Win+Ctrl+D）と同じ「Win + Ctrl」を押しながら左右矢印でスライド移動",
    "funcGroup": "仮想デスクトップ・便利機能・アクセシビリティ",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1040426
  },
  {
    "id": "exp-21",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Enter"
    ],
    "title": "選択したフォルダに入る / ファイルを開く",
    "desc": "ダブルクリックの代わりに、選択中のフォルダを開いたりファイルを実行したりします。",
    "tip": "矢印キーで選んで Enter（開く）、Backspace（戻る）、F2（名前変更）を使えばマウスいらずです。",
    "memory": "Enter（中へ入る・実行する）の意味そのまま！",
    "level": 3,
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110406
  },
  {
    "id": "exp-22",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Backspace"
    ],
    "title": "直前に開いていたフォルダへ「戻る」（Alt + ← と同じ）",
    "desc": "1つ前に表示していたフォルダ画面へ片手ワンタッチで戻ります。",
    "tip": "Enter（進む）のすぐ上にある Backspace（戻る）でフォルダ階層を高速に行き来できます。",
    "memory": "Back（後ろ・前の画面へ戻る）の「Backspace」キー単体押し！",
    "level": 3,
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110408
  },
  {
    "id": "exp-23",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Home / End"
    ],
    "title": "フォルダ内の「先頭ファイル（Home）」/「末尾ファイル（End）」へ一瞬で移動",
    "desc": "ファイルが何百個あるフォルダでも、一番上のフォルダや一番下のファイルへ瞬時に移動します。",
    "tip": "スクロールバーをマウスで引っ張る手間がなくなります。",
    "memory": "Home（一番上のスタート地点）、End（一番下のゴール地点）",
    "level": 2,
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110414
  },
  {
    "id": "exp-24",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "F4"
    ],
    "title": "アドレスバーを選択して過去のフォルダ履歴一覧を展開",
    "desc": "エクスプローラー上部のアドレスバーにフォーカスし、最近開いたパス履歴のプルダウンを開きます。",
    "tip": "Alt + D や Ctrl + L と同じくアドレスバー操作に使えます。",
    "memory": "F4でアドレスバーのプルダウンリスト（4＝フォルダー履歴）を展開",
    "level": 2,
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "exp-16",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "F"
    ],
    "title": "フォルダ内のファイル検索ボックスへ移動（F3 / Ctrl+Eでも同じ）",
    "desc": "エクスプローラー右上の検索窓にカーソルを移動し、現在のフォルダ配下のファイルを絞り込み検索します。",
    "tip": "`*.pdf` や `*.xlsx` のように拡張子で絞り込むのにも便利です。",
    "level": 3,
    "memory": "Find（探す）の「Ctrl + F」（または Find の F3 / Explorer検索の Ctrl+E）",
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410270
  },
  {
    "id": "exp-15",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Alt",
      "D"
    ],
    "title": "アドレスバー（パス入力欄）を選択（Ctrl+L / F4でも同じ）",
    "desc": "上部のフォルダパス欄を全選択状態にします。そのまま Ctrl+C で現在のフォルダパスをコピーできます。",
    "tip": "アドレスバーに `cmd` や `powershell` と打ってEnterを押せば、そのフォルダでターミナルが即起動します！",
    "level": 3,
    "memory": "aDdress bar（アドレスバー）の「D」、または Location（場所）の「Ctrl + L」",
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710268
  },
  {
    "id": "exp-13",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Alt",
      "↑"
    ],
    "title": "1つ上の階層（親フォルダ）へ移動",
    "desc": "現在開いているフォルダの1つ上の親フォルダへ瞬時に上がります。",
    "tip": "深いフォルダ階層から上のフォルダへ戻る時の基本ショートカットです。",
    "level": 3,
    "memory": "「↑（上矢印）」の見た目通り、1つ上の親フォルダ階層へ上がる",
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710422
  },
  {
    "id": "exp-14",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Alt",
      "← / →"
    ],
    "title": "直前に開いていたフォルダへ「戻る（←）」/「進む（→）」",
    "desc": "ブラウザの戻る・進むと同じように、フォルダの移動履歴を前後に行き来します（Backspaceでも戻る）。",
    "tip": "マウスの戻るボタンがない環境でも高速にフォルダ間を往復できます。",
    "level": 3,
    "memory": "ブラウザの戻る/進むと完全共通！「←（過去に戻る）」「→（先に進む）」",
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720426
  },
  {
    "id": "exp-28",
    "category": "explorer",
    "subcategory": "階層移動・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "E"
    ],
    "title": "左側のナビゲーションウィンドウを「現在のフォルダ階層」まで一気に展開",
    "desc": "深い階層のフォルダを開いている時、左側のフォルダツリーを現在のフォルダ位置まで自動でパッと開きます。",
    "tip": "「今どこにいるのか左のツリーで見失った！」という時に一瞬で現在地ツリーが開く隠れ神ワザです！",
    "memory": "Expand folder tree（フォルダツリーを展開する）の頭文字「E」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "階層移動・アドレスバー・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810269
  },
  {
    "id": "exp-10",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "Delete"
    ],
    "title": "ファイルをごみ箱へ削除（Ctrl + D でも同じ）",
    "desc": "選択したファイルやフォルダをごみ箱へ移動します。",
    "tip": "キーボードのDeleteが遠い時は、左手だけで押せる Ctrl + D でも削除できます。",
    "level": 3,
    "memory": "Delete（削除）キー、または Delete の頭文字「Ctrl + D」",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110410
  },
  {
    "id": "exp-7",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "F2"
    ],
    "title": "ファイル・フォルダの名前を変更（リネーム）",
    "desc": "選択中のアイテムの名前を編集状態にします（拡張子を除いたファイル名部分だけが自動選択されます）。",
    "tip": "リネーム中に Tab キーを押すと、そのまま下のファイルの名前変更へ連続で移動できます！",
    "level": 3,
    "memory": "ファイル名変更は Excel のセル編集と同じ「F2（Editの2番目）」！",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210002
  },
  {
    "id": "exp-12",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "Ctrl",
      "ドラッグ"
    ],
    "title": "ファイルをその場に複製コピー（Alt+ドラッグでショートカット作成）",
    "desc": "Ctrlを押しながらドラッグするとファイルのコピーを作成し、Altを押しながらドラッグするとショートカットを作成します。",
    "tip": "同じフォルダ内でも別フォルダ間でも確実に「コピー」として動作させたい時に便利です。",
    "level": 2,
    "memory": "Copyの「Ctrl」を押しながらドラッグで複製、Alternateの「Alt」で分身（ショートカット）作成",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 522989
  },
  {
    "id": "exp-11",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "Shift",
      "Delete"
    ],
    "title": "ごみ箱に入れずに「完全削除」する",
    "desc": "ごみ箱を経由せず、ストレージから直接ファイルを完全消去します。",
    "tip": "復元できないため注意が必要ですが、大容量の不要ファイルを即座に空にしたい時に便利です。",
    "level": 2,
    "memory": "Delete（削除）に「Shift（段階を飛ばして強化）」を足して、ごみ箱を飛ばし完全削除！",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610410
  },
  {
    "id": "exp-9",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "Alt",
      "Enter"
    ],
    "title": "選択したファイル・フォルダの「プロパティ」を開く",
    "desc": "ファイルサイズや作成日時、フォルダ内の総容量・ファイル数を確認するプロパティ画面を表示します。",
    "tip": "Altキーを押しながらファイルをダブルクリックしても同じようにプロパティが開きます！",
    "level": 3,
    "memory": "Enter（ファイルを開く）の代わりに「Alt + Enter」で「開かずに中身情報（プロパティ）を見る」",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710406
  },
  {
    "id": "exp-8",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "Ctrl",
      "Shift",
      "C"
    ],
    "title": "選択したファイル・フォルダの「フルパス」をコピー",
    "desc": "選択している項目の場所（例: `\"C:\\Users\\...\\資料.xlsx\"`）をテキストとしてコピーします。",
    "tip": "メールやチャットで共有サーバーの格納場所を伝える時や、ファイル選択画面で一発指定する時に大活躍します！",
    "level": 3,
    "memory": "Ctrl+C（通常のコピー）に「Shift」を足して「ファイルのパス文字列をコピー」！",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810267
  },
  {
    "id": "exp-6",
    "category": "explorer",
    "subcategory": "フォルダ・ファイル作成＆操作",
    "keys": [
      "Ctrl",
      "Shift",
      "N"
    ],
    "title": "新しいフォルダーを作成する",
    "desc": "現在開いている場所（またはデスクトップ上）に新規フォルダを一瞬で作成します。",
    "tip": "右クリック → 新規作成 → フォルダー の3ステップが1秒になります。",
    "level": 3,
    "memory": "Ctrl+N（新規ウィンドウ）に「Shift」を足して「New Folder（新しいフォルダ）」を作成！",
    "funcGroup": "フォルダ・ファイル作成＆操作",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810278
  },
  {
    "id": "exp-25",
    "category": "explorer",
    "subcategory": "表示レイアウト切替・プレビュー",
    "keys": [
      "F5"
    ],
    "title": "フォルダ内の表示を最新の情報に更新（リロード）",
    "desc": "別アプリで保存したファイルが見えない時や並び順を再反映したい時に、フォルダ表示を最新化します。",
    "tip": "ブラウザの再読み込み（F5）と全く同じ役割です。",
    "memory": "ブラウザと完全共通！「F5」＝画面をリフレッシュ（更新）",
    "level": 3,
    "funcGroup": "表示レイアウト切替・プレビュー",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210005
  },
  {
    "id": "exp-20",
    "category": "explorer",
    "subcategory": "表示レイアウト切替・プレビュー",
    "keys": [
      "Ctrl",
      "マウスホイール"
    ],
    "title": "アイコンの表示サイズを無段階で拡大 / 縮小",
    "desc": "フォルダ内でCtrlを押しながらホイールを回すだけで、画像サムネイルの大きさを自在にズームできます。",
    "tip": "画像フォルダから目的の写真を探すときに一番直感的で速い方法です。",
    "level": 2,
    "memory": "ブラウザやExcelのズームと共通！「Ctrl ＋ ホイール回転」でアイコンを拡大・縮小",
    "funcGroup": "表示レイアウト切替・プレビュー",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 523010
  },
  {
    "id": "exp-17",
    "category": "explorer",
    "subcategory": "表示レイアウト切替・プレビュー",
    "keys": [
      "Alt",
      "P"
    ],
    "title": "プレビューウィンドウの表示 / 非表示を切り替え",
    "desc": "右側にプレビューパネルを表示し、PDF・画像・Word・Excel・テキストを開かずに中身を確認できます。",
    "tip": "大量のファイルの中身を矢印キーで次々チェックする時に圧倒的な時短になります！",
    "level": 3,
    "memory": "Preview（プレビュー）の頭文字「P」に Alt",
    "funcGroup": "表示レイアウト切替・プレビュー",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710280
  },
  {
    "id": "exp-27",
    "category": "explorer",
    "subcategory": "表示レイアウト切替・プレビュー",
    "keys": [
      "Ctrl",
      "Shift",
      "1 / 5"
    ],
    "title": "表示形式を「特大アイコン（Ctrl+Shift+1）」/「一覧（Ctrl+Shift+5）」に切替",
    "desc": "画像を最大サイズで見る「特大アイコン（1）」と、ファイル名だけを多数並べる「一覧（5）」を切り替えます。",
    "tip": "Ctrl+Shift+2（大アイコン）・Ctrl+Shift+6（詳細）と合わせて使うとフォルダ表示を自在に操れます。",
    "memory": "1番大きい「1＝特大アイコン」、5番目の「5＝コンパクトな一覧表示」",
    "level": 2,
    "funcGroup": "表示レイアウト切替・プレビュー",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810101
  },
  {
    "id": "exp-19",
    "category": "explorer",
    "subcategory": "表示レイアウト切替・プレビュー",
    "keys": [
      "Ctrl",
      "Shift",
      "2 / 6"
    ],
    "title": "表示形式を「大アイコン（Ctrl+Shift+2）」/「詳細（Ctrl+Shift+6）」に一発切替",
    "desc": "写真が見やすい「大アイコン（2）」と、更新日時・サイズ順で並べ替えやすい「詳細一覧（6）」を瞬時に切り替えます。",
    "tip": "1:特大、2:大、3:中、4:小、5:一覧、6:詳細、7:並べて表示、8:コンテンツ にそれぞれ対応しています！",
    "level": 2,
    "memory": "表示切替（Ctrl+Shift+1〜8）のうち、2番目に大きい「2＝大アイコン」、6番目が「6＝詳細リスト」",
    "funcGroup": "表示レイアウト切替・プレビュー",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810102
  },
  {
    "id": "exp-18",
    "category": "explorer",
    "subcategory": "表示レイアウト切替・プレビュー",
    "keys": [
      "Alt",
      "Shift",
      "P"
    ],
    "title": "詳細ウィンドウ（メタデータ・容量・更新日時パネル）の表示切替",
    "desc": "画面右側にファイルの解像度、撮影日、作成者、ファイルサイズなどの詳細情報パネルを表示します。",
    "tip": "写真のサイズやドキュメントの最終保存者を確認するときに便利です。",
    "level": 1,
    "memory": "Preview（Alt+P）に「Shift」を足して、もうひとつのパネル「詳細ウィンドウ」を表示",
    "funcGroup": "表示レイアウト切替・プレビュー",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920280
  },
  {
    "id": "exp-26",
    "category": "explorer",
    "subcategory": "起動・タブ・ウィンドウ管理",
    "keys": [
      "F11"
    ],
    "title": "エクスプローラーを全画面（フルスクリーン）表示に切り替え",
    "desc": "タイトルバーやタスクバーを隠し、画面いっぱいにファイル一覧を表示します（もう一度F11で解除）。",
    "tip": "大量の写真サムネイルやファイル一覧を広い画面で整理したい時に便利です。",
    "memory": "ブラウザやOneNoteと完全共通！「F11」＝フルスクリーン",
    "level": 1,
    "funcGroup": "起動・タブ・ウィンドウ管理",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210011
  },
  {
    "id": "exp-5",
    "category": "explorer",
    "subcategory": "起動・タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "N"
    ],
    "title": "現在と同じフォルダを「別ウィンドウ」でもう1つ開く",
    "desc": "今開いているフォルダと全く同じ場所を表示した新しいエクスプローラーウィンドウを複製起動します。",
    "tip": "Win + ← / → で左右に並べてフォルダ間でファイルをドラッグ移動したい時に超便利です！",
    "level": 3,
    "memory": "New window（新しい別ウィンドウ）の頭文字「N」",
    "funcGroup": "起動・タブ・ウィンドウ管理",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410278
  },
  {
    "id": "exp-2",
    "category": "explorer",
    "subcategory": "起動・タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "T"
    ],
    "title": "新しいフォルダー「タブ」を開く（Win11）",
    "desc": "Windows 11のエクスプローラー内で、ブラウザと同じように新しいタブを追加します。",
    "tip": "複数フォルダを見比べたりコピペする時、ウィンドウを増やさず1つの画面内でスッキリ作業できます！",
    "level": 3,
    "memory": "Tab（タブ）の頭文字「T」（Webブラウザの新しいタブと完全共通！）",
    "funcGroup": "起動・タブ・ウィンドウ管理",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410284
  },
  {
    "id": "exp-3",
    "category": "explorer",
    "subcategory": "起動・タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "W"
    ],
    "title": "現在のタブ（またはウィンドウ）を閉じる",
    "desc": "今開いているエクスプローラーのタブを閉じます（最後の1タブの場合はウィンドウを閉じます）。",
    "tip": "ブラウザのタブ閉じ（Ctrl+W）と全く同じ感覚で使えます。",
    "level": 3,
    "memory": "Window / Tab を閉じるの「W」（ブラウザと完全共通！）",
    "funcGroup": "起動・タブ・ウィンドウ管理",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410287
  },
  {
    "id": "exp-4",
    "category": "explorer",
    "subcategory": "起動・タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Tab"
    ],
    "title": "右隣のタブへ切り替え（Ctrl+Shift+Tabで左隣へ）",
    "desc": "エクスプローラー内で開いている複数のフォルダタブを順番に切り替えます。",
    "tip": "Ctrl + 数字（1〜8）で指定番号のタブへ直接ジャンプすることも可能です。",
    "level": 3,
    "memory": "Tabキーで次のタブへ移動（Shiftを足すと逆向きの左隣タブへ）",
    "funcGroup": "起動・タブ・ウィンドウ管理",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510402
  },
  {
    "id": "exp-1",
    "category": "explorer",
    "subcategory": "起動・タブ・ウィンドウ管理",
    "keys": [
      "Win",
      "E"
    ],
    "title": "エクスプローラーを起動する",
    "desc": "どの画面からでもファイル・フォルダ管理画面（エクスプローラー）を新しく開きます。",
    "tip": "PC作業で最も頻繁に使うショートカットのひとつです。",
    "level": 3,
    "memory": "Explorer（エクスプローラー）の頭文字「E」",
    "funcGroup": "起動・タブ・ウィンドウ管理",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020269
  },
  {
    "id": "ex-52",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Esc"
    ],
    "title": "入力・編集中の内容をキャンセルして元のセル値に戻す",
    "desc": "セルに文字や数式を打ち間違えた時、Enterを押す前なら Esc で入力前の状態に完全リセットします。",
    "tip": "また、コピー中（点線枠が回っている状態）の解除も Esc キー1発です。",
    "memory": "Escape（今の入力作業から脱出して元に戻す）の「Esc」",
    "level": 3,
    "funcGroup": "データ入力・編集",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110400
  },
  {
    "id": "ex-13",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "F2"
    ],
    "title": "セル内の編集モードに入る",
    "desc": "選択中のセルの末尾にカーソルを表示し、中身を直接編集できるようにします。",
    "tip": "ダブルクリック不要で文字の追記や参照先セルの色分け確認ができます。",
    "level": 3,
    "memory": "Function 2 ＝「2度押し（ダブルクリック）の代わり」にセル内を編集モードにする！",
    "funcGroup": "データ入力・編集",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210002
  },
  {
    "id": "ex-15",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      "D"
    ],
    "title": "上のセルの内容・数式をコピー（下方向へフィル）",
    "desc": "1つ上のセルに入力されている値や数式を、現在のセルへ瞬時に複写します。",
    "tip": "複数行を選択してから押すと、一番上のセルの内容を選択範囲すべてに一括コピーします。",
    "level": 3,
    "memory": "Down（下方向へコピー）の頭文字「D」",
    "funcGroup": "データ入力・編集",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410268
  },
  {
    "id": "ex-20",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      "E"
    ],
    "title": "フラッシュフィル（法則を自動認識して一括入力）",
    "desc": "隣の列の入力例から法則（姓と名の分割や結合、抽出など）を認識し、残り全行を自動入力します。",
    "tip": "関数を書かずに「氏名から苗字だけ抜き出す」「住所から都道府県だけ抜く」が一瞬で終わります！",
    "level": 3,
    "memory": "Easy fill（簡単自動入力）または Extract（抽出）の「E」でフラッシュフィル！",
    "funcGroup": "データ入力・編集",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410269
  },
  {
    "id": "ex-16",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      "R"
    ],
    "title": "左のセルの内容・数式をコピー（右方向へフィル）",
    "desc": "1つ左のセルに入力されている値や数式を、現在のセルへ複写します。",
    "tip": "Down（下）の D、Right（右）の R とセットで覚えましょう。",
    "level": 3,
    "memory": "Right（右方向へコピー）の頭文字「R」",
    "funcGroup": "データ入力・編集",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410282
  },
  {
    "id": "ex-19",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      "Enter"
    ],
    "title": "選択した複数セルに同じ値・数式を一括同時入力",
    "desc": "複数セルを選択した状態で文字や数式を打ち、Ctrl + Enter で確定すると全セルに同時入力されます。",
    "tip": "また、単一セルで Ctrl + Enter を押すと「確定後に下のセルへ移動せずその場に留まる」ため書式調整に便利です！",
    "level": 3,
    "memory": "Enter（確定して次へ移動）に「Ctrl（その場に留める・全選択セルに一斉確定）」をプラス",
    "funcGroup": "データ入力・編集",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510406
  },
  {
    "id": "ex-18",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      ": (コロン)"
    ],
    "title": "現在の時刻を入力",
    "desc": "現在のセルに今の時刻（例: 14:30）を固定値として一発入力します。",
    "tip": "作業開始・終了時刻の記録やタイムスタンプ入力に最適です。",
    "level": 2,
    "memory": "デジタル時計のコロン「:（14:30）」の記号そのものだから「Ctrl + :」で現在時刻！",
    "funcGroup": "データ入力・編集",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510558
  },
  {
    "id": "ex-17",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      "; (セミコロン)"
    ],
    "title": "今日の日付を入力",
    "desc": "現在のセルに本日の日付（例: 2026/11/05）を固定値として一発入力します。",
    "tip": "TODAY()関数と違い、翌日ファイルを開き直しても日付が勝手に変わりません。",
    "level": 3,
    "memory": "日付（Ctrl + ;）と時刻（Ctrl + :）はキーボード右側の隣同士！左側の「;」が日付",
    "funcGroup": "データ入力・編集",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510559
  },
  {
    "id": "ex-14",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Alt",
      "Enter"
    ],
    "title": "セル内で改行する",
    "desc": "1つのセルの中で文章を折り返して改行します。",
    "tip": "通常のEnterだと下のセルへ移動してしまいますが、Alt + Enterならセル内改行になります。",
    "level": 3,
    "memory": "Enter（次のセルへ移動）に「Alt（別動作）」を足して「セルから出ずに中で改行」",
    "funcGroup": "データ入力・編集",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710406
  },
  {
    "id": "ex-21",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Alt",
      "↓"
    ],
    "title": "ドロップダウンリスト（入力規則・オートコンプリート）を開く",
    "desc": "セルに設定されたプルダウンリストや、同じ列の既存入力候補一覧をキーボードで開きます。",
    "tip": "リストが設定されたアンケート表や管理表をマウスなしで高速入力できます。",
    "level": 2,
    "memory": "プルダウンの「▼（下向き矢印）」の見た目通り「Alt + ↓」でリストを開く",
    "funcGroup": "データ入力・編集",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710424
  },
  {
    "id": "ex-22",
    "category": "excel",
    "subcategory": "データ入力・編集",
    "keys": [
      "Ctrl",
      "Shift",
      "2 (\")"
    ],
    "title": "上のセルの「値（計算結果）」だけをコピーして編集状態にする",
    "desc": "上のセルに数式や罫線が入っていても、書式や数式はコピーせず「表示されている値」だけを転写します。",
    "tip": "Ctrl + D と違い、罫線が崩れず編集モードのまま追記できる隠れた名機能です。",
    "level": 1,
    "memory": "上のセルの値に「\"（チョンチョン＝同じ・同上マーク）」を付けるイメージで値を転写！",
    "funcGroup": "データ入力・編集",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810102
  },
  {
    "id": "ex-53",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Tab"
    ],
    "title": "入力を確定して「右隣のセル」へ移動（Shift+Tabで左隣へ）",
    "desc": "横方向にデータを連続入力する時、Tabで右へ進み、行末でEnterを押すと次の行の先頭へ戻ります！",
    "tip": "「Tab → Tab → Tab → Enter」で、最初の列のすぐ下の行に自動で改行復帰するExcelの超重要仕様です！",
    "memory": "Tab（横へ飛ばす）で右のセルへ、Shift+Tab で逆の左セルへ移動",
    "level": 3,
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110402
  },
  {
    "id": "ex-54",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Enter"
    ],
    "title": "入力を確定して「下のセル」へ移動（Shift+Enterで上のセルへ）",
    "desc": "セル入力を確定して1つ下のセルへ進みます。Shift + Enter なら1つ上のセルへ戻ります。",
    "tip": "行き過ぎた時は上矢印を押すより Shift + Enter の方がホームポジションのまま戻れて速いです。",
    "memory": "Enter（下へ進む）＋ Shift（逆方向＝上へ戻る）",
    "level": 3,
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110406
  },
  {
    "id": "ex-56",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "F8"
    ],
    "title": "拡張選択モードのON / OFF（Shift+F8で離れたセルの追加選択）",
    "desc": "F8を1回押すとShiftを押し続けなくても矢印キーだけで範囲選択できます。Shift+F8ならCtrlを押し続けなくても離れたセルを複数選択できます！",
    "tip": "ステータスバーに「拡張選択」「選択範囲の追加」と表示され、もう一度押すか Esc で解除されます。",
    "memory": "Wordと共通！「F8（末広がりの八）」で選択範囲を広げるモードにロック",
    "level": 1,
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210008
  },
  {
    "id": "ex-7",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "A"
    ],
    "title": "現在の表全体を選択（もう一度押すとシート全体）",
    "desc": "表の中のセルで押すと連続するデータ範囲（表全体）を選択し、もう1回押すとシート全体を選択します。",
    "tip": "Ctrl + Shift + *（アスタリスク）でも現在の表全体を一発選択できます。",
    "level": 3,
    "memory": "All（表のすべて）の頭文字「A」",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410265
  },
  {
    "id": "ex-9",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "G"
    ],
    "title": "「ジャンプ」ダイアログを開く（F5でも同じ）",
    "desc": "指定セルへの移動や、「セル選択(S)」から空白セル・数式セル・可視セルだけを一括選択します。",
    "tip": "Ctrl + G → Alt + S → K → Enter で「表の中の空白セルだけを一括選択」する実務テクニックは超有名です！",
    "level": 2,
    "memory": "Go to（指定した場所へ行く・ジャンプ）の頭文字「G」",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410271
  },
  {
    "id": "ex-6",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "Space"
    ],
    "title": "現在の「列」を丸ごと選択",
    "desc": "選択中のセルが含まれる縦1列すべてを選択します。",
    "tip": "日本語入力がONだと半角スペース入力になる場合があるため、半角英数モードで使いましょう。",
    "level": 3,
    "memory": "Column（列）の頭文字「Ctrl」＋ Space で「縦1列」を選択！",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510404
  },
  {
    "id": "ex-62",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "Backspace"
    ],
    "title": "スクロールして遠くへ行った画面を「現在の選択セル位置」へ一瞬で戻す",
    "desc": "マウスホイールで別箇所を見に行って元の選択セルを見失った時、選択を解除せずに元のセルが映る位置へ画面を引き戻します！",
    "tip": "数式入力中や広い範囲を選択中に、現在地へ画面を戻したい時の超便利テクニックです。",
    "memory": "Backspace（元の場所へバックする）に Ctrl を添えて「アクティブセルへ視点を引き戻す」",
    "level": 2,
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510408
  },
  {
    "id": "ex-3",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "Home"
    ],
    "title": "先頭セル（A1）へ一気に戻る",
    "desc": "シートのどこにいても、一番左上のA1セル（ウィンドウ枠固定時は左上端）へ戻ります。",
    "tip": "ファイルを保存して閉じる前に全シートで Ctrl + Home を押すのは実務の鉄則マナーです！",
    "level": 3,
    "memory": "Home（ホームベース＝A1セル）へ Ctrl で一気に帰還する",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510414
  },
  {
    "id": "ex-4",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "End"
    ],
    "title": "データが存在する最終セル（右下端）へ移動",
    "desc": "シート内でデータや書式が使われている一番右下の最終セルへジャンプします。",
    "tip": "Ctrl + Shift + End なら現在のセルから表の右下端までを一括選択できます。",
    "level": 3,
    "memory": "End（データの終点＝右下端の最終セル）へ Ctrl で一気に飛ぶ",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510416
  },
  {
    "id": "ex-8",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "PageUp / PageDown"
    ],
    "title": "左右のワークシートへ切り替え",
    "desc": "Ctrl + PageDown で右隣のシートへ、Ctrl + PageUp で左隣のシートへ瞬時に移動します。",
    "tip": "Ctrl + Shift + PageDown / PageUp なら複数シートをまとめてグループ選択できます。",
    "level": 3,
    "memory": "PageUp（前のページ＝左のシート）/ PageDown（次のページ＝右のシート）",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510418
  },
  {
    "id": "ex-1",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "↑ / ↓ / ← / →"
    ],
    "title": "データの端まで一気にジャンプ移動",
    "desc": "データが入力されている連続範囲の端（先頭・末尾）のセルまで一瞬で移動します。",
    "tip": "何千行ある表でも一瞬で一番下まで到達できる、Excel最重要の移動ワザです。",
    "level": 3,
    "memory": "Ctrl（ワープ加速キー）＋ 矢印で、データの端まで一気に飛ぶイメージ",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510422
  },
  {
    "id": "ex-11",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      ". (ピリオド)"
    ],
    "title": "選択範囲の四隅（アクティブセル）を時計回りに移動",
    "desc": "広い範囲を選択している時、選択範囲の左上→右上→右下→左下へと視点をジャンプします。",
    "tip": "下まで範囲選択しすぎた時に、選択開始側ではなく選択終了側を微調整したい時に必須です。",
    "level": 1,
    "memory": "ピリオド「.」＝選択範囲の四隅の「点（角）」を順番に回る！",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510546
  },
  {
    "id": "ex-5",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Shift",
      "Space"
    ],
    "title": "現在の「行」を丸ごと選択",
    "desc": "選択中のセルが含まれる横1行すべてを選択します。",
    "tip": "そのまま Ctrl + 「+」で行挿入、Ctrl + 「-」で行削除に繋げるとマウスいらず！",
    "level": 3,
    "memory": "横長のキー「Shift」＋ Space で「横1行」を選択！（S＝Side/横 と覚えてもOK）",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610404
  },
  {
    "id": "ex-12",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Alt",
      "PageDown / PageUp"
    ],
    "title": "画面を1画面分「右（PageDown）/ 左（PageUp）」へ横スクロール",
    "desc": "通常のPageDown/Upは上下スクロールですが、Altを足すと横長シートを左右に1画面ずつ移動します。",
    "tip": "列数が多いスケジュール表や管理表を見る時に便利です。",
    "level": 1,
    "memory": "PageUp/Down（上下画面移動）に「Alt（別方向へ切り替え）」を足して左右へ画面移動",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710418
  },
  {
    "id": "ex-10",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Alt",
      "; (セミコロン)"
    ],
    "title": "見えているセル（可視セル）だけを選択",
    "desc": "非表示にした行・列や折りたたんだグループを除外し、画面に表示されているセルだけを選択対象にします。",
    "tip": "集計行だけをコピーしたいのに隠れている行まで一緒にコピーされてしまう問題を一発解決します！",
    "level": 2,
    "memory": "セミコロン「;」の点が上下に分かれている見た目から「隠れた行を飛ばして見えているセルだけ選択」",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710559
  },
  {
    "id": "ex-2",
    "category": "excel",
    "subcategory": "セル移動・範囲選択",
    "keys": [
      "Ctrl",
      "Shift",
      "↑ / ↓ / ← / →"
    ],
    "title": "データの端まで一気に範囲選択",
    "desc": "現在のセルからデータが途切れる端のセルまでを一括で範囲選択します。",
    "tip": "表のデータ列を丸ごとコピーしたり関数範囲に指定する時に必須です。",
    "level": 3,
    "memory": "Ctrl+矢印（端までワープ）＋ Shift（通った軌跡をすべて範囲選択）の最強コンボ！",
    "funcGroup": "セル移動・範囲選択",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810422
  },
  {
    "id": "ex-55",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "F3"
    ],
    "title": "定義した「名前」の一覧を呼び出して数式に貼り付け",
    "desc": "あらかじめ名前定義したセル範囲の一覧ポップアップを表示し、数式内に挿入します。",
    "tip": "Ctrl + F3（名前の管理）で登録した名前を F3 単体で呼び出す関係です。",
    "memory": "F3単体＝「名前を呼び出す」、Ctrl+F3＝「名前を管理する」、Shift+F3＝「関数(fx)を挿入する」のF3三兄弟！",
    "level": 1,
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210003
  },
  {
    "id": "ex-23",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "F4"
    ],
    "title": "絶対参照（$A$1）の切り替え / 直前の操作の繰り返し",
    "desc": "数式編集中は「$A$1 → A$1 → $A1 → A1」を切り替え、通常時は直前の操作（色塗りや行挿入等）を繰り返します。",
    "tip": "1つの機能で2役こなす、Excelユーザー全員が毎日使う神キーです。",
    "level": 3,
    "memory": "4キーの表に「$」が印字されている通り、数式中は「F4」で「$（絶対参照）」を付与！",
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "ex-57",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "F9"
    ],
    "title": "ブック全体の数式を今すぐ再計算 / 数式の一部を計算結果に変換",
    "desc": "手動計算モード時の再計算を行います。また数式編集中に式の一部を選択して F9 を押すと、その部分の計算結果が即座に分かります！",
    "tip": "複雑なネスト関数のデバッグで「このVLOOKUP部分だけ今どんな値になってる？」をその場で確認できる裏ワザです（確認後はEscで戻す）。",
    "memory": "F9（9＝計算の「く」・九九の「9」！）で数式を計算実行",
    "level": 2,
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210009
  },
  {
    "id": "ex-27",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Ctrl",
      "F3"
    ],
    "title": "「名前の管理」を開く（Ctrl+Shift+F3で一括定義）",
    "desc": "セル範囲に付けた名前定義の一覧・編集画面を開きます。数式内では F3 で名前を呼び出せます。",
    "tip": "表全体を選んで Ctrl + Shift + F3 を押せば、見出し行の名前で一括して名前定義を作れます。",
    "level": 1,
    "memory": "F3（名前呼び出し）に Ctrl を足して「名前の管理台帳」を開く",
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510303
  },
  {
    "id": "ex-25",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Shift",
      "F3"
    ],
    "title": "「関数の挿入」ダイアログを開く",
    "desc": "数式バー左の「fx」ボタンを押した時と同じ、関数検索・引数ガイド画面を開きます。",
    "tip": "引数の順番がうろ覚えな関数（VLOOKUPやXLOOKUPなど）を入力する時に安心です。",
    "level": 2,
    "memory": "Function（関数）の「F3」に Shift を合わせて「fx（関数の挿入）」を起動",
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610303
  },
  {
    "id": "ex-65",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Alt",
      "F11"
    ],
    "title": "VBAエディター（Visual Basic Editor）を起動（Alt+F8でマクロ実行）",
    "desc": "Excelマクロ（VBA）のコード記述・編集画面を一発で開きます。登録済みマクロの実行一覧は Alt + F8 です。",
    "tip": "開発タブを表示していなくても、Alt + F11 だけでいつでもVBA画面を開けます。",
    "memory": "F11（プロ機能）に Alt（裏画面へ切り替え）で VBA エディター起動！",
    "level": 2,
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710311
  },
  {
    "id": "ex-28",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Alt",
      "M → P / A"
    ],
    "title": "数式の参照元を矢印でトレース表示（M→P）/ 矢印消去（M→A）",
    "desc": "選択中の数式がどのセルを参照して計算しているかを青い矢印で可視化します。",
    "tip": "他人が作った複雑なExcelシートの計算ロジックを解読する時の必須コマンドです。",
    "level": 2,
    "memory": "Alt → Formula（M：数式タブ）→ Precedents（P：参照元）/ Remove Arrows（A：矢印消去）",
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720277
  },
  {
    "id": "ex-64",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Ctrl",
      "Shift",
      "U"
    ],
    "title": "数式バーの表示領域を「広く展開 / 1行に折りたたみ」切り替え",
    "desc": "長いIF関数やAlt+Enterで改行した数式が見切れてしまう時、上部の数式バーを複数行にガバッと広げます。",
    "tip": "マウスで数式バーの下端をドラッグして広げる手間がゼロになります！",
    "memory": "Unfold（数式バーを広げて展開する）の頭文字「U」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810285
  },
  {
    "id": "ex-26",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Ctrl",
      "Shift",
      "@ (`)"
    ],
    "title": "シート内のすべての「数式そのもの」を一覧表示",
    "desc": "計算結果の値ではなく、セルに入力されている数式文字列（`=SUM(...)`等）をシート全体で表示切り替えします。",
    "tip": "どこに数式が入っていてどこが手入力ベタ打ち数値なのかを一目で監査できます。もう一度押すと戻ります。",
    "level": 2,
    "memory": "アクサンシルコンフレックス/バッククォート（`）で裏側にある「数式の中身」を暴く",
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810564
  },
  {
    "id": "ex-24",
    "category": "excel",
    "subcategory": "数式・関数・名前定義",
    "keys": [
      "Alt",
      "Shift",
      "= (イコール)"
    ],
    "title": "オートSUM（SUM関数を自動挿入）",
    "desc": "隣接する数値範囲を自動判定して `=SUM(...)` を一瞬で入力します。",
    "tip": "合計を出したいデータ範囲＋空白の合計行・列をまとめて選択して押すと、縦計・横計をすべて1秒で同時計算できます！",
    "level": 3,
    "memory": "計算式の「=（イコール）」キーに Alt + Shift を合わせて合計（=SUM）を一発召喚！",
    "funcGroup": "数式・関数・名前定義",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920561
  },
  {
    "id": "ex-58",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "F11"
    ],
    "title": "選択データから別シートに「全画面グラフシート」を一発作成",
    "desc": "表を選択して F11 を押すだけで、グラフ専用の新しいシートを追加してグラフを生成します。",
    "tip": "現在のシート内に小さく埋め込みたい時は Alt + F1、独立シートにしたい時は F11 と使い分けます。",
    "memory": "「11」の縦棒2本が「棒グラフ（📊）」の形に見えるから F11 ＝グラフ作成！",
    "level": 2,
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210011
  },
  {
    "id": "ex-47",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "Ctrl",
      "T"
    ],
    "title": "データ範囲を「テーブル」に変換",
    "desc": "表を構造化参照・自動縞模様・フィルタ付きのExcelテーブルに変換します（Ctrl + L でも同じ）。",
    "tip": "末尾に行を追加しても数式や書式が自動拡張されるため、データベース管理の基本テクニックです。",
    "level": 3,
    "memory": "Table（テーブル）の頭文字「T」",
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410284
  },
  {
    "id": "ex-51",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "Shift",
      "F2"
    ],
    "title": "セルに「メモ（旧コメント）」を挿入・編集",
    "desc": "セルの右上に赤い三角マークが付く従来の「メモ」を挿入・編集します（モダンコメントは Ctrl + Alt + M）。",
    "tip": "補足説明や注意事項をセルに書き残したい時にすぐ呼び出せます。",
    "level": 2,
    "memory": "F2（セル編集）に「Shift」を足して、セル本体ではなく「外側のメモ（コメント）を編集」！",
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610302
  },
  {
    "id": "ex-50",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "Shift",
      "F11"
    ],
    "title": "新しいワークシートを挿入（Alt→H→O→Rでシート名変更）",
    "desc": "現在のシートの左隣に新規ワークシートを1枚追加します。",
    "tip": "追加したあと Alt → H → O → R と押せば、マウスを使わずにそのままシート名を変更できます！",
    "level": 2,
    "memory": "F11（グラフシート挿入）に Shift を足して「普通のワークシートを挿入」",
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610311
  },
  {
    "id": "ex-49",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "Alt",
      "F1"
    ],
    "title": "選択データから即座にグラフを作成（F11で別シート作成）",
    "desc": "表を選択して押すだけで、現在のシート上に標準の棒グラフ等を1秒で自動生成します。",
    "tip": "F11 単独押しなら、グラフ専用の新しいシートを追加して全画面グラフを作成します。",
    "level": 2,
    "memory": "一番最初のファンクションキー「F1」に Alt を合わせて「1秒でグラフ作成」！",
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710301
  },
  {
    "id": "ex-48",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "Alt",
      "N → V → T"
    ],
    "title": "ピボットテーブルを挿入",
    "desc": "現在の表データからクロス集計を行うピボットテーブル作成画面を一発で呼び出します。",
    "tip": "旧来のショートカット Alt → D → P でもピボットテーブルウィザードを起動できます。",
    "level": 2,
    "memory": "Alt → Insert(N：挿入) → PivotTable(V) → Table(T) のアクセスキー順",
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720278
  },
  {
    "id": "ex-46",
    "category": "excel",
    "subcategory": "テーブル・フィルタ・ピボット・シート",
    "keys": [
      "Ctrl",
      "Shift",
      "L"
    ],
    "title": "フィルター（オートフィルタ）のON / OFF切り替え",
    "desc": "表の見出し行に絞り込み・並び替え用のドロップダウン矢印（▼）を設置・解除します。",
    "tip": "見出しセル上で Alt + ↓ を押すと、マウスを使わずにフィルターメニューを開いて絞り込みできます！",
    "level": 3,
    "memory": "fiLter（フィルター）または List（リスト）の「L」に Ctrl + Shift",
    "funcGroup": "テーブル・フィルタ・ピボット・シート",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810276
  },
  {
    "id": "ex-42",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Ctrl",
      "0 (ゼロ)"
    ],
    "title": "選択した「列」を非表示にする",
    "desc": "選択している縦の列を一時的に非表示にします（再表示は Alt → H → O → U → L）。",
    "tip": "印刷時に見せたくない計算用の作業列をサッと隠すときに便利です。",
    "level": 2,
    "memory": "0（ゼロ＝幅をゼロにして隠す）で列を非表示に！",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310100
  },
  {
    "id": "ex-60",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Ctrl",
      "8"
    ],
    "title": "グループ化のアウトライン記号（＋/－ボタン）の表示 / 非表示切替",
    "desc": "Alt+Shift+→ で作成した行・列グループの折りたたみ枠（左端や上端の＋/－バー）を表示・非表示にします。",
    "tip": "Ctrl+8（アウトライン記号）→ Ctrl+9（行非表示）→ Ctrl+0（列非表示）と右端の数字3つがすべて表示制御になっています！",
    "memory": "8・9・0 の右端数字トリオ（8＝アウトライン枠、9＝行隠し、0＝列隠し）",
    "level": 1,
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310108
  },
  {
    "id": "ex-41",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Ctrl",
      "9 / Shift+9"
    ],
    "title": "選択した「行」を非表示にする（Ctrl+9）/ 再表示（Ctrl+Shift+9）",
    "desc": "不要な行を一時的に隠します。上下の行をまたいで選択し Ctrl + Shift + 9 で再表示します。",
    "tip": "テンキーではなくキーボード上部の数字「9」を使います。",
    "level": 2,
    "memory": "丸괄弧「( 」が印字された「9」で、行を挟んで隠す（Shift追加で括弧を開いて再表示）",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310109
  },
  {
    "id": "ex-39",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Ctrl",
      "+ (プラス)"
    ],
    "title": "セル・行・列の挿入",
    "desc": "選択中のセル・行・列の手前（上または左）に新しい空白を挿入します。",
    "tip": "メインキーボードの場合は Ctrl + Shift + ; (セミコロン) で「+」を入力します。",
    "level": 3,
    "memory": "「＋（プラス＝増やす）」の記号そのままに行・列を挿入！",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510543
  },
  {
    "id": "ex-40",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Ctrl",
      "- (マイナス)"
    ],
    "title": "セル・行・列の削除",
    "desc": "選択中のセル・行・列を詰めて削除します。",
    "tip": "Shift + Space（行選択）→ Ctrl + -（行削除）のコンボは超高速です。",
    "level": 3,
    "memory": "「－（マイナス＝減らす）」の記号そのままに行・列を削除！",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510545
  },
  {
    "id": "ex-44",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Alt",
      "H → O → I"
    ],
    "title": "列幅の自動調整（文字数にピッタリ合わせる）",
    "desc": "選択している列の横幅を、入力されているデータの最大長さに自動フィットさせます。",
    "tip": "Altキーから順番に H, O, I とポンポン押すだけで「###」表示を一瞬で解消できます（行の高さ自動調整は Alt→H→O→A）。",
    "level": 3,
    "memory": "Alt → Home(H) → Format(O) → AutoFit Column Width(I)：「ホイ（H・O・I）っと列幅調整！」と覚えるのが定番！",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720272
  },
  {
    "id": "ex-45",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Alt",
      "W → F → F"
    ],
    "title": "ウィンドウ枠の固定 / 解除",
    "desc": "現在のセルの上側と左側を見出しとして固定し、スクロールしても常に見えるようにします。",
    "tip": "すでに固定されている状態で押すと固定解除になります。Alt → W → F → F のリズムで覚えましょう！",
    "level": 3,
    "memory": "Alt → View(W：表示) → Freeze Panes(F：枠固定) → Freeze(F)：「ワッフフ（W・F・F）で枠固定！」",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720287
  },
  {
    "id": "ex-43",
    "category": "excel",
    "subcategory": "行列操作・非表示・グループ化",
    "keys": [
      "Alt",
      "Shift",
      "→ / ←"
    ],
    "title": "行・列を「グループ化」する（→）/ グループ化解除（←）",
    "desc": "選択した行や列に「＋ / －」の折りたたみボタン（アウトライン）を設置します。",
    "tip": "単なる非表示（Ctrl+9/0）だと他の人が気づきにくいため、実務ではグループ化（Alt+Shift+→）の方が圧倒的に好まれます！",
    "level": 3,
    "memory": "Alt + Shift + 「→（階層を右へ深くしてグループ化）」「←（左へ戻してグループ解除）」",
    "funcGroup": "行列操作・非表示・グループ化",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920426
  },
  {
    "id": "ex-31",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "1 (テンキー以外)"
    ],
    "title": "「セルの書式設定」ダイアログを開く",
    "desc": "表示形式、配置、フォント、罫線、塗りつぶしを詳細設定する画面を一発で開きます。",
    "tip": "リボンメニューから探すより圧倒的に速く、あらゆる書式設定の起点になります。",
    "level": 3,
    "memory": "書式設定の「1番目（ナンバーワン基本機能）」だから「Ctrl + 1」！",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310101
  },
  {
    "id": "ex-59",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "2 / 3 / 4"
    ],
    "title": "太字（Ctrl+2）・斜体（Ctrl+3）・下線（Ctrl+4）の数字ショートカット",
    "desc": "Ctrl+1（書式設定）とCtrl+5（取り消し線）の間にある数字で、2＝太字(B)、3＝斜体(I)、4＝下線(U)を切り替えます。",
    "tip": "Ctrl+1〜5 を左手だけで連続操作するときに知っていると便利です。",
    "memory": "1(書式) → 2(太字) → 3(斜体) → 4(下線) → 5(取消線) と上段数字キー左から順番に並んでいる！",
    "level": 1,
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310102
  },
  {
    "id": "ex-32",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "5 (テンキー以外)"
    ],
    "title": "取り消し線のON / OFF切り替え",
    "desc": "選択したセルまたは文字に中央の取り消し線（見え消し線）を引きます。",
    "tip": "ToDoリストや課題管理表で完了した項目を消すときに毎日使えます！",
    "level": 3,
    "memory": "5（ご）＝「誤字を取り消し線で消す」の「Ctrl + 5」",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310105
  },
  {
    "id": "ex-61",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "B / I / U"
    ],
    "title": "太字（Ctrl+B）・斜体（Ctrl+I）・下線（Ctrl+U）",
    "desc": "選択したセルや文字を太字（Bold）、斜体（Italic）、下線付き（Underline）にします。",
    "tip": "WordやPowerPointと完全共通の基本装飾キーです。",
    "memory": "Bold（太字）の B、Italic（斜体）の I、Underline（下線）の U",
    "level": 3,
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410266
  },
  {
    "id": "ex-33",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "1 (!)"
    ],
    "title": "数値を「3桁カンマ区切り（#,##0）」表示にする",
    "desc": "選択した数値セルに千単位のカンマ（例: 1,234,567）を一発で設定します。",
    "tip": "金額や数量の表を見やすく整えるときに毎回使えます。",
    "level": 3,
    "memory": "1キーの上にある「!（感嘆符）」を千単位の区切り棒「,」に見立てて「Ctrl + Shift + 1」",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810101
  },
  {
    "id": "ex-63",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "2 (@)"
    ],
    "title": "数値を「時刻（h:mm）」表示形式にする",
    "desc": "0.5 などの小数を「12:00」のような時刻表示形式に一発で変更します。",
    "tip": "Ctrl+Shift+1(桁区切り)、2(時刻)、3(日付)、4(通貨)、5(%)、6(指数)で1〜6がコンプリートです！",
    "memory": "2（Time＝2文字目のT / 時計の針が2本）で時刻表示形式！",
    "level": 1,
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810102
  },
  {
    "id": "ex-34",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "3 (#)"
    ],
    "title": "数値を「日付（yyyy/m/d）」表示形式にする",
    "desc": "日付が「45601」のようなシリアル値（ただの数字）になってしまったセルを一発で日付表示に直します。",
    "tip": "日付セルに数値を貼って変な数字になった時の特効薬です！",
    "level": 2,
    "memory": "3キーの上にある「#」はカレンダーのマス目の形だから「Ctrl + Shift + 3」で日付表示！",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810103
  },
  {
    "id": "ex-35",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "4 ($)"
    ],
    "title": "数値を「通貨（¥1,234）」表示形式にする",
    "desc": "選択した数値セルに円マーク（¥）と3桁カンマを一発で付与します。",
    "tip": "見積書や売上表の作成時に便利です。",
    "level": 2,
    "memory": "4キーの上にある「$（ドルマーク）」の印字そのまま！「Ctrl + Shift + 4」で通貨表示",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810104
  },
  {
    "id": "ex-36",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "5 (%)"
    ],
    "title": "数値を「パーセント（%）」表示形式にする",
    "desc": "0.15 などの小数を「15%」のパーセント表記に一発で変更します。",
    "tip": "達成率や前年比の列を設定するときに一瞬で終わります。",
    "level": 2,
    "memory": "5キーの上にある「%（パーセント）」の印字そのまま！「Ctrl + Shift + 5」で％表示",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810105
  },
  {
    "id": "ex-38",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "6 (&) / _ (アンダースコア)"
    ],
    "title": "選択範囲に「外枠罫線」を引く（&）/ 罫線をすべて消す（_）",
    "desc": "Ctrl+Shift+6(&) で外枠に実線を引き、Ctrl+Shift+ろ(_) で選択範囲の罫線をすべて消去します。",
    "tip": "ダイアログを開かずに枠線の追加・クリアができます。",
    "level": 1,
    "memory": "6の上の「&（アンド＝囲んで結ぶ）」で外枠罫線、アンダースコア「_（消しゴム）」で罫線消去",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810106
  },
  {
    "id": "ex-30",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "V"
    ],
    "title": "値のみ貼り付け（Microsoft 365 / 最新Excel対応）",
    "desc": "コピーしたセルの数式や罫線・背景色を持たせず、「値だけ」を直接貼り付けます。",
    "tip": "従来の Ctrl + Alt + V → V → Enter がワンアクションに短縮されました。",
    "level": 3,
    "memory": "共通の「書式なし貼り付け（Ctrl+Shift+V）」と同じく、Excelでも「値だけ貼り付け」！",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810286
  },
  {
    "id": "ex-37",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Shift",
      "^ (~)"
    ],
    "title": "表示形式を「標準」にリセットする",
    "desc": "日付や通貨、パーセントなどが設定されたセルの表示形式を、初期状態の「標準」に戻します。",
    "tip": "勝手に日付に変換されてしまった数値を元の数字に戻したい時に使います。",
    "level": 2,
    "memory": "波線「~（チルダ）」で装飾を洗い流して「標準表示」にフラットリセット",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810594
  },
  {
    "id": "ex-29",
    "category": "excel",
    "subcategory": "貼り付け・書式・表示形式",
    "keys": [
      "Ctrl",
      "Alt",
      "V"
    ],
    "title": "「形式を選択して貼り付け」ダイアログを開く",
    "desc": "値のみ（V）、数式のみ（F）、書式のみ（T）、列幅（W）、演算、行列の入れ替え（E）などをキーボードで実行します。",
    "tip": "Ctrl + Alt + V → E → Enter で「縦と横（行と列）を入れ替えて貼り付け」が瞬時にできます！",
    "level": 3,
    "memory": "Ctrl + V（貼り付け）に「Alt（別の貼り付け方を選ぶ）」を挟んで「形式を選択して貼り付け」",
    "funcGroup": "貼り付け・書式・表示形式",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910286
  },
  {
    "id": "wd-36",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "F4"
    ],
    "title": "直前の操作（文字装飾・ペースト・表の行挿入など）を繰り返す",
    "desc": "直前に行ったフォント変更や蛍光ペン、段落設定などを別箇所にもワンタッチで繰り返し適用します。",
    "tip": "複数箇所に同じ見出し装飾や色塗りをしたい時に大活躍します。",
    "memory": "Office共通の「F4」＝直前のアクションをもう一度リピート！",
    "level": 3,
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "wd-37",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "F5"
    ],
    "title": "「ジャンプ」ダイアログを開く（指定ページ番号へ直行 / Ctrl+Gと同じ）",
    "desc": "ページ番号やセクション、見出し、脚注番号を指定して一瞬で移動します。",
    "tip": "「50ページ目を開いて」と言われたら F5 → 50 → Enter で1秒で到達できます！",
    "memory": "Excelと共通！F5（Go＝5）で指定ページへジャンプ（Shift+F5なら直前の編集位置へ戻る）",
    "level": 2,
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210005
  },
  {
    "id": "wd-29",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "F7"
    ],
    "title": "スペルチェックと文章校正（エディター）を実行",
    "desc": "誤字脱字、表記ゆれ、文法ミスをチェックするエディターペインを開きます（Shift + F7 で類義語辞典）。",
    "tip": "提出・印刷前の最終チェックとして必ず一度押しておきたいキーです。",
    "level": 2,
    "memory": "Office共通の辞書・校正キーは「F7」（7＝直（ナオ）す、と覚える）",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210007
  },
  {
    "id": "wd-25",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "F8"
    ],
    "title": "拡張選択モード（押すたびに 単語 → 文 → 段落 → 全文 を選択）",
    "desc": "F8を2回押すと単語、3回で1文（句点まで）、4回で1段落を選択します（Shift+F8で縮小、Escで解除）。",
    "tip": "マウスドラッグで行き過ぎたり足りなかったりするストレスなく、正確に1文・1段落を選択できます！",
    "level": 2,
    "memory": "F8＝「末広がり（八）」で、押すたびに選択範囲が「単語→文→段落→全文」と広がっていく！",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210008
  },
  {
    "id": "wd-35",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "F9"
    ],
    "title": "フィールド（目次・相互参照・図表番号）を最新状態に更新",
    "desc": "選択した自動目次やページ番号参照などのフィールド情報を再計算して最新化します。",
    "tip": "Ctrl + A（全選択）→ F9 を押せば、文書内のすべての目次・相互参照を一括で最新に更新できます！",
    "level": 2,
    "memory": "Excelの再計算と同じく、Wordでも「F9」はフィールド（目次やページ番号）の最新再計算！",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210009
  },
  {
    "id": "wd-28",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "K"
    ],
    "title": "ハイパーリンクの挿入・編集",
    "desc": "選択したテキストにWebサイトのURLや別ファイル、文書内の見出しへのリンクを設定します。",
    "tip": "Wordだけでなく、Excel・PowerPoint・Outlook・Teams・Slack等でも共通です！",
    "level": 3,
    "memory": "hyperlinK（リンク）の末尾文字「K」（Lが左揃えで使われているためK！）",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410275
  },
  {
    "id": "wd-41",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "↑ / ↓"
    ],
    "title": "段落単位でカーソルを上下に高速移動（Ctrl+←/→で単語単位移動）",
    "desc": "1行ずつではなく、前の段落の先頭（↑）や次の段落の先頭（↓）へ一気にカーソルを飛ばします。",
    "tip": "Ctrl + Shift + ↑ / ↓ にすれば、段落丸ごとを一瞬で範囲選択できます！",
    "memory": "Ctrl（ワープ加速）＋ 上下矢印で「1段落ずつ飛び越える」",
    "level": 3,
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510422
  },
  {
    "id": "wd-27",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Shift",
      "F5"
    ],
    "title": "直前に編集していた場所へジャンプ",
    "desc": "文書内の別のページを見に行ったあと、先ほどまで文字を打っていた元のカーソル位置へ瞬時に戻ります。",
    "tip": "ファイルを開いた直後に Shift + F5 を押すと「前回保存した時の最後の編集位置」へ飛べます！",
    "level": 3,
    "memory": "F5（ジャンプ機能）に「Shift（過去へ逆戻り）」を足して、さっき編集していた場所へタイムスリップ！",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610305
  },
  {
    "id": "wd-33",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "Shift",
      "8 (*)"
    ],
    "title": "編集記号（スペース・改行・タブ・段落記号）の表示切り替え",
    "desc": "空白スペースやタブ、改ページ位置などの見えない記号を画面上に表示・非表示します。",
    "tip": "レイアウト崩れの原因（余計な全角スペースやタブ）を特定するときに便利です。",
    "level": 1,
    "memory": "8キーの上にある「*（アスタリスク＝星印・編集記号マーク）」を表示させるから「Ctrl+Shift+8」！",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810108
  },
  {
    "id": "wd-31",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "Shift",
      "E"
    ],
    "title": "「変更履歴の記録」のON / OFF切り替え",
    "desc": "文書の添削・赤入れを可視化する「変更履歴の記録」モードを開始または停止します。",
    "tip": "契約書レビューや原稿チェックを始める時にすぐ切り替えられます。",
    "level": 2,
    "memory": "Edit tracking（編集履歴の記録）の頭文字「E」に Ctrl + Shift",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810269
  },
  {
    "id": "wd-30",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "Shift",
      "G"
    ],
    "title": "文字数カウント（行数・単語数・段落数）を表示",
    "desc": "文書全体または選択範囲の文字数（スペース含める/含めない）・行数・ページ数を瞬時に表示します。",
    "tip": "文字数制限のあるレポートや原稿を執筆するときに一瞬で確認できます。",
    "level": 2,
    "memory": "文字数カウントの画面へ Go（または字数＝G）の「Ctrl + Shift + G」",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810271
  },
  {
    "id": "wd-26",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "Shift",
      "F8"
    ],
    "title": "矩形選択（縦方向のブロック選択）モードを開始",
    "desc": "行をまたいで縦1列（四角形ブロック状）に文字を選択します（Altを押しながらマウスドラッグでも可能）。",
    "tip": "各行の先頭についた不要な記号やスペースだけを縦にまとめて削除したい時に大活躍します。",
    "level": 1,
    "memory": "末広がりの選択「F8」に Ctrl + Shift を足して「四角い箱（矩形）選択モード」に！",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810308
  },
  {
    "id": "wd-32",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "Alt",
      "M"
    ],
    "title": "コメントを挿入",
    "desc": "選択箇所に対して校閲用の吹き出しコメントを追加します。",
    "tip": "GoogleドキュメントやExcel、PowerPointでも共通して使えるショートカットです。",
    "level": 2,
    "memory": "coMment（コメント・メモ）の「M」に Ctrl + Alt",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910277
  },
  {
    "id": "wd-34",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Ctrl",
      "Alt",
      "S"
    ],
    "title": "ドキュメント画面を上下2つに分割 / 分割解除",
    "desc": "同じWord文書の離れたページ（例: 1ページ目の目次と20ページ目の本文）を上下に並べて同時表示します。",
    "tip": "長い文書の前後の整合性を見比べながら執筆するときに非常に便利です。",
    "level": 2,
    "memory": "Split（画面を上下に分割する）の頭文字「S」に Ctrl + Alt",
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910283
  },
  {
    "id": "wd-45",
    "category": "word",
    "subcategory": "選択・移動・校閲・フィールド",
    "keys": [
      "Alt",
      "Shift",
      "D / T"
    ],
    "title": "今日の日付を挿入（Alt+Shift+D）/ 現在時刻を挿入（Alt+Shift+T）",
    "desc": "文書内に本日の日付（Date）や現在時刻（Time）を一発で挿入します（OneNoteと完全共通！）。",
    "tip": "議事録やビジネスレターの作成日を入れるときにカレンダーを見る必要がありません。",
    "memory": "Date（日付）の「D」、Time（時刻）の「T」に Alt + Shift（OneNoteと完全共通！）",
    "level": 2,
    "funcGroup": "選択・移動・校閲・フィールド",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920268
  },
  {
    "id": "wd-38",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "0 (ゼロ)"
    ],
    "title": "段落の「前（上側）」に1行分の間隔（余白）を追加 / 解除",
    "desc": "空行（Enter）を入れずに、現在の段落の上にスッキリした0.5〜1行分のスペースを空けます。",
    "tip": "もう一度 Ctrl + 0 を押すと間隔がゼロに戻ります。見出しの上を少し空けたい時に便利です。",
    "memory": "「0（ゼロ＝空っぽの隙間）」を段落の上に作ったりゼロに戻したりする「Ctrl + 0」",
    "level": 1,
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310100
  },
  {
    "id": "wd-19",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "1 / 2 / 5"
    ],
    "title": "行間を 1行（Ctrl+1）/ 2行（Ctrl+2）/ 1.5行（Ctrl+5）に変更",
    "desc": "段落の行間スペースをワンタッチで切り替えます（Ctrl + 0 で段落前の間隔を追加/削除）。",
    "tip": "文章が詰まって読みにくい時は Ctrl + 5（1.5行間隔）にすると一気に読みやすくなります。",
    "level": 2,
    "memory": "「1＝1行間隔」「2＝2行間隔」、そして「5＝1.5行間隔（1.5の末尾の5）」！",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310101
  },
  {
    "id": "wd-11",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "E"
    ],
    "title": "段落を「中央揃え」にする",
    "desc": "カーソルがある段落（または選択範囲）をページ中央に配置します。",
    "tip": "文書のタイトルや表紙を作成する時に一瞬で中央寄せできます。",
    "level": 3,
    "memory": "Center（中央）のCはコピーで使用済みのため、2文字目の「cEnter」の「E」！",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410269
  },
  {
    "id": "wd-14",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "J"
    ],
    "title": "段落を「両端揃え」にする（Ctrl+Shift+Jで均等割り付け）",
    "desc": "複数行にわたる文章の右端が綺麗に揃うよう文字間隔を調整します。Ctrl+Shift+J なら1行を幅いっぱいに均等配置します。",
    "tip": "報告書や契約書をプロっぽく整然と見せるための必須テクニックです。",
    "level": 2,
    "memory": "Justify（両端をピシッと揃える）の頭文字「J」",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410274
  },
  {
    "id": "wd-13",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "L"
    ],
    "title": "段落を「左揃え」にする",
    "desc": "中央揃えや右揃えにした段落を、通常の左揃えに戻します。",
    "tip": "Left（左）の L、Right（右）の R、Center（中央）は C がコピーなので E と覚えましょう。",
    "level": 3,
    "memory": "Left（左揃え）の頭文字「L」",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410276
  },
  {
    "id": "wd-18",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "M / Shift+M"
    ],
    "title": "段落のインデントを増やす（Ctrl+M）/ 減らす（Ctrl+Shift+M）",
    "desc": "段落全体の左端を1字分ずつ右へ字下げ（インデント）したり、元に戻したりします。",
    "tip": "2行目以降だけを字下げする「ぶら下げインデント」は Ctrl + T（解除は Ctrl + Shift + T）です！",
    "level": 2,
    "memory": "Margin（マージン・余白インデント）の頭文字「M」（Shiftを足すと逆方向へ戻す）",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410277
  },
  {
    "id": "wd-15",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "Q"
    ],
    "title": "段落書式（インデント・配置・行間）をすべてクリア",
    "desc": "Ctrl + Space が「文字の装飾」を消すのに対し、Ctrl + Q は「段落の配置やインデント設定」を初期状態に戻します。",
    "tip": "インデントや箇条書きがグチャグチャになって直せない時は Ctrl + Q で一発解決します！",
    "level": 2,
    "memory": "Quit formatting（段落設定をやめる）の「Q」（文字リセットのCtrl+Spaceと対になる段落リセット）",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410281
  },
  {
    "id": "wd-12",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "R"
    ],
    "title": "段落を「右揃え」にする",
    "desc": "カーソルがある段落を右端に揃えて配置します。",
    "tip": "ビジネス文書の日付や作成者名・結語（以上、敬具など）を右寄せする時に必須です！",
    "level": 3,
    "memory": "Right（右揃え）の頭文字「R」",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410282
  },
  {
    "id": "wd-39",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "T"
    ],
    "title": "ぶら下げインデント（2行目以降だけを右へ字下げ）を設定",
    "desc": "1行目の先頭（「※」や「注1：」など）だけを残し、2行目以降の文章を綺麗に揃えて字下げします（解除は Ctrl + Shift + T）。",
    "tip": "スペースキーで2行目の頭を揃えようとしてズレる悩みを一発で解決するプロのワザです！",
    "memory": "アルファベットの「T」の形（1行目の屋根が出ていて2行目以降の柱が引っ込んでいる形）そのまま！",
    "level": 2,
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410284
  },
  {
    "id": "wd-16",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Ctrl",
      "Enter"
    ],
    "title": "改ページを挿入",
    "desc": "現在のカーソル位置でページを区切り、次のページの先頭へ移動します。",
    "tip": "Enterキーを連打して次のページへ送ると後からズレる原因になるため、必ず Ctrl+Enter を使いましょう！",
    "level": 3,
    "memory": "Enter（改行）を「Ctrl」で強化して、行ではなく「ページそのものを改める（改ページ）」！",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510406
  },
  {
    "id": "wd-17",
    "category": "word",
    "subcategory": "段落・配置・インデント・改ページ",
    "keys": [
      "Shift",
      "Enter"
    ],
    "title": "段落を変えずに改行（行区切り）",
    "desc": "新しい段落を作らず、同じ段落・同じ箇条書きの中で次の行へ折り返します。",
    "tip": "番号付きリスト（1. 2. 3.）の途中で番号を増やさずに2行目を書きたい時に超便利です。",
    "level": 3,
    "memory": "Enter（段落改行）を「Shift」で控えめにして、「同じ段落のまま見た目だけ次の行へ折り返す」",
    "funcGroup": "段落・配置・インデント・改ページ",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610406
  },
  {
    "id": "wd-1",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "B"
    ],
    "title": "太字（ボールド）のON / OFF",
    "desc": "選択したテキストを太字にするか、太字を解除します。",
    "tip": "Bold の B。ExcelやPowerPoint、Webエディタでも共通です。",
    "level": 3,
    "memory": "Bold（ボールド・太字）の頭文字「B」",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410266
  },
  {
    "id": "wd-5",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "D"
    ],
    "title": "「フォント」詳細設定ダイアログを開く（Ctrl+Shift+Fでも可）",
    "desc": "フォント種類、サイズ、文字色、取り消し線、文字間隔、網掛けなどを設定する画面を開きます。",
    "tip": "Excelでは上のセルコピーですが、Wordではフォント画面が開きます。",
    "level": 2,
    "memory": "Design / Dialog（フォント設定ダイアログ）の「D」、または Font の「Ctrl+Shift+F」",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410268
  },
  {
    "id": "wd-4",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "I"
    ],
    "title": "斜体（イタリック）のON / OFF",
    "desc": "選択したテキストを斜め（イタリック体）にします。",
    "tip": "Italic の I。欧文の引用や変数表記に使われます。",
    "level": 2,
    "memory": "Italic（イタリック・斜体）の頭文字「I」",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410273
  },
  {
    "id": "wd-2",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "U"
    ],
    "title": "下線（アンダーライン）のON / OFF",
    "desc": "選択したテキストに下線を引くか、下線を解除します。",
    "tip": "Underline の U。空白を除いて単語だけに下線を引きたい時は Ctrl + Shift + W です。",
    "level": 3,
    "memory": "Underline（アンダーライン・下線）の頭文字「U」",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410285
  },
  {
    "id": "wd-6",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "Space"
    ],
    "title": "文字の書式（装飾）をすべてクリアして初期状態に戻す",
    "desc": "選択した文字についたフォントサイズ、色、太字、蛍光ペンなどの直接装飾を一発でリセットします。",
    "tip": "コピペで混ざってしまった変なフォントや文字サイズを瞬時に標準へ戻せる神ショートカットです。",
    "level": 3,
    "memory": "Space（まっさらな空白・透明）に戻すイメージで「Ctrl + Space」＝文字装飾リセット！",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510404
  },
  {
    "id": "wd-40",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "] / ["
    ],
    "title": "フォントサイズを「1ポイント（1pt）単位」で拡大（]）/ 縮小（[）",
    "desc": "Ctrl+Shift+>/< だと12pt→14ptのように飛びますが、Ctrl + ] / [ なら 12pt→13pt のように1pt刻みで微調整できます！",
    "tip": "「あとほんの少しだけ文字を小さくして1ページに収めたい！」という時に最高の威力を発揮します。",
    "memory": "右の閉じ括弧「]」でサイズUP、左の開き括弧「[」でサイズDOWN",
    "level": 3,
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510593
  },
  {
    "id": "wd-9",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Shift",
      "F3"
    ],
    "title": "英字の大文字・小文字を切り替え",
    "desc": "選択した英単語を「すべて大文字 → すべて小文字 → 先頭だけ大文字」の順に切り替えます。",
    "tip": "CapsLockを間違えて打ってしまった英文も打ち直す必要がありません。",
    "level": 2,
    "memory": "F3キーに「Shift（大文字/小文字のシフトキー）」を組み合わせて英字ケースを変換！",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610303
  },
  {
    "id": "wd-10",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "Shift",
      "C / V"
    ],
    "title": "書式のコピー（Ctrl+Shift+C）と貼り付け（Ctrl+Shift+V）",
    "desc": "ハケのアイコン（書式のコピー/貼り付け）と同じく、文字デザインだけを別箇所にコピー＆適用します。",
    "tip": "一度 Ctrl+Shift+C すれば、何度でも別箇所に Ctrl+Shift+V で同じデザインを連続適用できます。",
    "level": 3,
    "memory": "Ctrl+C/V（文字のコピペ）に「Shift」を足して「文字ではなく書式デザインだけをコピペ」！",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810267
  },
  {
    "id": "wd-3",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "Shift",
      "D"
    ],
    "title": "二重下線を引く",
    "desc": "選択したテキストに二重下線を引きます。",
    "tip": "契約書や見積書の合計金額欄、重要箇所の強調によく使われます。",
    "level": 2,
    "memory": "Double underline（二重下線）の頭文字「D」に Ctrl + Shift",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810268
  },
  {
    "id": "wd-43",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "Shift",
      "W"
    ],
    "title": "空白スペースを除き「単語（文字がある部分）だけ」に下線を引く",
    "desc": "英文やスペース区切りの文字列で、単語と単語の間の空白には下線を引かず文字部分だけに下線を引きます。",
    "tip": "通常の Ctrl + U（全体下線）・Ctrl + Shift + D（二重下線）と並ぶ下線3兄弟です。",
    "memory": "Word only underline（単語だけに下線）の頭文字「W」に Ctrl + Shift",
    "level": 1,
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810287
  },
  {
    "id": "wd-8",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "Shift",
      "+ / Ctrl + ="
    ],
    "title": "上付き文字（Ctrl+Shift++）/ 下付き文字（Ctrl+=）",
    "desc": "注釈番号（¹ ²）や平方メートル（m²）の上付き文字、化学式（H₂O）の下付き文字に切り替えます。",
    "tip": "もう一度押すと通常の文字サイズに戻ります。",
    "level": 1,
    "memory": "「＋（上へ持ち上げる＝上付き）」、「＝（下のラインに揃える＝下付き）」",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810543
  },
  {
    "id": "wd-7",
    "category": "word",
    "subcategory": "文字装飾・フォント",
    "keys": [
      "Ctrl",
      "Shift",
      "> / <"
    ],
    "title": "フォントサイズを段階的に拡大（>）/ 縮小（<）",
    "desc": "選択したテキストの文字サイズを規定の段階（10.5→11→12→14...）で大きくまたは小さくします。",
    "tip": "Ctrl + ] / [ を使うと、より細かく「1ポイント（1pt）単位」で拡大・縮小できます！",
    "level": 3,
    "memory": "不等号の記号「>（大なり＝大きく）」「<（小なり＝小さく）」の見た目そのまま！",
    "funcGroup": "文字装飾・フォント",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810562
  },
  {
    "id": "wd-21",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Ctrl",
      "Shift",
      "L"
    ],
    "title": "箇条書き（・）を開始",
    "desc": "現在の段落を中黒（・）付きの箇条書きリストに変換します。",
    "tip": "Tabキーで階層を下げ、Shift + Tab で階層を上げられます。",
    "level": 2,
    "memory": "List（箇条書きリスト）の頭文字「L」に Ctrl + Shift",
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810276
  },
  {
    "id": "wd-42",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Ctrl",
      "Shift",
      "N"
    ],
    "title": "選択行のスタイルを「標準（本文）」に戻す",
    "desc": "見出しスタイルや箇条書きになった段落を、通常の「標準」本文スタイルに一発で戻します。",
    "tip": "Ctrl + Alt + 1〜3（見出し適用）とセットで覚えると文書構造の切り替えが自由自在になります。",
    "memory": "Normal style（ノーマル・標準スタイル）の頭文字「N」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810278
  },
  {
    "id": "wd-23",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Ctrl",
      "Shift",
      "Enter"
    ],
    "title": "表を上下に分割する / 段組み区切りを挿入",
    "desc": "Wordの表（テーブル）の中で押すと、現在の行の上で表を2つにパカッと分割します。",
    "tip": "大きな表を2つに切り分けたい時、コピペ不要で1秒で分割できる裏ワザです。",
    "level": 2,
    "memory": "Ctrl+Enter（改ページ）にさらに「Shift」を足して「表（テーブル）を上下にパカッと割る」！",
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810406
  },
  {
    "id": "wd-20",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Ctrl",
      "Alt",
      "1 / 2 / 3"
    ],
    "title": "見出し1 / 見出し2 / 見出し3 スタイルを適用",
    "desc": "現在の行にWord標準の「見出し1〜3」スタイルを一発で設定します（本文に戻す時は Ctrl + Shift + N）。",
    "tip": "見出しスタイルを使うと、左側のナビゲーション目次や自動目次生成がそのまま使えて一石三鳥です。",
    "level": 3,
    "memory": "見出しレベルの数字「1・2・3」に Ctrl + Alt を合わせるだけ！",
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910101
  },
  {
    "id": "wd-24",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Ctrl",
      "Alt",
      "F / D"
    ],
    "title": "脚注を挿入（Ctrl+Alt+F）/ 文末脚注を挿入（Ctrl+Alt+D）",
    "desc": "ページ下部に注釈を入れる「脚注」や、文書末尾にまとめる「文末脚注」を自動採番で挿入します。",
    "tip": "論文・レポート・調査報告書の執筆時にリボンを探す手間がなくなります。",
    "level": 1,
    "memory": "Footnote（脚注）の「F」、EnDnote（文末脚注）の「D」に Ctrl + Alt",
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910270
  },
  {
    "id": "wd-22",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Alt",
      "Shift",
      "↑ / ↓"
    ],
    "title": "段落（または表の行）を上下に入れ替え移動",
    "desc": "カーソルがある段落や箇条書き、表の行を切り取り＆貼り付けなしでそのまま上下へスライド移動します。",
    "tip": "見出し行で実行すると配下の本文ごと移動でき、Wordの表の中で実行すると行の順番を綺麗に入れ替えられます！",
    "level": 3,
    "memory": "Alt + Shift を押しながら「↑ / ↓」で段落や行を物理的にグイッと上下へ持ち上げて入れ替える！",
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920422
  },
  {
    "id": "wd-44",
    "category": "word",
    "subcategory": "見出し・スタイル・脚注・表操作",
    "keys": [
      "Alt",
      "Shift",
      "← / →"
    ],
    "title": "見出しレベルや箇条書きの階層を1段階上げる（←）/ 下げる（→）",
    "desc": "見出し2を見出し1に昇格（←）させたり、見出し1を見出し2に降格（→）させたりします。",
    "tip": "Alt + Shift + ↑/↓（上下の順番入れ替え）と組み合わせると、アウトライン構成を十字キーだけで自在に操れます！",
    "memory": "Alt + Shift + 矢印の「左右（←で親階層へ昇格 / →で子階層へ降格）」",
    "level": 2,
    "funcGroup": "見出し・スタイル・脚注・表操作",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920426
  },
  {
    "id": "pp-15",
    "category": "powerpoint",
    "subcategory": "スライドショー・発表者ツール",
    "keys": [
      "B / W"
    ],
    "title": "スライドショー中に画面を「真っ黒（B）」または「真っ白（W）」にする",
    "desc": "発表中、一時的にスライドを隠して聴衆の視線を話し手に集中させます（もう一度押すと復帰）。",
    "tip": "Black の B、White の W。カンマ（,）とピリオド（.）でも同じ動作になります。",
    "level": 2,
    "memory": "Black（黒画面）の頭文字「B」、White（白画面）の頭文字「W」！",
    "funcGroup": "スライドショー・発表者ツール",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110266
  },
  {
    "id": "pp-14",
    "category": "powerpoint",
    "subcategory": "スライドショー・発表者ツール",
    "keys": [
      "スライド番号",
      "Enter"
    ],
    "title": "スライドショー中に指定したページ番号へ直接ジャンプ",
    "desc": "発表中に数字キー（例: `1` `5`）を押して Enter を押すと、途中のページを飛ばして15ページ目へ一瞬で移動します。",
    "tip": "質疑応答で「〇ページの資料を見せてください」と言われた時にスマートに即出しできます！",
    "level": 2,
    "memory": "テレビのリモコンと同じ！「ページ番号の数字 ＋ Enter」でそのスライドへ直行",
    "funcGroup": "スライドショー・発表者ツール",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 122973
  },
  {
    "id": "pp-11",
    "category": "powerpoint",
    "subcategory": "スライドショー・発表者ツール",
    "keys": [
      "F5"
    ],
    "title": "最初のスライドからスライドショーを開始",
    "desc": "1枚目の表紙スライドから全画面プレゼンテーションを開始します（終了は Esc）。",
    "tip": "本番のプレゼン開始時に使います。",
    "level": 3,
    "memory": "プレゼン開始の号砲は真ん中の「F5」（Go＝5 と覚える）！",
    "funcGroup": "スライドショー・発表者ツール",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210005
  },
  {
    "id": "pp-16",
    "category": "powerpoint",
    "subcategory": "スライドショー・発表者ツール",
    "keys": [
      "Ctrl",
      "L / P / E"
    ],
    "title": "発表中にレーザーポインター（Ctrl+L）・ペン（Ctrl+P）に切り替え",
    "desc": "スライドショー中のマウスカーソルを赤いレーザーポインター（Ctrl+L）や書き込みペン（Ctrl+P）に変えます。",
    "tip": "ペンで書き込んだ線をすべて消すには E（Eraser）、通常の矢印に戻すには Ctrl + A を押します。",
    "level": 2,
    "memory": "Laser pointer（レーザー）の「L」、Pen（ペン）の「P」、Eraser（消しゴム）の「E」、Arrow（矢印）の「A」！",
    "funcGroup": "スライドショー・発表者ツール",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410276
  },
  {
    "id": "pp-12",
    "category": "powerpoint",
    "subcategory": "スライドショー・発表者ツール",
    "keys": [
      "Shift",
      "F5"
    ],
    "title": "現在開いているスライドからスライドショーを開始",
    "desc": "1枚目に戻らず、今編集している途中のページから即座にスライドショー表示します。",
    "tip": "アニメーションの確認や、途中のページから発表を再開したい時に必須です！",
    "level": 3,
    "memory": "F5（最初から開始）に「Shift」を足して「今見ているこのページからスライドショー開始」！",
    "funcGroup": "スライドショー・発表者ツール",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610305
  },
  {
    "id": "pp-13",
    "category": "powerpoint",
    "subcategory": "スライドショー・発表者ツール",
    "keys": [
      "Alt",
      "F5"
    ],
    "title": "外部モニターがなくても「発表者ツール」画面を起動",
    "desc": "プロジェクターに繋いでいなくても、手元でノートやタイマーが見える「発表者ツール」画面をテスト起動します。",
    "tip": "本番前のリハーサルや時間配分の練習に最適です。",
    "level": 2,
    "memory": "F5（スライドショー）に「Alt（もうひとつの画面＝発表者ツール）」をプラス！",
    "funcGroup": "スライドショー・発表者ツール",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710305
  },
  {
    "id": "pp-17",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Esc"
    ],
    "title": "図形内の文字編集から「図形枠全体の選択」へ戻る / スライドショー終了",
    "desc": "テキストボックス内で文字を打っている最中に Esc を押すと、枠全体を選択した状態に切り替わります。",
    "tip": "文字を打った直後に「Esc → Ctrl+Shift+>（文字拡大）」や「Esc → 矢印キー（図形移動）」へ繋げるのがプロの技です！",
    "memory": "Escape（文字入力状態から1段階外側の「枠」へ抜ける）の「Esc」（F2でも切替可）",
    "level": 3,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110400
  },
  {
    "id": "pp-10",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "F2"
    ],
    "title": "図形内の「文字編集モード」と「図形枠の選択モード」を切り替え",
    "desc": "図形を選択してF2を押すと中の文字編集に入り、文字編集中にF2（またはEsc）を押すと図形全体の選択に戻ります。",
    "tip": "図形全体のフォントサイズを一括変更したい時は、F2で枠選択にしてから Ctrl+Shift+> を押すと一瞬です！",
    "level": 3,
    "memory": "Excel（セル編集）・エクスプローラー（名前編集）と同じく、パワポでも「F2」で図形内の文字編集！",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210002
  },
  {
    "id": "pp-18",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "F4"
    ],
    "title": "直前の操作（図形の色変更・サイズ変更・整列など）を繰り返す",
    "desc": "1つの図形で行った色変更や枠線設定を、別の図形を選んで F4 を押すだけで次々とコピー適用します。",
    "tip": "書式のコピー（Ctrl+Shift+C/V）と並んで、スライド作業を爆速にする必須キーです。",
    "memory": "Office共通の「F4」＝直前のアクションをそのままリピート！",
    "level": 3,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "pp-19",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "B / I / U"
    ],
    "title": "太字（Ctrl+B）・斜体（Ctrl+I）・下線（Ctrl+U）",
    "desc": "選択したテキストや図形内の文字を太字・斜体・下線付きにします。",
    "tip": "Esc（またはF2）で図形枠全体を選択してから押せば、中の文字すべてを一括で太字にできます。",
    "memory": "Bold（太字）の B、Italic（斜体）の I、Underline（下線）の U",
    "level": 3,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410266
  },
  {
    "id": "pp-20",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "E / L / R"
    ],
    "title": "テキストを中央揃え（Ctrl+E）・左揃え（Ctrl+L）・右揃え（Ctrl+R）にする",
    "desc": "図形内やテキストボックス内の文字配置をワンタッチで中央・左・右に揃えます。",
    "tip": "Wordと完全共通の段落配置ショートカットです。",
    "memory": "cEnter（中央）の E、Left（左）の L、Right（右）の R",
    "level": 3,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410269
  },
  {
    "id": "pp-4",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "G"
    ],
    "title": "選択した複数の図形を「グループ化」する",
    "desc": "複数の図形やテキストボックスを1つのグループにまとめ、一緒に移動・リサイズできるようにします。",
    "tip": "Group の G。配置が決まった図形をロック感覚でまとめておくのに必須です。",
    "level": 3,
    "memory": "Group（グループ化する）の頭文字「G」",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410271
  },
  {
    "id": "pp-21",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "] / ["
    ],
    "title": "図形の重なり順を「1段階だけ前面へ（]）」/「1段階だけ背面へ（[）」移動",
    "desc": "Ctrl+Shift+] / [ が「最前面・最背面」なのに対し、Shiftなしの Ctrl + ] / [ は重なりを1枚ずつ前後させます。",
    "tip": "3枚以上重なった図形の真ん中に挟みたい時に重宝します。",
    "memory": "閉じ括弧「]」で1歩前へ、開き括弧「[」で1歩後ろへ（Shiftを足すと一番端まで移動）",
    "level": 2,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510593
  },
  {
    "id": "pp-22",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Shift",
      "F9"
    ],
    "title": "スライド上の「グリッド線（方眼目盛り）」の表示 / 非表示を切り替え",
    "desc": "図形を綺麗に並べるための点線のマス目（グリッド線）を画面上に表示・非表示します（Alt + F9 ならガイド線）。",
    "tip": "印刷やスライドショーには写らない補助線なので、レイアウト調整時に気軽に出し入れできます。",
    "memory": "F9（区切りの「く」＝グリッド線）に Shift（補助線表示）",
    "level": 2,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610309
  },
  {
    "id": "pp-23",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Shift",
      "ドラッグ"
    ],
    "title": "縦横比を保ったまま図形・画像を拡大縮小 / 水平・垂直に真っすぐ移動",
    "desc": "角をShift+ドラッグすると縦横比が崩れずにリサイズでき、図形本体をShift+ドラッグすると真横・真下にだけ移動します。",
    "tip": "顔写真や会社ロゴが縦長・横長に潰れてしまうミスを100%防げる必須テクニックです！",
    "memory": "Shift ＝「比率や方向をカチッと固定するレールキー」",
    "level": 3,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 622989
  },
  {
    "id": "pp-9",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Alt",
      "H → G → A"
    ],
    "title": "図形の「配置・整列」メニューを呼び出す",
    "desc": "複数選択した図形の「左揃え(L)」「上揃え(T)」「左右に整列(H)」「上下に整列(V)」を実行します。",
    "tip": "クイックアクセスツールバーに配置ボタンを入れておけば Alt + 数字（1〜4等）でさらに1秒で整列できます。",
    "level": 2,
    "memory": "Alt → Home(H) → Arrange(G：配置) → Align(A：整列) のリボン順",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720272
  },
  {
    "id": "pp-7",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "Shift",
      "C / V"
    ],
    "title": "図形や文字の「デザイン（色・枠線・フォント）」だけをコピー＆適用",
    "desc": "ある図形の色や枠線・文字スタイルを Ctrl+Shift+C で記憶し、別の図形に Ctrl+Shift+V で一発適用します。",
    "tip": "スライド内の図形デザインを統一するとき、1つずつ色を変える手間がゼロになります！",
    "level": 3,
    "memory": "Wordと完全共通！Ctrl+C/V に「Shift」を足して「図形の色・枠線・フォント書式だけをコピペ」",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810267
  },
  {
    "id": "pp-5",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "Shift",
      "G"
    ],
    "title": "図形のグループ化を解除する",
    "desc": "グループ化されたオブジェクトを元の個別図形にバラします。",
    "tip": "一部だけ位置を直したい時に Ctrl+Shift+G で解除し、修正後にまた Ctrl+G でまとめ直せます。",
    "level": 3,
    "memory": "Ctrl+G（グループ化）に「Shift（逆動作）」を足してグループ化解除！",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810271
  },
  {
    "id": "pp-24",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "Shift",
      "> / <"
    ],
    "title": "テキストのフォントサイズを段階的に拡大（>）/ 縮小（<）",
    "desc": "選択した文字や図形内テキストのサイズを大きく（>）または小さく（<）します（Wordと完全共通）。",
    "tip": "F2キーで図形枠を選択してから押すと、枠内の文字をまとめてサイズ変更できて超快適です！",
    "memory": "不等号「>（大なり＝拡大）」「<（小なり＝縮小）」の記号そのまま！",
    "level": 3,
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810562
  },
  {
    "id": "pp-8",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "Shift",
      "] / ["
    ],
    "title": "図形を「最前面へ移動（Ctrl+Shift+]）」/「最背面へ移動（Ctrl+Shift+[）」",
    "desc": "重なっている図形の前後順序を一発で一番前または一番後ろに変更します（Ctrl + ] / [ なら1段階ずつ移動）。",
    "tip": "日本語キーボードでは「]（む）」「[（゜）」キーにあたります。",
    "level": 2,
    "memory": "閉じ括弧「]（右＝前へ出す）」と開き括弧「[（左＝奥へ引っ込める）」に Shift で最前面・最背面！",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810593
  },
  {
    "id": "pp-6",
    "category": "powerpoint",
    "subcategory": "図形操作・グループ化・整列",
    "keys": [
      "Ctrl",
      "Shift",
      "ドラッグ"
    ],
    "title": "図形を水平・垂直に真っすぐ保ったまま複製コピー",
    "desc": "Ctrl（複製）とShift（水平・垂直固定）を押しながら図形をドラッグし、ズレずに真横・真下にコピーします。",
    "tip": "パワポ資料作成のプロが最頻出で使う、最も美しく速い図形量産テクニックです！",
    "level": 3,
    "memory": "Ctrl（コピー）＋ Shift（真っすぐレール固定）＋ ドラッグの黄金コンビ！",
    "funcGroup": "図形操作・グループ化・整列",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 822989
  },
  {
    "id": "pp-2",
    "category": "powerpoint",
    "subcategory": "スライド管理・複製・作成",
    "keys": [
      "Ctrl",
      "D"
    ],
    "title": "図形・テキストボックス・スライドをその場に「複製」",
    "desc": "コピー（Ctrl+C）と貼り付け（Ctrl+V）を1回で同時に行い、選択中の図形やスライドを複製します。",
    "tip": "複製した図形を適切な間隔に動かしてから再び Ctrl + D を連打すると、等間隔で図形を綺麗に量産できます！",
    "level": 3,
    "memory": "Duplicate（複製する）の頭文字「D」",
    "funcGroup": "スライド管理・複製・作成",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410268
  },
  {
    "id": "pp-1",
    "category": "powerpoint",
    "subcategory": "スライド管理・複製・作成",
    "keys": [
      "Ctrl",
      "M"
    ],
    "title": "新しいスライドを追加する",
    "desc": "現在選択しているスライドの直後に、新しいスライドを1枚挿入します。",
    "tip": "Ctrl + N は「新しいプレゼンテーションファイル作成」なので、スライド追加は Ctrl + M と覚えましょう！",
    "level": 3,
    "memory": "Make slide（スライドを作る）または More slide（もう1枚追加）の「M」！（Nは新規ファイル）",
    "funcGroup": "スライド管理・複製・作成",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410277
  },
  {
    "id": "pp-3",
    "category": "powerpoint",
    "subcategory": "スライド管理・複製・作成",
    "keys": [
      "Alt",
      "Shift",
      "↑ / ↓"
    ],
    "title": "箇条書きの行（または左欄のスライド順序）を上下に入れ替え",
    "desc": "テキストボックス内の箇条書き項目や、スライド一覧の順番をドラッグなしで上下に移動します。",
    "tip": "Wordと共通の操作感でアウトラインの構成を素早く入れ替えられます。",
    "level": 2,
    "memory": "Word・OneNoteと完全共通！「Alt + Shift + ↑/↓」で行やスライドの順番を上下に入れ替え",
    "funcGroup": "スライド管理・複製・作成",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920422
  },
  {
    "id": "ol-13",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Backspace"
    ],
    "title": "選択したメールを「アーカイブ」フォルダへ一発移動",
    "desc": "削除はせずに受信トレイから片付けたいメールを、ワンタッチでアーカイブフォルダへ退避します。",
    "tip": "Deleteキーは「削除済みアイテム」行き、Backspaceは「アーカイブ」行きと使い分けられます。",
    "level": 2,
    "memory": "Delete（ゴミ箱へ削除）の手前にある「Backspace」で、消さずに「アーカイブ倉庫へ後退させる」！",
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110408
  },
  {
    "id": "ol-21",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Delete"
    ],
    "title": "選択したメールや予定を削除する（Ctrl + D でも同じ）",
    "desc": "不要なメールを「削除済みアイテム」フォルダへ移動します（Shift + Delete で完全削除）。",
    "tip": "左手だけで操作したい時は Ctrl + D でも同じように削除できます。",
    "memory": "Delete（削除）キー、または Delete の頭文字「Ctrl + D」",
    "level": 3,
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110410
  },
  {
    "id": "ol-11",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Insert"
    ],
    "title": "クイックフラグ（赤い旗マーク）の付与 / 完了チェック切替",
    "desc": "選択中のメールに要対応のフラグ（旗）を立てたり、完了チェックに切り替えたりします。",
    "tip": "期限日時やアラームを細かく指定してフラグを立てたい時は Ctrl + Shift + G を押します。",
    "level": 2,
    "memory": "Insert（フラグを差し込む）キーで赤い旗マークをON/OFF",
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110412
  },
  {
    "id": "ol-9",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Ctrl",
      "Q"
    ],
    "title": "選択したメールを「開封済み（既読）」にする",
    "desc": "未読のメールをワンタッチで既読状態にします（複数選択して一括既読も可能）。",
    "tip": "メルマガや通知メールを確認してどんどん既読処理する時に圧倒的に速いです！",
    "level": 3,
    "memory": "Quick read（クイック既読処理）の「Q」（未読のUと合わせて「Qで既読、Uで未読」とセット暗記）",
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410281
  },
  {
    "id": "ol-10",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Ctrl",
      "U"
    ],
    "title": "選択したメールを「未開封（未読）」に戻す",
    "desc": "一度開いたメールを、あとで対応するために再び未読（太字）状態に戻します。",
    "tip": "Unread（未読）の U。Ctrl + Q（既読）とセットで覚えると受信トレイ整理が劇的に速くなります。",
    "level": 3,
    "memory": "Unread（未読にする）の頭文字「U」",
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410285
  },
  {
    "id": "ol-24",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Ctrl",
      "Y"
    ],
    "title": "「フォルダーへ移動（表示切り替え）」ダイアログを開く",
    "desc": "作成済みのメールフォルダ一覧ポップアップを開き、見たいフォルダへキーボードだけでジャンプします。",
    "tip": "メール自体を別フォルダへ移すのは Ctrl+Shift+V、自分が別フォルダを見に行くのは Ctrl+Y です。",
    "memory": "フォルダツリー（枝分かれした木＝「Y」の形）を選んで見に行く「Ctrl + Y」",
    "level": 2,
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410289
  },
  {
    "id": "ol-27",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Ctrl",
      "Shift",
      "G"
    ],
    "title": "メールに期限日時・アラーム通知付きの「フラグ」を詳細設定",
    "desc": "単なる旗マーク（Insert）だけでなく、「明日の10時にポップアップ通知する」といったリマインダーを設定します。",
    "tip": "絶対に忘れられない重要メールにアラームを仕掛けておくのに最適です。",
    "memory": "flaG（フラグ）の末尾文字「G」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810271
  },
  {
    "id": "ol-14",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Ctrl",
      "Shift",
      "I"
    ],
    "title": "どのフォルダにいても一瞬で「受信トレイ（Inbox）」へ戻る",
    "desc": "別フォルダや検索結果を見たあと、メインの受信トレイへ一発でジャンプします（Ctrl+Shift+Oで送信トレイ）。",
    "tip": "Inbox の I と覚えると忘れません。",
    "level": 2,
    "memory": "Inbox（受信トレイ）の頭文字「I」に Ctrl + Shift（Outbox＝送信トレイは O）",
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810273
  },
  {
    "id": "ol-12",
    "category": "outlook",
    "subcategory": "メール整理・既読/未読・フラグ",
    "keys": [
      "Ctrl",
      "Shift",
      "V"
    ],
    "title": "選択したメールを指定フォルダーへ移動する",
    "desc": "フォルダー選択ダイアログを開き、矢印キーやフォルダ名頭文字で振り分け先を選んでメールを移動します。",
    "tip": "マウスで左側の狭いフォルダツリーへドラッグして誤爆するストレスがなくなります！",
    "level": 2,
    "memory": "Ctrl+V（貼り付け＝移動先へ置く）に Shift を足して「指定フォルダへメールを移動」",
    "funcGroup": "メール整理・既読/未読・フラグ",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810286
  },
  {
    "id": "ol-22",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "F4"
    ],
    "title": "現在開いている「メール本文の中」からキーワードを検索",
    "desc": "Ctrl + E（またはF3）がメール一覧全体の検索なのに対し、F4 は今開いている長文メール本文内の文字検索を行います！",
    "tip": "「Outlookで Ctrl+F を押したら転送画面になってしまった！」という時は F4 を押せば本文検索ができます！",
    "memory": "Outlookでは Ctrl+F が転送（Forward）なので、4（Findの4文字）の「F4」で本文内検索！",
    "level": 2,
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "ol-15",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "1 / 2 / 3 / 4"
    ],
    "title": "メール（1）・予定表（2）・連絡先（3）・タスク（4）を瞬時に切り替え",
    "desc": "Ctrl + 1 でメール画面、Ctrl + 2 でカレンダー（予定表）画面へ1秒で切り替えます。",
    "tip": "メールを書きながら「来週の空き日程いつだっけ？」と予定表（Ctrl+2）を見る時に毎日使えます！",
    "level": 3,
    "memory": "左下のナビゲーションアイコンの並び順そのまま！「1＝メール、2＝予定表、3＝連絡先、4＝タスク」",
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310101
  },
  {
    "id": "ol-16",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "E"
    ],
    "title": "検索ボックスに移動してメール・予定を検索（F3でも同じ）",
    "desc": "上部の検索窓にカーソルを移動し、差出人やキーワードでメールや予定を即座に検索します。",
    "tip": "さらに細かい条件（添付ファイルの有無や期間など）で探す「高度な検索」は Ctrl + Shift + F です。",
    "level": 3,
    "memory": "Ctrl+F が転送（Forward）で使われているため、Explore（探す）の「Ctrl + E」で検索窓へ！",
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410269
  },
  {
    "id": "ol-19",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "G"
    ],
    "title": "予定表で「指定した日付」へ一気にジャンプ",
    "desc": "カレンダー表示中に日付入力ダイアログを開き、数ヶ月先や過去の日付へ一瞬で移動します。",
    "tip": "「今日」の予定へすぐ戻りたい時は `Alt → H → O → D`（またはホームタブの今日）で戻れます。",
    "level": 2,
    "memory": "Go to date（指定した日付へ行く）の頭文字「G」",
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410271
  },
  {
    "id": "ol-17",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "A"
    ],
    "title": "新しい「予定（アポイントメント）」を作成",
    "desc": "メール画面を見ていても、自分のカレンダーに新しい予定を登録するウィンドウを直接開きます。",
    "tip": "Appointment（予定）の A。他の参加者を招待する「会議」を作る時は Ctrl + Shift + Q です！",
    "level": 3,
    "memory": "Appointment（アポ・予定）の頭文字「A」に Ctrl + Shift",
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810265
  },
  {
    "id": "ol-25",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "B"
    ],
    "title": "アドレス帳（連絡先検索ウィンドウ）を開く",
    "desc": "社内のメンバーや取引先のメールアドレス・部署を検索する「アドレス帳」画面を直接開きます。",
    "tip": "Address Book（アドレスブック）をどの画面からでも1秒で呼び出せます。",
    "memory": "address Book（アドレス帳・名簿本）の頭文字「B」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810266
  },
  {
    "id": "ol-26",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "F"
    ],
    "title": "条件を細かく指定する「高度な検索」ウィンドウを開く",
    "desc": "差出人、期間、添付ファイルの有無、重要度などを細かく指定してメールを探し出します。",
    "tip": "通常の検索（Ctrl+E）で見つからない昔のメールを掘り起こす時に重宝します。",
    "memory": "Find（検索）の「F」に Ctrl + Shift で「高度な検索」を起動（Adobe PDFと完全共通！）",
    "level": 2,
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810270
  },
  {
    "id": "ol-28",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "K"
    ],
    "title": "どの画面からでも新しい「タスク（ToDo）」を作成する",
    "desc": "メールを読みながら思いついた作業タスクを、その場でToDoリストに追加登録します。",
    "tip": "tasK（タスク）の末尾文字 K と覚えましょう。",
    "memory": "tasK（タスク）の末尾文字「K」に Ctrl + Shift",
    "level": 1,
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810275
  },
  {
    "id": "ol-18",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "Q"
    ],
    "title": "新しい「会議出席依頼」を作成",
    "desc": "参加メンバーを招待してTeams会議や会議室を予約する「会議出席依頼」作成画面をどこからでも開きます。",
    "tip": "スケジュール調整の起点になる重要ショートカットです。",
    "level": 3,
    "memory": "会議リクエスト（reQuest）の「Q」に Ctrl + Shift（予定表のCtrl+Shift+Aのすぐ左上！）",
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810281
  },
  {
    "id": "ol-20",
    "category": "outlook",
    "subcategory": "画面切替・予定表・検索",
    "keys": [
      "Ctrl",
      "Alt",
      "1 / 2 / 3 / 4"
    ],
    "title": "予定表の表示を「日(1) / 稼働日(2) / 週(3) / 月(4)」に切り替え",
    "desc": "カレンダーの表示粒度を1日表示、月〜金の稼働日表示、1週間表示、月間カレンダー表示にワンタッチで変えます。",
    "tip": "さらに `Alt + 数字(1〜9)` を押すと「好きな日数分（例: Alt+3で3日間）」のカレンダー表示にもできます！",
    "level": 2,
    "memory": "1＝1日、2＝稼働日、3＝週、4＝月 と期間が順番に広がる「Ctrl + Alt + 1〜4」",
    "funcGroup": "画面切替・予定表・検索",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910101
  },
  {
    "id": "ol-7",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "F9"
    ],
    "title": "すべてのフォルダの「送受信」を今すぐ実行（Ctrl+Mでも同じ）",
    "desc": "サーバーに新着メールが届いていないか即座に手動チェック＆送受信を行います。",
    "tip": "相手から「今メール送りました」と言われた時にすぐ受信確認できます。",
    "level": 2,
    "memory": "更新・再計算の「F9」でメールサーバーと今すぐ送受信！",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210009
  },
  {
    "id": "ol-5",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "F"
    ],
    "title": "メールを「転送」する",
    "desc": "選択中のメールを別の人へ転送する作成画面を開きます（添付ファイルもそのまま引き継がれます）。",
    "tip": "Forward（転送）の F。Outlookで文字検索したい時は F4 または Ctrl + E を使います。",
    "level": 3,
    "memory": "Forward（前へ転送する）の頭文字「F」",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410270
  },
  {
    "id": "ol-8",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "K"
    ],
    "title": "宛先（To/CC）の名前チェック補完 / 本文中のリンク挿入",
    "desc": "宛先欄に苗字やアドレスの一部を打って Ctrl + K を押すと、アドレス帳から正式な連絡先に一発変換します。",
    "tip": "本文編集中に押した場合は、選択文字へのハイパーリンク挿入として動作します。",
    "level": 2,
    "memory": "checK names（宛先名のチェック補完）＆ linK（リンク）の「K」",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410275
  },
  {
    "id": "ol-23",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "N"
    ],
    "title": "現在の画面に応じた新規作成（メール画面なら新規メール / 予定表なら新規予定）",
    "desc": "メール表示中は新しいメール、予定表表示中は新しい予定、連絡先表示中は新しい連絡先を作成します。",
    "tip": "どの画面にいても強制的にメールを作りたい時は Ctrl + Shift + M を使います。",
    "memory": "New（新しく作る）の頭文字「N」",
    "level": 3,
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410278
  },
  {
    "id": "ol-3",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "R"
    ],
    "title": "差出人に「返信」する",
    "desc": "選択中のメールの送信者（1人）に対して返信メールを作成します。",
    "tip": "Reply の R。全員に返信したい場合は Shift を足して Ctrl + Shift + R を使いましょう！",
    "level": 3,
    "memory": "Reply（返信する）の頭文字「R」",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410282
  },
  {
    "id": "ol-2",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "Enter"
    ],
    "title": "作成中のメールを送信する（Alt + S でも同じ）",
    "desc": "書き終わったメールを即座に送信します。",
    "tip": "うっかり誤送信を防ぐため、初回確認ダイアログで「送信する」を選べば次回から爆速送信できます。",
    "level": 3,
    "memory": "確定の「Enter」に Ctrl を添えて「ヨシ、送信！」（または Send の Alt + S）",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510406
  },
  {
    "id": "ol-1",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "Shift",
      "M"
    ],
    "title": "どの画面からでも「新しいメール」を作成（メール画面ではCtrl+N）",
    "desc": "予定表や連絡先を開いている時でも、一発で新規メール作成ウィンドウを立ち上げます。",
    "tip": "Message の M。メール画面を表示中ならシンプルな Ctrl + N でも新規メールが作れます。",
    "level": 3,
    "memory": "Mail / Message（メールメッセージ）の「M」に Ctrl + Shift（メール画面なら New の Ctrl+N でもOK）",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810277
  },
  {
    "id": "ol-4",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "Shift",
      "R"
    ],
    "title": "「全員に返信」する（To・CCの全員へ返信）",
    "desc": "差出人だけでなく、宛先（To）やCCに入っているメンバー全員に返信メールを作成します。",
    "tip": "ビジネスメールで最頻出のショートカットです。単なる Ctrl+R（個別に返信）との使い分けが重要です。",
    "level": 3,
    "memory": "Ctrl+R（返信）に「Shift（対象を全員に広げる）」を足して「全員に返信」！",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810282
  },
  {
    "id": "ol-6",
    "category": "outlook",
    "subcategory": "メール作成・返信・送受信",
    "keys": [
      "Ctrl",
      "Alt",
      "R"
    ],
    "title": "受信メールに対して「会議出席依頼」で全員に返信する",
    "desc": "メールの件名・本文・宛先メンバーをすべて引き継いだ状態で、そのまま日程調整の会議招待を作成します。",
    "tip": "「この件、一度打ち合わせしましょう」となった時に宛先を入れ直す手間がゼロになる神ワザです！",
    "level": 2,
    "memory": "Reply（R）に Ctrl + Alt を合わせて「メールではなく会議招待で全員に返信」！",
    "funcGroup": "メール作成・返信・送受信",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910282
  },
  {
    "id": "on-10",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "文字入力",
      "Tab"
    ],
    "title": "文字を打ってTabキーを押すだけでその場に「表（テーブル）」を作成",
    "desc": "ノート上で文字を入力した直後に Tab キーを押すと、自動的に枠線付きの2列の表に変換されます！",
    "tip": "さらに Tab を押せば3列、4列と増え、右端のセルで Enter を押せば新しい行が下に追加されます。",
    "level": 3,
    "memory": "Table（表）の「Tab」キー！文字を打ってTabを押すだけで即座に表になる直感操作",
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 136491
  },
  {
    "id": "on-11",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "Ctrl",
      "Enter"
    ],
    "title": "表（テーブル）の現在の行の「すぐ下」に新しい行を挿入",
    "desc": "OneNoteの表の中で、途中の行でも一発で下に新しい空白行を追加します（表内のセル内改行は Shift + Enter）。",
    "tip": "Wordの表と異なり、OneNoteの表では Enter だけでセル内改行、Ctrl + Enter で行追加になります。",
    "level": 2,
    "memory": "表の中で「Ctrl + Enter」を押すと、現在の行のすぐ下に新しい行を追加！",
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510406
  },
  {
    "id": "on-14",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "Ctrl",
      ". (ピリオド) / / (スラッシュ)"
    ],
    "title": "箇条書きリストを開始（Ctrl+.）/ 番号付きリストを開始（Ctrl+/）",
    "desc": "現在の行を中黒（・）の箇条書き（Ctrl + .）または連番リスト（Ctrl + /）に変換します。",
    "tip": "見出し1〜6スタイルは Word と同じく Ctrl + Alt + 1〜6 で一発適用できます！",
    "level": 2,
    "memory": "箇条書きの中黒「・」に見た目がそっくりな「.（ピリオド）」、番号の区切り線「/（スラッシュ）」！",
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510546
  },
  {
    "id": "on-19",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "Ctrl",
      "Shift",
      "N"
    ],
    "title": "見出しスタイル等を解除して「標準テキスト」に戻す",
    "desc": "見出し1〜6（Ctrl+Alt+1〜6）を設定した行を、通常の本文テキストに戻します（Wordと完全共通）。",
    "tip": "文字装飾そのものを消したい時は Word と同じく Ctrl + Space も使えます。",
    "memory": "Normal text（標準テキスト）の頭文字「N」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810278
  },
  {
    "id": "on-21",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "Ctrl",
      "Alt",
      "1 / 2 / 3"
    ],
    "title": "見出し1 / 見出し2 / 見出し3 スタイルを適用（Wordと共通）",
    "desc": "選択行にOneNoteの見出しスタイルを一発で適用します。",
    "tip": "Wordと全く同じキー操作でノートの見出し構造を作れます。",
    "memory": "Wordと完全共通！見出しレベルの数字「1・2・3」に Ctrl + Alt",
    "level": 3,
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910101
  },
  {
    "id": "on-12",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "Alt",
      "Shift",
      "↑ / ↓"
    ],
    "title": "現在の段落（または表の行）を上下に入れ替え移動",
    "desc": "箇条書きの項目や表の行を、配下のサブ階層ごとそのまま上下にスライド移動します。",
    "tip": "ブレインストーミングで書き出したメモの優先順位を後から並べ替える時に無敵の威力を発揮します！",
    "level": 3,
    "memory": "Word・PowerPointと完全共通！「Alt + Shift + ↑/↓」で行や段落を上下に入れ替え",
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920422
  },
  {
    "id": "on-13",
    "category": "onenote",
    "subcategory": "表作成・アウトライン・構造整理",
    "keys": [
      "Alt",
      "Shift",
      "+ / -"
    ],
    "title": "見出し・親項目の下にある「サブ階層テキスト」を折りたたむ（-）/ 展開（+）",
    "desc": "インデントで階層化したメモの子要素を折りたたんで隠し、見出しだけをスッキリ一覧表示します。",
    "tip": "長くなった議事録やプロジェクトノートをアコーディオンのように整理できるOneNoteならではの機能です。",
    "level": 2,
    "memory": "アウトライン記号の見た目通り！「＋」で展開、「－」でサブ階層を折りたたむ",
    "funcGroup": "表作成・アウトライン・構造整理",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920543
  },
  {
    "id": "on-5",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "F11"
    ],
    "title": "ページを全画面表示（ノートブック枠を隠して広く使う）",
    "desc": "左側のノートブック一覧や上部のリボンを隠し、キャンバス全面をノート記述領域にします。",
    "tip": "会議の議事録を集中して取る時や、ペンタブレットで手書きする時に最適です（もう一度F11で復帰）。",
    "level": 2,
    "memory": "ブラウザの全画面表示と完全共通の「F11」でノート領域を最大化！",
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210011
  },
  {
    "id": "on-3",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "E"
    ],
    "title": "すべてのノートブックを横断して全文検索（ページ内検索はCtrl+F）",
    "desc": "開いている全ノートブック・全セクション・画像内の文字（OCR）まで含めて一括検索します。",
    "tip": "今開いているページの中だけを探したい時は Ctrl + F、全体から探す時は Ctrl + E と使い分けます！",
    "level": 3,
    "memory": "Explore（全ノートブックを探検・横断検索）の「Ctrl + E」（ページ内検索は Find の Ctrl+F）",
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410269
  },
  {
    "id": "on-16",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "F"
    ],
    "title": "現在開いている「このページ内」だけをキーワード検索",
    "desc": "全ノートブック検索（Ctrl+E）とは異なり、今見ているページの中の文字だけを素早く検索します。",
    "tip": "長い議事録ページの中から特定の単語を探したい時は Ctrl + F が最適です。",
    "memory": "全アプリ共通の Find（ページ内検索）「Ctrl + F」（全体検索は Explore の Ctrl+E）",
    "level": 3,
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410270
  },
  {
    "id": "on-17",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "M"
    ],
    "title": "小さな「クイックノート（サイドノート）」ウィンドウを別枠で開く",
    "desc": "付箋やメモ帳のような小さなOneNoteウィンドウを画面端に立ち上げ、素早くメモを書き留めます。",
    "tip": "書いた内容は自動的にOneNoteの「クイックノート」セクションに保存されます。",
    "memory": "Memo（ミニメモ窓を開く）の頭文字「M」",
    "level": 2,
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410277
  },
  {
    "id": "on-1",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "N"
    ],
    "title": "新しいページを追加する",
    "desc": "現在のセクションに新しいノートページを1枚追加し、タイトル入力状態にします。",
    "tip": "現在のページの下にインデントされた「サブページ」を追加したい時は Ctrl + Alt + N です。",
    "level": 3,
    "memory": "New page（新しいページ）の頭文字「N」",
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410278
  },
  {
    "id": "on-2",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "T"
    ],
    "title": "新しいセクション（タブ）を追加する",
    "desc": "ノートブック内に新しいセクションタブを追加します。",
    "tip": "ブラウザの新しいタブ（Ctrl+T）と同じ感覚でセクションを増やせます。",
    "level": 3,
    "memory": "ブラウザのタブと同じく、新しいセクションタブ追加は Tab の「Ctrl + T」！",
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410284
  },
  {
    "id": "on-4",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "PageDown / PageUp"
    ],
    "title": "次のページ（PageDown）/ 前のページ（PageUp）へ切り替え",
    "desc": "同じセクション内のノートページを上下に順番に切り替えます。",
    "tip": "セクション自体を切り替えたい時は Ctrl + Tab / Ctrl + Shift + Tab を使います。",
    "level": 2,
    "memory": "Excelのシート切替と全く同じ！「Ctrl + PageDown / PageUp」で上下のページへ移動",
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510418
  },
  {
    "id": "on-20",
    "category": "onenote",
    "subcategory": "ページ・セクション・検索",
    "keys": [
      "Ctrl",
      "Alt",
      "N"
    ],
    "title": "現在のページのすぐ下に「サブページ（子ページ）」を追加作成",
    "desc": "通常のページ追加（Ctrl+N）と異なり、最初から1段インデントされた子ページとして直下に作成します。",
    "tip": "プロジェクトの親ページの下に「第1回会議」「第2回会議」とぶら下げて整理するのに最適です！",
    "memory": "Ctrl+N（新規ページ）に「Alt（サブ階層として作成）」をプラス！",
    "level": 2,
    "funcGroup": "ページ・セクション・検索",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 910278
  },
  {
    "id": "on-15",
    "category": "onenote",
    "subcategory": "チェックボックス・タグ・日時挿入",
    "keys": [
      "Ctrl",
      "0 (ゼロ)"
    ],
    "title": "選択行に付いているノートシール（ToDoチェックや★タグ）をすべて消去",
    "desc": "Ctrl + 1〜5 で付けたチェックボックスや重要マークなどのタグを一発で取り除きます。",
    "tip": "タグを付け間違えた時や、通常のテキストに戻したい時にすぐ消せます。",
    "memory": "「0（ゼロ＝タグをゼロにして消す）」の「Ctrl + 0」",
    "level": 2,
    "funcGroup": "チェックボックス・タグ・日時挿入",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310100
  },
  {
    "id": "on-6",
    "category": "onenote",
    "subcategory": "チェックボックス・タグ・日時挿入",
    "keys": [
      "Ctrl",
      "1"
    ],
    "title": "チェックボックス（To Do タグ）の挿入 / 完了チェック / 解除",
    "desc": "現在の行に「□ タスク」を付けます。もう一度 Ctrl+1 を押すと「☑ 完了」になり、3回目で消えます！",
    "tip": "OneNoteで最も使われる神ショートカットです。会議中の宿題事項にその場でチェックボックスを付けられます。",
    "level": 3,
    "memory": "OneNoteで「1番」使う最重要タグだから「Ctrl + 1」＝ToDoチェックボックス！",
    "funcGroup": "チェックボックス・タグ・日時挿入",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310101
  },
  {
    "id": "on-7",
    "category": "onenote",
    "subcategory": "チェックボックス・タグ・日時挿入",
    "keys": [
      "Ctrl",
      "2 / 3 / 4 / 5"
    ],
    "title": "重要★（2）・質問？（3）・後で確認マーカー（4）・定義（5）タグを付与",
    "desc": "行頭に「★（重要）」「？（質問）」などの目印アイコン（ノートシール）をワンタッチで付与します。",
    "tip": "付けたタグはすべてを取り消す「Ctrl + 0（ゼロ）」で一発クリアできます。",
    "level": 3,
    "memory": "Ctrl+1（ToDo）の続きの数字！「2＝★重要、3＝？質問、4＝蛍光マーカー、5＝定義」",
    "funcGroup": "チェックボックス・タグ・日時挿入",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310102
  },
  {
    "id": "on-9",
    "category": "onenote",
    "subcategory": "チェックボックス・タグ・日時挿入",
    "keys": [
      "Ctrl",
      "Shift",
      "H"
    ],
    "title": "選択したテキストに蛍光ペン（ハイライト）を引く",
    "desc": "直前に使った蛍光ペンの色で、選択した文字にマーカーを引きます。",
    "tip": "重要箇所の色塗りがマウスなしでサクサク進みます。",
    "level": 2,
    "memory": "Highlight（ハイライト・蛍光ペン）の頭文字「H」に Ctrl + Shift",
    "funcGroup": "チェックボックス・タグ・日時挿入",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810272
  },
  {
    "id": "on-18",
    "category": "onenote",
    "subcategory": "チェックボックス・タグ・日時挿入",
    "keys": [
      "Alt",
      "Shift",
      "D / T"
    ],
    "title": "今日の日付のみを挿入（Alt+Shift+D）/ 現在時刻のみを挿入（Alt+Shift+T）",
    "desc": "Alt+Shift+D で日付（例: 2026/11/05）、Alt+Shift+T で時刻（例: 14:30）を個別にスタンプ挿入します。",
    "tip": "会議中に「14:35 〇〇さん発言」のように時刻スタンプ（Alt+Shift+T）を打ちながら議事録を取ると超便利です！",
    "memory": "Date（日付）の「D」、Time（時刻）の「T」（両方同時は Full の Alt+Shift+F）",
    "level": 3,
    "funcGroup": "チェックボックス・タグ・日時挿入",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920268
  },
  {
    "id": "on-8",
    "category": "onenote",
    "subcategory": "チェックボックス・タグ・日時挿入",
    "keys": [
      "Alt",
      "Shift",
      "F"
    ],
    "title": "現在の日付と時刻（タイムスタンプ）を同時挿入",
    "desc": "カーソル位置に「2026/11/05 14:30」のように現在の日時を一発で挿入します。",
    "tip": "日付だけなら Alt + Shift + D（Date）、時刻だけなら Alt + Shift + T（Time）で個別に入力できます！",
    "level": 3,
    "memory": "Date（日付＝D）＋ Time（時刻＝T）＝ Full timestamp（日時両方＝F）に Alt + Shift！",
    "funcGroup": "チェックボックス・タグ・日時挿入",
    "keyGroup": "⑨ Ctrl ＋ Alt / Alt ＋ Shift ＋ キー",
    "sortRank": 920270
  },
  {
    "id": "pdf-9",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "Space（長押し）"
    ],
    "title": "押している間だけ「手のひらツール」に切り替え（ドラッグで画面移動）",
    "desc": "テキスト選択モード中でも、スペースキーを押している間はマウスドラッグでページを上下左右に掴んで動かせます。",
    "tip": "拡大した図面や表を見回すときにツールを持ち替える必要がありません。",
    "level": 3,
    "memory": "面積が一番広い「スペースバー」を押しっぱなしにすると、画面を掴んで動かせる「手のひら」に変身！",
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110404
  },
  {
    "id": "pdf-13",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "Home / End"
    ],
    "title": "PDFの「最初のページ（Home）」/「最後のページ（End）」へ一瞬で移動",
    "desc": "何百ページあるPDF資料でも、1ページ目（表紙）または最終ページへ1秒でジャンプします。",
    "tip": "目次を見に1ページ目へ戻りたい時は Home キー単体押しが最速です！",
    "memory": "Home（1ページ目のスタート地点）、End（最終ページのゴール地点）",
    "level": 3,
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110414
  },
  {
    "id": "pdf-14",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "PageUp / PageDown"
    ],
    "title": "1画面分上へスクロール（PageUp）/ 1画面分下へスクロール（PageDown）",
    "desc": "PDFを読み進めるとき、1画面分ずつ上下にスクロール移動します（Space / Shift+Space でも同じ）。",
    "tip": "Ctrl + PageDown / PageUp にすると、途中のスクロールを飛ばして「次のページの先頭」へきっちり移動します。",
    "memory": "PageUp（ページを上がる）、PageDown（ページを下りる）の名前そのまま！",
    "level": 3,
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110418
  },
  {
    "id": "pdf-8",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "F4"
    ],
    "title": "左側のナビゲーションパネル（しおり・ページサムネイル）を開閉",
    "desc": "PDFの「しおり（目次ツリー）」やページ一覧サムネイルを表示する左ペインを開いたり閉じたりします。",
    "tip": "Acrobat（有料版）では Ctrl + B を押すことで、現在のページに新しい「しおり」を追加できます。",
    "level": 3,
    "memory": "「F4（4＝しおりの『し』！）」と覚えれば一発！左側のしおりパネルを開閉",
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "pdf-18",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "Ctrl",
      "B"
    ],
    "title": "現在見ているページに新しい「しおり（ブックマーク）」を追加（Acrobat）",
    "desc": "Acrobatでしおり（目次項目）を新しく作成します。テキストを選択してから押すと、その文字列がそのまましおり名になります！",
    "tip": "章タイトルを選択 → Ctrl + B を繰り返すだけで、あっという間に目次付きのPDFが作れます！",
    "memory": "Bookmark（しおり・ブックマーク）の頭文字「B」",
    "level": 2,
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410266
  },
  {
    "id": "pdf-20",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "Ctrl",
      "PageDown / PageUp"
    ],
    "title": "次のページの先頭へ移動（PageDown）/ 前のページの先頭へ移動（PageUp）",
    "desc": "スクロール位置に関わらず、きっちり1ページ単位で次/前のページの最上部へ切り替えます。",
    "tip": "横長スライド資料のPDFを1枚ずつめくって読むときに最適です。",
    "memory": "PageDown/Up に Ctrl を添えて「きっちり1ページ単位でめくる」",
    "level": 2,
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510418
  },
  {
    "id": "pdf-7",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "Alt",
      "← / →"
    ],
    "title": "直前に見ていたページ位置へ「戻る（Alt+←）」/「進む（Alt+→）」",
    "desc": "PDF内の目次リンクをクリックして別ページへ飛んだあと、元のページ位置へワンタッチで戻ります！",
    "tip": "「目次（3ページ）→ 本文（85ページ）→ また目次へ戻る」という往復がストレスゼロになります。",
    "level": 3,
    "memory": "Webブラウザの「戻る/進む」と完全共通の「Alt + ← / →」で、飛ぶ前のページ位置へすぐ戻れる！",
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720426
  },
  {
    "id": "pdf-6",
    "category": "pdf",
    "subcategory": "ページ移動・ジャンプ・しおり",
    "keys": [
      "Ctrl",
      "Shift",
      "N"
    ],
    "title": "指定したページ番号へ直接ジャンプ移動",
    "desc": "ページ番号入力ボックスを開き、何百ページあるPDFでも目的のページへ1秒で移動します。",
    "tip": "先頭ページへは Home、最終ページへは End キーで一瞬で飛べます。",
    "level": 3,
    "memory": "Page Number（ページ番号）の頭文字「N」に Ctrl + Shift で指定ページへジャンプ！",
    "funcGroup": "ページ移動・ジャンプ・しおり",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810278
  },
  {
    "id": "pdf-15",
    "category": "pdf",
    "subcategory": "検索・ハイライト注釈・文書情報",
    "keys": [
      "F3"
    ],
    "title": "検索（Ctrl+F）の「次の検索結果」へ移動（Shift+F3で前へ戻る）",
    "desc": "PDF内でキーワード検索中、次の一致箇所へ次々とジャンプします。",
    "tip": "ブラウザやエクスプローラーの検索移動と完全共通です。",
    "memory": "Find next（次を探す）は全アプリ共通の「F3」（Shiftを足すと逆の前へ）",
    "level": 2,
    "funcGroup": "検索・ハイライト注釈・文書情報",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210003
  },
  {
    "id": "pdf-11",
    "category": "pdf",
    "subcategory": "検索・ハイライト注釈・文書情報",
    "keys": [
      "Ctrl",
      "6"
    ],
    "title": "ノート注釈（付箋コメント）を追加する",
    "desc": "PDF上に黄色の吹き出しノート注釈（コメント）を挿入します。",
    "tip": "環境設定で「単一のショートカットキーでツールを使用可能にする」をONにすると、U（蛍光ペン）、S（付箋）、V（選択）、H（手のひら）が1キーで使えます！",
    "level": 2,
    "memory": "Sticky note（付箋ノート）は「6（ロク＝録・記録メモ）」の「Ctrl + 6」（単一キー設定なら S）",
    "funcGroup": "検索・ハイライト注釈・文書情報",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310106
  },
  {
    "id": "pdf-12",
    "category": "pdf",
    "subcategory": "検索・ハイライト注釈・文書情報",
    "keys": [
      "Ctrl",
      "D"
    ],
    "title": "「文書のプロパティ」を開く（フォント埋め込み・セキュリティ確認）",
    "desc": "PDFの作成ソフト、ページサイズ、パスワード保護制限、フォントが正しく埋め込まれているかを確認する画面を開きます。",
    "tip": "印刷所への入稿前や客先提出前に「フォント埋め込み」を確認する必須ショートカットです。",
    "level": 2,
    "memory": "Document properties（文書のプロパティ・フォント情報）の頭文字「D」",
    "funcGroup": "検索・ハイライト注釈・文書情報",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410268
  },
  {
    "id": "pdf-10",
    "category": "pdf",
    "subcategory": "検索・ハイライト注釈・文書情報",
    "keys": [
      "Ctrl",
      "Shift",
      "F"
    ],
    "title": "「高度な検索」を開く（一致箇所の一覧表示・フォルダ内の複数PDF一括検索！）",
    "desc": "通常の Ctrl+F と違い、検索ヒット箇所を文脈付きで一覧リスト表示し、さらに指定フォルダ内の全PDFを串刺し検索できます！",
    "tip": "何百ページあるマニュアルや大量のPDF資料からキーワードを探すなら、Ctrl+F より Ctrl+Shift+F が10倍便利です！",
    "level": 3,
    "memory": "Ctrl+F（通常検索）に「Shift（機能強化）」を足して、複数PDFも一括で探せる「高度な検索」を起動！",
    "funcGroup": "検索・ハイライト注釈・文書情報",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810270
  },
  {
    "id": "pdf-16",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "F8 / F9"
    ],
    "title": "ツールバーの表示切替（F8）/ メニューバーの表示切替（F9）",
    "desc": "上部のアイコンバー（F8）やメニューバー（F9）を隠して、PDFの表示領域を上下に広く確保します。",
    "tip": "「Acrobatの上のメニューバーが消えてしまった！」という時は F9 を押せば元通り復活します！",
    "memory": "F8（バー＝8でツールバー開閉）、F9（メニューバー開閉）",
    "level": 2,
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210008
  },
  {
    "id": "pdf-1",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "0 (ゼロ)"
    ],
    "title": "「1ページ全体」がウィンドウに収まる倍率に合わせる",
    "desc": "PDFの1ページ全体が画面内にピッタリ見えるように表示倍率を自動調整します。",
    "tip": "スライド資料型のPDFや図面全体を見渡したい時に一瞬でフィットさせられます。",
    "level": 3,
    "memory": "「0（ゼロ＝丸ごと1ページ全体）」を画面枠にピッタリ収める「Ctrl + 0」",
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310100
  },
  {
    "id": "pdf-17",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "1"
    ],
    "title": "PDFを「実際のサイズ（100%原寸大）」倍率で表示",
    "desc": "縮小や拡大されていた表示倍率を、100%の等倍（原寸サイズ）に一発で合わせます。",
    "tip": "Adobe PDFでは「Ctrl+0＝全体表示」「Ctrl+1＝100%等倍」「Ctrl+2＝幅に合わせる」の0・1・2トリオが超重要です！",
    "memory": "「1」＝「100%（原寸大1倍）」の Ctrl + 1！（0＝全体、2＝幅に合わせる）",
    "level": 3,
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310101
  },
  {
    "id": "pdf-2",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "2"
    ],
    "title": "ページの「横幅」に合わせて拡大表示する",
    "desc": "ウィンドウの左右幅いっぱいにページが広がるよう倍率を自動調整します。",
    "tip": "A4縦の契約書や論文PDFの文字を大きく読みやすく表示する時の定番ショートカットです（Ctrl+1で100%等倍）。",
    "level": 3,
    "memory": "1（100%等倍）の次の「Ctrl + 2」で、左右の「2つの端（横幅いっぱい）」に合わせる！",
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310102
  },
  {
    "id": "pdf-5",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "H"
    ],
    "title": "閲覧モード（ツールバーを隠して画面を広く使う）/ 自動スクロール",
    "desc": "上部のリボンや右側のツールパネルを隠し、PDF本文だけを広く表示します（Ctrl+Shift+Hで自動スクロール開始）。",
    "tip": "F8（ツールバー表示切替）や F9（メニューバー表示切替）でも画面をスッキリ広くできます。",
    "level": 2,
    "memory": "Hide toolbars（ツールバーを隠して読書モードにする）の頭文字「H」",
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410272
  },
  {
    "id": "pdf-4",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "L"
    ],
    "title": "フルスクリーン（全画面プレゼン）モードを開始 / 終了",
    "desc": "メニューや枠をすべて消してPDFを全画面表示します（Escで終了）。",
    "tip": "PDF化したスライドでそのままプレゼン発表するときに使います。",
    "level": 2,
    "memory": "Large screen（大画面フルスクリーン）の「L」",
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410276
  },
  {
    "id": "pdf-19",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "+ / -"
    ],
    "title": "PDFの表示倍率を拡大（ズームイン）/ 縮小（ズームアウト）",
    "desc": "PDFのページ表示を大きく拡大（+）または小さく縮小（-）します（Ctrl + マウスホイールでも可能）。",
    "tip": "細かい図面や小さな注釈文字を読むときに使います。",
    "memory": "ブラウザと完全共通！「＋」で拡大、「－」で縮小",
    "level": 3,
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510543
  },
  {
    "id": "pdf-3",
    "category": "pdf",
    "subcategory": "表示倍率・回転・画面モード",
    "keys": [
      "Ctrl",
      "Shift",
      "+ / -"
    ],
    "title": "ページの表示向きを90度回転（+で時計回り / -で反時計回り）",
    "desc": "横向きにスキャンされて首をかしげないと読めないPDFページを、時計回りまたは反時計回りに回転します。",
    "tip": "メニューから「表示 ＞ 表示を回転」を探す手間がゼロになります！",
    "level": 3,
    "memory": "Ctrl + Shift + 「＋（プラス方向＝時計回りに90度回転）」「－（反時計回りに回転）」",
    "funcGroup": "表示倍率・回転・画面モード",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810543
  },
  {
    "id": "br-33",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Esc"
    ],
    "title": "ページの読み込みを途中で停止する / 検索バーや全画面を閉じる",
    "desc": "重いWebページの読み込みをキャンセルして止めたり、ページ内検索バー（Ctrl+F）を閉じたりします。",
    "tip": "通信が遅くて固まりかけているページを止めたい時は Esc です。",
    "memory": "Escape（読み込みやポップアップを中断する）の「Esc」",
    "level": 2,
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110400
  },
  {
    "id": "br-35",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "F5"
    ],
    "title": "現在のページを再読み込み（リロード / Ctrl+Rと同じ）",
    "desc": "見ているWebページを最新の状態に更新します（Ctrl + F5 でキャッシュ無視のスーパーリロード）。",
    "tip": "キー1つで押せる更新キーとして最も有名なショートカットです。",
    "memory": "エクスプローラーと共通！「F5」＝画面をリフレッシュ（更新）",
    "level": 3,
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210005
  },
  {
    "id": "br-36",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "F6"
    ],
    "title": "アドレスバー ⇄ ブックマークバー ⇄ ページ本文 の間でフォーカス移動",
    "desc": "F6を1回押すとアドレスバーが全選択され、さらにもう一度押すとブックマークバーや本文へフォーカスが移ります。",
    "tip": "Ctrl + L や Alt + D と並んで、指1本でURL欄を選択できる便利キーです。",
    "memory": "Officeやエクスプローラーと共通！「F6」＝画面内の枠（エリア）を順番に飛び移る",
    "level": 2,
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210006
  },
  {
    "id": "br-11",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "K"
    ],
    "title": "アドレスバーで既定の検索エンジン検索を開始（Ctrl+Eでも同じ）",
    "desc": "アドレスバーに「? 検索」が入った状態でフォーカスし、URLではなく確実にキーワード検索として実行します。",
    "tip": "社内ホスト名やドットを含む文字列をURLと誤認させずにGoogle/Bing検索したい時に便利です。",
    "level": 2,
    "memory": "Kensaku（検索）の「K」または Search Engine の「E」でアドレスバー検索モード！",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410275
  },
  {
    "id": "br-10",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "L"
    ],
    "title": "アドレスバー（URL欄）を選択して即座に検索・URL入力",
    "desc": "ページ内のどこを見ていても、一瞬で上部のアドレスバーにフォーカスしてURLを全選択します（Alt + D や F6 でも同じ）。",
    "tip": "Ctrl + L → Ctrl + C を押せば、今見ているページのURLを1秒でコピーできます！",
    "level": 3,
    "memory": "Location（Webの場所＝URLアドレスバー）の頭文字「L」（または Address の Alt+D）",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410276
  },
  {
    "id": "br-15",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "R"
    ],
    "title": "ページの再読み込み（リロード / F5と同じ）",
    "desc": "現在のWebページを最新の状態に更新します（読み込み途中で止めたい時は Esc キー）。",
    "tip": "ホームポジションから手を離さずにリロードできるため F5 より押しやすいです。",
    "level": 3,
    "memory": "Reload（リロード・再読み込み）の頭文字「R」",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410282
  },
  {
    "id": "br-13",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "Enter"
    ],
    "title": "アドレスバーの単語に「.com」を自動補完して開く",
    "desc": "アドレスバーにサイト名（例: `github`）だけ打って Ctrl + Enter を押すと `https://www.github.com` へ移動します。",
    "tip": ".com サイトを開くときに最後まで打つ手間が省けます。",
    "level": 1,
    "memory": ".com（ドットコム）の「Ctrl」＋ Enter で、単語の前後に www. と .com を自動装着",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510406
  },
  {
    "id": "br-17",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "クリック"
    ],
    "title": "リンクをバックグラウンドの「新しいタブ」で開く",
    "desc": "現在のページを表示したまま、クリックしたリンク先を裏で新しいタブとして開きます（マウスホイール押し込みでも同じ）。",
    "tip": "Ctrl + Shift + クリック なら「新しいタブで開くと同時にそのタブへ即座に移動」します！",
    "level": 3,
    "memory": "クリックに「Ctrl（裏で控えめに開く）」を添えて、今のページを見続けたまま新タブ追加",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 522963
  },
  {
    "id": "br-12",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Alt",
      "Enter"
    ],
    "title": "アドレスバーの検索ワード・URLを「新しいタブ」で開く",
    "desc": "現在見ているページを残したまま、アドレスバーに入力した検索結果やURLを別タブで開きます。",
    "tip": "Ctrl + L（アドレスバー選択）→ 検索語入力 → Alt + Enter のコンボは一度使うと手放せません！",
    "level": 3,
    "memory": "Enter（今のタブで開く）に「Alt（別タブへ逃がす）」を合わせて「新しいタブで検索結果を開く」！",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710406
  },
  {
    "id": "br-14",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Alt",
      "← / →"
    ],
    "title": "前のページに戻る（Alt+←）/ 次のページに進む（Alt+→）",
    "desc": "ブラウザ左上の「←（戻る）」「→（進む）」ボタンと同じ動作をします。",
    "tip": "Alt + Home を押せば設定されているホームページ（初期画面）へ一発で戻れます。",
    "level": 3,
    "memory": "矢印の向きそのまま！「Alt + ←（前のページへ戻る）」「Alt + →（次のページへ進む）」",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 720426
  },
  {
    "id": "br-16",
    "category": "browser",
    "subcategory": "ナビゲーション・アドレスバー・検索",
    "keys": [
      "Ctrl",
      "Shift",
      "R"
    ],
    "title": "スーパーリロード（キャッシュを無視して完全再読み込み）",
    "desc": "古いキャッシュ画像やCSSを破棄し、サーバーから最新データを強制的に再取得します（Ctrl + F5 と同じ）。",
    "tip": "Webサイトの表示が崩れている時や更新が反映されない時の特効薬です。",
    "level": 3,
    "memory": "Ctrl+R（通常リロード）に「Shift（超強化）」を足して、キャッシュを吹き飛ばす「スーパーリロード」！",
    "funcGroup": "ナビゲーション・アドレスバー・検索",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810282
  },
  {
    "id": "br-19",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Space"
    ],
    "title": "1画面分下へスクロール（Shift+Space で1画面上へ）",
    "desc": "Webページを読み進めるとき、ちょうど1画面分ずつ下へスムーズにスクロールします。",
    "tip": "Shift + Space を押すと1画面分上へ戻ります。長文記事を読むときにマウスホイールいらずです。",
    "level": 2,
    "memory": "一番押しやすい大きな「Space」キーで1画面ずつ紙芝居のように下へ読み進める（Shiftで上へ戻る）",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110404
  },
  {
    "id": "br-20",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Home / End"
    ],
    "title": "ページの最上部（Home）/ 最下部（End）へ一瞬で移動",
    "desc": "どんなに縦に長いWebページでも、一瞬でページの先頭またはフッターまでジャンプします。",
    "tip": "ノートPCでHome/Endが独立していない場合は Fn + ← / → に割り当てられていることが多いです。",
    "level": 3,
    "memory": "Home（ページのスタート地点＝最上部）、End（ページのゴール地点＝最下部）",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110414
  },
  {
    "id": "br-34",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "F3"
    ],
    "title": "ページ内の文字検索を開く / 次の検索一致箇所へジャンプ",
    "desc": "Ctrl + F と同じくページ内検索を開き、すでに開いている場合は次の検索結果へ進みます（Shift+F3で前へ）。",
    "tip": "片手（指1本）で検索を開始・移動したい時に便利です。",
    "memory": "エクスプローラー・PDFと完全共通！「F3」＝Find（探す）",
    "level": 2,
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210003
  },
  {
    "id": "br-24",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "F9"
    ],
    "title": "イマーシブリーダー（記事の広告等を消して読書表示 / Edge）",
    "desc": "Microsoft Edgeでニュースやブログ記事を開いている時、周囲の広告やメニューを消して本文だけを読みやすく整形します。",
    "tip": "さらに Ctrl + Shift + U を押すと、AI音声で記事の本文をナチュラルに読み上げてくれます！",
    "level": 2,
    "memory": "Edgeの「F9（9＝くっきり本文だけ読む）」で広告を消すイマーシブリーダー起動",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210009
  },
  {
    "id": "br-23",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "F11"
    ],
    "title": "全画面表示（フルスクリーン）のON / OFF",
    "desc": "タブバーやアドレスバーを隠し、モニター全面にWebページを表示します。",
    "tip": "プレゼンやWebダッシュボード表示に最適。もう一度 F11 を押すと元に戻ります。",
    "level": 2,
    "memory": "Full screen の「F」＋「11（画面の左右の柱を広げるイメージ）」で全画面表示！",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210011
  },
  {
    "id": "br-22",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Ctrl",
      "0 (ゼロ)"
    ],
    "title": "ページの拡大率を100%（標準サイズ）に戻す",
    "desc": "拡大・縮小したページの表示倍率を一発でデフォルトの100%にリセットします。",
    "tip": "うっかり Ctrl + マウスホイール で画面が大きくなりすぎた時も一瞬で直せます。",
    "level": 3,
    "memory": "「0（ゼロ＝プラマイゼロの初期状態100%）」にリセット！",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310100
  },
  {
    "id": "br-18",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Ctrl",
      "G"
    ],
    "title": "ページ内検索（Ctrl+F）の「次の検索結果」へ移動",
    "desc": "Ctrl + F で検索中、次の一致箇所へ移動します（Enterと同じ）。Ctrl + Shift + G（またはShift + Enter）で前の一致箇所へ戻ります。",
    "tip": "F3 キーでもページ内検索の開始・次の一致箇所へのジャンプが可能です。",
    "level": 2,
    "memory": "Ctrl+F（検索）のすぐ右隣のキー「G（Go to next）」で次の検索一致箇所へ進む！",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410271
  },
  {
    "id": "br-37",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Ctrl",
      "S"
    ],
    "title": "現在見ているWebページをPCにファイル保存する",
    "desc": "Webページ全体をHTMLファイル（またはWebアーカイブ）としてローカルフォルダに保存します。",
    "tip": "オフライン環境でも後で読みたいページや証拠保全したいページを保存できます。",
    "memory": "全アプリ共通！Save（保存する）の頭文字「S」",
    "level": 2,
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410283
  },
  {
    "id": "br-21",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Ctrl",
      "+ / -"
    ],
    "title": "ページの拡大（ズームイン）/ 縮小（ズームアウト）",
    "desc": "Webページの文字や画像サイズを拡大・縮小表示します（Ctrl + マウスホイールでも可能）。",
    "tip": "文字が小さくて読みづらいサイトや、画面全体を1枚に収めてスクショしたい時に便利です。",
    "level": 3,
    "memory": "「＋（プラスで大きく拡大）」「－（マイナスで小さく縮小）」の記号そのまま！",
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510543
  },
  {
    "id": "br-40",
    "category": "browser",
    "subcategory": "ページ操作・表示・ズーム",
    "keys": [
      "Ctrl",
      "Shift",
      "U"
    ],
    "title": "Webページの記事本文をAI音声で読み上げる（Microsoft Edge）",
    "desc": "Edgeの「音声で読み上げる」機能を起動し、ニュースや長文ドキュメントを自然な日本語・英語音声で朗読させます。",
    "tip": "目を休めながら長文記事をインプットしたり、自分が書いた文章の誤字脱字を耳でチェックするのに最高です！",
    "memory": "Utter / Read aloud（声に出して読み上げる）の「U」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "ページ操作・表示・ズーム",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810285
  },
  {
    "id": "br-30",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "F12"
    ],
    "title": "デベロッパーツール（開発者ツール）を開く",
    "desc": "HTML/CSSの検証、ネットワーク通信、スマホ表示確認などを行う開発者ツールを開きます（Ctrl + Shift + I でも同じ）。",
    "tip": "コンソールを直接開くなら Ctrl + Shift + J、ページのHTMLソースを見るだけなら Ctrl + U です。",
    "level": 2,
    "memory": "ファンクションキーの最高峰「F12」はプロ用の「開発者ツール（DevTools）」！（または Inspector の Ctrl+Shift+I）",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210012
  },
  {
    "id": "br-25",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "D"
    ],
    "title": "現在のページをブックマーク（お気に入り）に登録",
    "desc": "見ているページをワンタッチでブックマークに追加します。",
    "tip": "Ctrl + Shift + D なら、現在開いているすべてのタブを1つのフォルダにまとめてブックマーク保存できます！",
    "level": 3,
    "memory": "Bookmark が B ではなく「D」なのは「大事な（Daiji）ページを登録する / Done」と覚えるのが定番！",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410268
  },
  {
    "id": "br-27",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "H"
    ],
    "title": "閲覧履歴（ヒストリー）を開く",
    "desc": "過去に見たWebページの履歴一覧を開きます。",
    "tip": "「昨日見たあのサイトどれだっけ？」という時にすぐ検索できます。",
    "level": 3,
    "memory": "History（ヒストリー・閲覧履歴）の頭文字「H」",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410272
  },
  {
    "id": "br-28",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "J"
    ],
    "title": "ダウンロード履歴を開く",
    "desc": "ブラウザでダウンロードしたファイルの一覧と保存先フォルダへのリンクを表示します。",
    "tip": "ダウンロードしたPDFやインストーラーがどこに行ったか分からない時に一発で見つかります。",
    "level": 3,
    "memory": "Ctrl+H（履歴）の1つ右隣（H→I→J）の「J」でダウンロード履歴！（または落とした荷物の釣り針「J」の形）",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410274
  },
  {
    "id": "br-38",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "U"
    ],
    "title": "現在のWebページの「HTMLソースコード」を別タブで表示",
    "desc": "ページの裏側にある生のHTMLソースコードを新しいタブで開いて確認します。",
    "tip": "Web制作やSEOメタタグ（titleやdescription）の確認を一瞬で行えます。",
    "memory": "Under the hood / Source（裏側のソースを見る）の「U」",
    "level": 2,
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410285
  },
  {
    "id": "br-32",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Shift",
      "Esc"
    ],
    "title": "ブラウザ内のタスクマネージャーを開く",
    "desc": "どのタブや拡張機能がメモリ・CPUを大量消費しているかを特定し、重いタブだけを個別に強制終了できます。",
    "tip": "ブラウザが急に重くなった時に原因のタブを一発で突き止められます。",
    "level": 1,
    "memory": "Windowsのタスクマネージャー（Ctrl+Shift+Esc）から Ctrl を抜いた「Shift + Esc」がブラウザ版タスクマネージャー！",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610400
  },
  {
    "id": "br-26",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "Shift",
      "B"
    ],
    "title": "ブックマークバーの表示 / 非表示を切り替え",
    "desc": "アドレスバー直下のブックマークバーを表示したり隠したりします（Ctrl + Shift + O でブックマーク管理画面）。",
    "tip": "画面共有やスクショ撮影時にプライベートなブックマークをサッと隠したい時に必須です！",
    "level": 3,
    "memory": "Bookmark bar（ブックマークバー）の頭文字「B」に Ctrl + Shift",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810266
  },
  {
    "id": "br-31",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "Shift",
      "C"
    ],
    "title": "ページの要素（HTML/CSS）をマウスで指定して検査",
    "desc": "開発者ツールの要素選択モードを起動し、ページ上の気になる箇所をクリックしてHTMLやスタイルを調べます。",
    "tip": "さらに開発者ツール内で Ctrl + Shift + P を押して `screenshot` と打てば、縦長ページ全体のフルページスクショも撮れます！",
    "level": 1,
    "memory": "Check element / CSS（要素とCSSをチェックする）の「C」に Ctrl + Shift",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810267
  },
  {
    "id": "br-39",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "Shift",
      "O"
    ],
    "title": "ブックマークマネージャー（お気に入り整理画面）を開く",
    "desc": "登録したブックマークのフォルダ整理、検索、インポート/エクスポートを行う管理画面を新しいタブで開きます。",
    "tip": "溜まりすぎたブックマークを一括整理・検索したい時に一発で開けます。",
    "memory": "Organize bookmarks（ブックマークを整理する）の頭文字「O」に Ctrl + Shift",
    "level": 2,
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810279
  },
  {
    "id": "br-29",
    "category": "browser",
    "subcategory": "ブックマーク・履歴・開発ツール",
    "keys": [
      "Ctrl",
      "Shift",
      "Delete"
    ],
    "title": "閲覧履歴・キャッシュ・Cookieの削除画面を開く",
    "desc": "期間を指定してブラウザキャッシュや閲覧履歴を削除するダイアログを直接開きます。",
    "tip": "設定メニューの奥深くまで探す必要がなくなります。",
    "level": 2,
    "memory": "Delete（消去する）に Ctrl + Shift を合わせて「閲覧履歴・キャッシュの一括消去画面」を召喚！",
    "funcGroup": "ブックマーク・履歴・開発ツール",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810410
  },
  {
    "id": "br-6",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "数字 (1〜8) / 9"
    ],
    "title": "指定した番号のタブへ直接ジャンプ（9は常に右端タブ）",
    "desc": "左から1〜8番目のタブへ一瞬で移動します。Ctrl + 9 はタブが何個あっても常に「一番右端のタブ」へ移動します。",
    "tip": "メールやカレンダーを左端（1番・2番）にピン留めしておくと Ctrl + 1 でいつでも戻れます。",
    "level": 2,
    "memory": "左から「1番目〜8番目」の数字そのまま！「9」だけは常に「一番右端（最後）のタブ」へ直行",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "③ Ctrl ＋ 数字（Ctrl + 0〜9）",
    "sortRank": 310115
  },
  {
    "id": "br-1",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "T"
    ],
    "title": "新しいタブを開く",
    "desc": "新しいタブを追加して開き、そのまま検索・URL入力できる状態にします。",
    "tip": "マウスで「＋」ボタンをクリックするより何倍も速い基本動作です。",
    "level": 3,
    "memory": "Tab（新しいタブ）の頭文字「T」",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410284
  },
  {
    "id": "br-2",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "W"
    ],
    "title": "現在のタブを閉じる（Ctrl+Shift+Wでウィンドウごと閉じる）",
    "desc": "今見ているタブを閉じます（Ctrl + F4 でも同じ）。",
    "tip": "見終わったタブをサクサク閉じてブラウザのメモリ消費を常に軽く保てます。",
    "level": 3,
    "memory": "Window / Tab を閉じるの「W」（左手だけでサッと閉じられる位置）",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410287
  },
  {
    "id": "br-4",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Tab"
    ],
    "title": "右隣のタブへ切り替え（Ctrl+Shift+Tab で左隣へ）",
    "desc": "開いているタブを右方向（Shift追加で左方向）へ順番に切り替えます（Ctrl + PageDown / PageUp でも同じ）。",
    "tip": "マウスを使わずに複数タブを見比べるときに必須です。",
    "level": 3,
    "memory": "Tab（タブ）キーに Ctrl を合わせて右隣のタブへ（Shiftを足すと逆の左隣へ）",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510402
  },
  {
    "id": "br-8",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Shift",
      "A"
    ],
    "title": "開いている全タブ・最近閉じたタブをタイトル検索",
    "desc": "タブを大量に開きすぎて目的のページがどこにあるか分からない時、キーワードでタブを検索してジャンプできます。",
    "tip": "タブを20個以上開きっぱなしにする人の最強の味方です。",
    "level": 2,
    "memory": "All tabs（すべてのタブから検索する）の頭文字「A」に Ctrl + Shift",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810265
  },
  {
    "id": "br-9",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Shift",
      "M"
    ],
    "title": "ブラウザのプロファイル（アカウント）を切り替え",
    "desc": "仕事用アカウントと個人用アカウントなど、ブラウザのユーザープロファイル選択メニューを開きます。",
    "tip": "複数アカウントを使い分けている環境で素早く別プロファイルのウィンドウを開けます。",
    "level": 1,
    "memory": "Me（自分のアカウント・プロファイル）または Member の「M」に Ctrl + Shift",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810277
  },
  {
    "id": "br-7",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Shift",
      "N"
    ],
    "title": "シークレット（InPrivate）ウィンドウを開く",
    "desc": "閲覧履歴やCookie、ログイン情報を残さないプライベートウィンドウを開きます。",
    "tip": "別アカウントでのログイン確認や、パーソナライズを除いた検索順位確認に最適です。",
    "level": 3,
    "memory": "Ctrl+N（新しいウィンドウ）に「Shift（秘密の裏モード）」を足してシークレットウィンドウ！",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810278
  },
  {
    "id": "br-3",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Shift",
      "T"
    ],
    "title": "直前に閉じたタブ（またはウィンドウ）を復元して開き直す",
    "desc": "誤って閉じてしまったタブを、閲覧履歴ごと元の位置に復活させます。",
    "tip": "連打すると過去に閉じたタブを順番に何個でも遡って復活できる救世主ショートカットです！",
    "level": 3,
    "memory": "Ctrl+T（タブを開く）に「Shift（時間を逆戻り）」を足して「閉じたタブを復活」！",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810284
  },
  {
    "id": "br-5",
    "category": "browser",
    "subcategory": "タブ・ウィンドウ管理",
    "keys": [
      "Ctrl",
      "Shift",
      "PageUp / PageDown"
    ],
    "title": "現在のタブの並び順を左（PageUp）/ 右（PageDown）へ移動",
    "desc": "開いているタブ自体の位置を左右に入れ替えます。",
    "tip": "関連するタブを隣同士に整理したい時、ドラッグ不要で並べ替えられます。",
    "level": 1,
    "memory": "Ctrl+PageUp/Down（タブ切替）に「Shift」を足して「タブそのものの並び順を移動」",
    "funcGroup": "タブ・ウィンドウ管理",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810418
  },
  {
    "id": "cm-26",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Esc"
    ],
    "title": "操作のキャンセル・ダイアログを閉じる・選択解除",
    "desc": "開いているメニューやポップアップを閉じたり、入力途中の変換やドラッグ操作をキャンセルします。",
    "tip": "「何か変な画面が出た」「選択を解除したい」という時はまず Esc を押せば安全に戻れます。",
    "memory": "Escape（エスケープ＝脱出する・取りやめる）の頭文字「Esc」",
    "level": 3,
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110400
  },
  {
    "id": "cm-27",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Tab"
    ],
    "title": "次の入力欄・項目へ移動（Shift+Tabで前の項目へ戻る）",
    "desc": "Webフォームや設定画面、ダイアログ内で次の入力ボックスやボタンへフォーカスを移動します。",
    "tip": "会員登録や住所入力フォームでマウスを使わず Tab だけで次々入力すると爆速です！",
    "memory": "Tabulator（表や欄を順番に飛ばす）の「Tab」（Shiftを足すと逆戻り）",
    "level": 3,
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110402
  },
  {
    "id": "cm-28",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Home / End"
    ],
    "title": "行の先頭へ移動（Home）/ 行の末尾へ移動（End）",
    "desc": "文章を入力中、カーソルを現在の行の一番左端（Home）または一番右端（End）へ一瞬で移動します。",
    "tip": "Shift + Home / End を押せば、現在の位置から行頭・行末までを一瞬で範囲選択できます！",
    "memory": "Home（出発点＝行頭）、End（終着点＝行末）",
    "level": 3,
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "① 単独キー（1キー）",
    "sortRank": 110414
  },
  {
    "id": "cm-7",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Ctrl",
      "A"
    ],
    "title": "すべて選択",
    "desc": "画面内・ドキュメント内・フォルダ内のすべてのテキストやアイテムを一括選択します。",
    "tip": "全文コピーや一括書式変更の前に使います。",
    "level": 3,
    "memory": "All（すべて）の頭文字「A」",
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410265
  },
  {
    "id": "cm-8",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Ctrl",
      "F"
    ],
    "title": "検索",
    "desc": "ページ内やドキュメント内のキーワード検索ボックスを開きます。",
    "tip": "長文ドキュメントやWebページから目的の言葉を瞬時に探せます。",
    "level": 3,
    "memory": "Find（見つける・検索する）の頭文字「F」",
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410270
  },
  {
    "id": "cm-9",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Ctrl",
      "H"
    ],
    "title": "置換",
    "desc": "特定の文字列を検索して、別の文字列に一括または個別に置き換えます。",
    "tip": "Word・Excel・メモ帳・各種エディタ共通で使えます（ブラウザでは閲覧履歴が開きます）。",
    "level": 2,
    "memory": "ReplaceのRが別機能で使われているため、検索（F）の隣の隣「F → G → H」で置換",
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410272
  },
  {
    "id": "cm-34",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Ctrl",
      "← / →"
    ],
    "title": "単語・文節単位でカーソルを高速スキップ移動",
    "desc": "1文字ずつではなく、英単語や日本語の区切り単位でカーソルを左右へポンポン飛ばします。",
    "tip": "長文の途中を直したい時、矢印キーを押しっぱなしにするより何倍も速く目的箇所に到達できます。",
    "memory": "Ctrl（ワープ加速キー）＋ 左右矢印で「1単語ずつ飛び越える」",
    "level": 3,
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510426
  },
  {
    "id": "cm-35",
    "category": "common",
    "subcategory": "移動・選択・検索・置換",
    "keys": [
      "Shift",
      "↑ / ↓ / ← / →"
    ],
    "title": "カーソル位置から文字を1文字・1行ずつ範囲選択",
    "desc": "マウスドラッグを使わずに、キーボードの矢印キーだけで正確に文字列を選択します。",
    "tip": "Ctrl + Shift + ← / → にすると、単語・文節単位でガバッと高速に範囲選択できます！",
    "memory": "Shift（選択テープを伸ばすキー）を押しながら矢印で範囲を広げる",
    "level": 3,
    "funcGroup": "移動・選択・検索・置換",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610422
  },
  {
    "id": "cm-29",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "F1"
    ],
    "title": "ヘルプ画面を開く（全アプリ共通）",
    "desc": "現在使っているアプリの公式ヘルプやサポート検索パネルを起動します。",
    "tip": "F2（編集）を押そうとして隣りの F1 を誤爆しがちですが、困った時の1番（F1）です。",
    "memory": "一番最初の「F1」＝「1番に助け（SOS/ヘルプ）を呼ぶキー」",
    "level": 1,
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210001
  },
  {
    "id": "cm-30",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "F4"
    ],
    "title": "直前の操作を繰り返す（Office共通）",
    "desc": "Excel・Word・PowerPointで、直前に行った書式変更、色塗り、行の挿入・削除などをそのまま繰り返します。",
    "tip": "Ctrl + Y でも同様に直前の操作を繰り返すことができます。",
    "memory": "F4 ＝「For again（もう一度同じことを繰り返す）」の4",
    "level": 3,
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210004
  },
  {
    "id": "cm-11",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "F12"
    ],
    "title": "名前を付けて保存（Office共通）",
    "desc": "Excel・Word・PowerPointで「名前を付けて保存」ダイアログを直接開きます（Ctrl + Shift + S でも可）。",
    "tip": "別名保存やコピーを作りたい時、ファイルメニューを開く手間がゼロになります。",
    "level": 3,
    "memory": "ファンクションキーの一番右端（最後＝F12）で「最終的に名前を付けて保存」",
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210012
  },
  {
    "id": "cm-13",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "N"
    ],
    "title": "新規作成 / 新しいウィンドウ",
    "desc": "新しいファイル、ドキュメント、または新しいウィンドウを開きます。",
    "tip": "New の N。アプリを問わず「新しく作る」ときの基本キーです。",
    "level": 2,
    "memory": "New（新しく作る）の頭文字「N」",
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410278
  },
  {
    "id": "cm-14",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "O"
    ],
    "title": "ファイルを開く",
    "desc": "既存のファイルを開くためのダイアログを表示します。",
    "tip": "Open の O と覚えると忘れません。",
    "level": 2,
    "memory": "Open（開く）の頭文字「O」",
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410279
  },
  {
    "id": "cm-12",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "P"
    ],
    "title": "印刷 / PDF出力",
    "desc": "印刷プレビュー・印刷設定画面を開きます。",
    "tip": "プリンタに「Microsoft Print to PDF」を選べばあらゆる画面をPDF保存できます。",
    "level": 3,
    "memory": "Print（プリント・印刷）の頭文字「P」",
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410280
  },
  {
    "id": "cm-10",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "S"
    ],
    "title": "上書き保存",
    "desc": "現在作業中のファイルを上書き保存します。",
    "tip": "作業の区切りごとにクセづけておくと不意のフリーズでも安心です。",
    "level": 3,
    "memory": "Save（保存する）の頭文字「S」",
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410283
  },
  {
    "id": "cm-15",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "W"
    ],
    "title": "現在のファイル・タブを閉じる",
    "desc": "作業中のブック・文書・ブラウザタブ・エクスプローラーを閉じます（Ctrl + F4 と同じ）。",
    "tip": "アプリ自体は終了せず、今開いているファイルやタブだけを閉じたい時に便利です。",
    "level": 3,
    "memory": "Window（ウィンドウ・タブ）を閉じるの「W」",
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410287
  },
  {
    "id": "cm-31",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "F1"
    ],
    "title": "リボンメニュー（上部ツールバー）の表示 / 折りたたみを切り替え",
    "desc": "Excel・Word・PowerPoint・エクスプローラーの上部リボンを隠し、作業画面を縦に広く使います。",
    "tip": "「あれ、上のメニューが消えた！？」というトラブルの9割はこの Ctrl + F1 をうっかり押したことが原因です！もう一度押せば直ります。",
    "memory": "一番上のメニュー（1番＝F1）を Ctrl で開閉コントロールする",
    "level": 3,
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510301
  },
  {
    "id": "cm-32",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "F2"
    ],
    "title": "印刷プレビュー画面を直接開く（Office共通）",
    "desc": "印刷イメージを確認するプレビュー画面を一発で開きます（Ctrl + P と同じ）。",
    "tip": "Excelで印刷範囲が1ページに収まっているか確認するときに便利です。",
    "memory": "F2（見る・編集）に Ctrl を足して「印刷イメージをプレビューで見る」",
    "level": 2,
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510302
  },
  {
    "id": "cm-33",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Ctrl",
      "F6"
    ],
    "title": "同じアプリの別ファイルウィンドウへ順番に切り替え",
    "desc": "Excelブックを複数開いている時やWord文書を複数開いている時、他のアプリを挟まず同じアプリのウィンドウ間だけを移動します。",
    "tip": "Alt + Tab だとブラウザやチャットまで混ざってしまいますが、Ctrl + F6 ならExcel同士・Word同士だけで行き来できます！",
    "memory": "F6（画面枠・ペイン移動）に Ctrl を足して「同アプリの別ウィンドウ間を移動」",
    "level": 2,
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510306
  },
  {
    "id": "cm-36",
    "category": "common",
    "subcategory": "ファイル・ウィンドウ・共通機能",
    "keys": [
      "Alt",
      "Space"
    ],
    "title": "ウィンドウのシステムメニューを開く（最小化・最大化・移動）",
    "desc": "タイトルバー左上のアイコンをクリックした時と同じメニューを開きます（続けて N で最小化、X で最大化、C で閉じる）。",
    "tip": "ウィンドウが画面外にはみ出てマウスで掴めなくなった時は「Alt + Space → M → 矢印キー」で画面内に救出できます！",
    "memory": "Alt ＋ Space（タイトルバーの余白スペース）でウィンドウ操作メニューを起動",
    "level": 2,
    "funcGroup": "ファイル・ウィンドウ・共通機能",
    "keyGroup": "⑦ Alt ＋ キー（Alt組み合わせ・順押し）",
    "sortRank": 710404
  },
  {
    "id": "cm-16",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "F6"
    ],
    "title": "ひらがなに変換",
    "desc": "入力中（変換確定前）の文字をすべて「ひらがな」に戻します。",
    "tip": "勝手に漢字変換されてしまった部分をひらがな表記にしたい時に一発です。",
    "level": 2,
    "memory": "F6〜F10の変換5兄弟のスタート（6＝む＝「むかしからの、ひらがな」）",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210006
  },
  {
    "id": "cm-17",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "F7"
    ],
    "title": "全角カタカナに変換",
    "desc": "入力中の文字をすべて「全角カタカナ」に一発変換します。",
    "tip": "スペースキーで何度も変換候補を探す手間が省けます。",
    "level": 3,
    "memory": "ラッキーセブン「F7」は一番よく使う「全角カタカナ」！（ナナ＝カタカナのナ）",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210007
  },
  {
    "id": "cm-18",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "F8"
    ],
    "title": "半角カタカナに変換",
    "desc": "入力中の文字を「半角カタカナ」に変換します。",
    "tip": "銀行振込名義やシステム入力フォームなどで重宝します。",
    "level": 2,
    "memory": "F7（全角カナ）の1つ右隣「F8」で、幅が半分の「半角カタカナ」（8＝ハンカクのハ）",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210008
  },
  {
    "id": "cm-19",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "F9"
    ],
    "title": "全角英数に変換",
    "desc": "入力中の文字を「全角アルファベット・数字」に変換します。",
    "tip": "押すたびに「すべて小文字 → すべて大文字 → 先頭のみ大文字」と切り替わります。",
    "level": 2,
    "memory": "F10（半角英数）の1つ手前「F9」で「全角英数」",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210009
  },
  {
    "id": "cm-20",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "F10"
    ],
    "title": "半角英数に変換",
    "desc": "日本語モードのまま入力してしまった英単語を「半角英数字」に変換します。",
    "tip": "メールアドレスや英単語をうっかり「かな入力」した時に打ち直さず一発で直せます。",
    "level": 3,
    "memory": "F6〜F10のゴール「F10」は一番スマートな「半角英数」（10＝Ten＝英語！）",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "② ファンクションキー（F1〜F12）",
    "sortRank": 210010
  },
  {
    "id": "cm-21",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "Ctrl",
      "U / I / O / P"
    ],
    "title": "ホームポジションのまま文字種変換（F6〜F9相当）",
    "desc": "文字入力中に Ctrl+U（ひらがな）、Ctrl+I（全角カナ）、Ctrl+O（半角カナ）、Ctrl+P（全角英数）に変換します。",
    "tip": "ノートPCでファンクションキーが押しにくい環境でも指を動かさず高速変換できます（Ctrl+Tで半角英数）。",
    "level": 1,
    "memory": "F6〜F9のすぐ真下にある「U・I・O・P」の横並び4キーがそのまま対応！",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410285
  },
  {
    "id": "cm-23",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "Ctrl",
      "Backspace"
    ],
    "title": "確定直後の文字を未確定状態に戻す / 単語削除",
    "desc": "IMEでEnter確定した直後に押すと確定を取り消して再変換でき、英文等では前の1単語をまとめて消去します。",
    "tip": "「あっ、今の変換間違えた！」という瞬間にすぐ戻せます。",
    "level": 2,
    "memory": "Backspace（1文字消す）に Ctrl を足して「確定そのもの（または1単語丸ごと）を取り消す」",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "⑤ Ctrl ＋ 記号・特殊キー・Fキー",
    "sortRank": 510408
  },
  {
    "id": "cm-25",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "Shift",
      "F10"
    ],
    "title": "右クリックメニュー（コンテキストメニュー）を開く",
    "desc": "マウスで右クリックした時と同じメニューをキーボードから開きます（アプリケーションキーと同じ）。",
    "tip": "Windows 11のエクスプローラーでは Shift + F10 を押すと「その他のオプションを表示」を開いた状態の旧メニューが直接出ます！",
    "level": 2,
    "memory": "F10（メニューバー活性）＋ Shift で「右クリックメニュー」を呼び出す",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 610310
  },
  {
    "id": "cm-24",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "Shift",
      "文字キー"
    ],
    "title": "日本語モードのまま一時的に半角英数入力",
    "desc": "日本語入力（あ）のままでも、Shiftを押しながらキーを打つとそのまま英字入力モードに入ります。",
    "tip": "文中に英単語（例: Excel、PC、AIなど）を混ぜる時に「半角/全角」キーを押す回数が激減します。",
    "level": 3,
    "memory": "Shift（一時切り替え）を押しながら打つだけで、その瞬間だけ英語モードにシフト！",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "⑥ Shift ＋ キー",
    "sortRank": 636491
  },
  {
    "id": "cm-37",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "Win",
      "Space"
    ],
    "title": "入力言語・キーボードレイアウトを切り替え",
    "desc": "日本語IMEと英語キーボードなど、インストールされている入力言語を切り替えます。",
    "tip": "「@や記号の位置が急に英語配列になってズレた！」という時は、うっかり Win + Space を押して英語キーボードに切り替わっています！もう一度押せば直ります。",
    "memory": "Win（OS設定）＋ Space（一番大きいキー）で言語そのものをスイッチ",
    "level": 2,
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020404
  },
  {
    "id": "cm-22",
    "category": "common",
    "subcategory": "文字入力・IME・ファンクション変換",
    "keys": [
      "Win",
      "/ (スラッシュ)"
    ],
    "title": "確定済みの文字を「再変換」する（または変換キー）",
    "desc": "すでにEnterで確定してしまった文字列をもう一度変換候補に戻して選び直します。",
    "tip": "誤変換に気づいたとき、Backspaceで消して打ち直す必要がなくなります（文字列を選択して「変換」キーでも可）。",
    "level": 2,
    "memory": "「/（スラッシュ＝区切り直す）」またはキーボード下の「変換」キーで再変換",
    "funcGroup": "文字入力・IME・ファンクション変換",
    "keyGroup": "⑩ Win ＋ キー（Windowsキー）",
    "sortRank": 1020547
  },
  {
    "id": "cm-1",
    "category": "common",
    "subcategory": "編集・クリップボード",
    "keys": [
      "Ctrl",
      "C"
    ],
    "title": "コピー",
    "desc": "選択したテキストやファイル、オブジェクトをクリップボードにコピーします（Ctrl + Insert も同じ）。",
    "tip": "Win + V と組み合わせると過去のコピー履歴から自由に選んで貼り付け可能です。",
    "level": 3,
    "memory": "Copy（コピー）の頭文字「C」",
    "funcGroup": "編集・クリップボード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410267
  },
  {
    "id": "cm-3",
    "category": "common",
    "subcategory": "編集・クリップボード",
    "keys": [
      "Ctrl",
      "V"
    ],
    "title": "貼り付け（ペースト）",
    "desc": "クリップボードの内容を現在のカーソル位置に貼り付けます（Shift + Insert も同じ）。",
    "tip": "書式を消して貼り付けたい場合は Ctrl + Shift + V が便利です。",
    "level": 3,
    "memory": "校正記号の挿入マーク（∨）の形、または Z・X・C のすぐ右隣にある「V」",
    "funcGroup": "編集・クリップボード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410286
  },
  {
    "id": "cm-2",
    "category": "common",
    "subcategory": "編集・クリップボード",
    "keys": [
      "Ctrl",
      "X"
    ],
    "title": "切り取り（カット）",
    "desc": "選択した項目を切り取ってクリップボードに移動します（Shift + Delete でも切り取り動作になるアプリあり）。",
    "tip": "文章の移動やエクスプローラーでのファイル移動時にも使えます。",
    "level": 3,
    "memory": "ハサミ（✂️）で切る形に見える「X」（Cの左隣）",
    "funcGroup": "編集・クリップボード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410288
  },
  {
    "id": "cm-6",
    "category": "common",
    "subcategory": "編集・クリップボード",
    "keys": [
      "Ctrl",
      "Y"
    ],
    "title": "やり直し（リドゥ） / 直前の操作の繰り返し",
    "desc": "Ctrl + Z で戻しすぎた操作をやり直します。Officeアプリでは直前の操作を繰り返します。",
    "tip": "ExcelやWordでは「直前の書式変更を繰り返す（F4と同じ）」としても大活躍します。",
    "level": 3,
    "memory": "Z（戻す）の相棒「Y」で「Yes、やっぱりやり直す！」",
    "funcGroup": "編集・クリップボード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410289
  },
  {
    "id": "cm-5",
    "category": "common",
    "subcategory": "編集・クリップボード",
    "keys": [
      "Ctrl",
      "Z"
    ],
    "title": "元に戻す（アンドゥ）",
    "desc": "直前の操作を取り消して1つ前の状態に戻します。",
    "tip": "誤って消してしまった文章やファイル移動もすぐ戻せます。",
    "level": 3,
    "memory": "アルファベットの最後「Z」から時間を巻き戻す（キーボードの左端）",
    "funcGroup": "編集・クリップボード",
    "keyGroup": "④ Ctrl ＋ 英字（Ctrl + A〜Z）",
    "sortRank": 410290
  },
  {
    "id": "cm-4",
    "category": "common",
    "subcategory": "編集・クリップボード",
    "keys": [
      "Ctrl",
      "Shift",
      "V"
    ],
    "title": "書式なし貼り付け（プレーンテキスト貼り付け）",
    "desc": "フォントサイズや色、背景などの装飾を除去し、文字情報だけを綺麗に貼り付けます。",
    "tip": "Webページや他資料からのコピペでフォントが崩れるのを防ぐ最強ワザです（Excel/Word/ブラウザ/Teams対応）。",
    "level": 3,
    "memory": "貼り付け（Ctrl+V）に「Shift（余計な装飾を剥がす強化キー）」をプラス",
    "funcGroup": "編集・クリップボード",
    "keyGroup": "⑧ Ctrl ＋ Shift ＋ キー",
    "sortRank": 810286
  }
];
