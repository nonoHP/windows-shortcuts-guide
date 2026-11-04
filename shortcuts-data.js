const CATEGORIES = [
  {
    id: 'all',
    name: 'すべて',
    icon: '⚡',
    color: '#6366f1',
    description: '主要20サイト＋公式ドキュメントを統合した全10カテゴリのショートカットキーを一括で検索・閲覧できます'
  },
  {
    id: 'win11',
    name: 'Windows 11',
    icon: '🪟',
    color: '#0078d4',
    description: 'OS操作・ウィンドウ整列・仮想デスクトップ・スクショ・画面録画・システム設定・アクセシビリティを完全網羅'
  },
  {
    id: 'explorer',
    name: 'エクスプローラー',
    icon: '📁',
    color: '#d97706',
    description: 'フォルダ操作・タブ管理・階層移動・フルパスコピー・表示レイアウト一発切替・プレビュー/詳細パネルを完全網羅'
  },
  {
    id: 'excel',
    name: 'Excel',
    icon: '📊',
    color: '#107c41',
    description: 'セル移動・範囲選択・データ入力・数式・名前定義・書式・行列の非表示/グループ化・テーブル・ピボットを完全網羅'
  },
  {
    id: 'word',
    name: 'Word',
    icon: '📝',
    color: '#185abd',
    description: '文字装飾・段落配置・インデント・見出し構造・拡張選択(F8)・表操作・脚注・フィールド・校閲を完全網羅'
  },
  {
    id: 'powerpoint',
    name: 'PowerPoint',
    icon: '📽️',
    color: '#c2410c',
    description: 'スライド作成・図形の複製/グループ化/重ね順/整列・スライドショー制御・発表者ツールを完全網羅'
  },
  {
    id: 'outlook',
    name: 'Outlook',
    icon: '📧',
    color: '#0284c7',
    description: 'メール作成・返信/全員返信/転送・既読/未読/フラグ整理・予定表（カレンダー）・会議招待・高度検索を完全網羅'
  },
  {
    id: 'onenote',
    name: 'OneNote',
    icon: '📓',
    color: '#7c3aed',
    description: 'ページ/セクション追加・ToDoチェックボックス/重要タグ・日時スタンプ・Tab表作成・アウトライン折りたたみを完全網羅'
  },
  {
    id: 'pdf',
    name: 'Adobe PDF',
    icon: '📄',
    color: '#dc2626',
    description: 'Acrobat / Reader でのページ移動・表示倍率（全体/幅/100%）・回転・しおり・複数PDF横断検索・ハイライト注釈を完全網羅'
  },
  {
    id: 'browser',
    name: 'ブラウザ',
    icon: '🌐',
    color: '#ea580c',
    description: 'Chrome / Edge 共通のタブ管理・アドレスバー・検索・履歴・ブックマーク・リーダー表示・開発者ツールを完全網羅'
  },
  {
    id: 'common',
    name: '共通・文字入力',
    icon: '⌨️',
    color: '#475569',
    description: '全アプリ共通の基本操作・ファイル保存・日本語入力（IME）・ファンクションキー変換・再変換を完全網羅'
  }
];

const RESEARCHED_SOURCES = [
  '1. Microsoft 公式サポート（Windows 11 / エクスプローラーのキーボード ショートカット）',
  '2. Microsoft 公式サポート（Excel のキーボード ショートカット）',
  '3. Microsoft 公式サポート（Word のキーボード ショートカット）',
  '4. Microsoft 公式サポート（PowerPoint / Outlook / OneNote のショートカット）',
  '5. Adobe 公式ヘルプ（Adobe Acrobat / Acrobat Reader キーボードショートカット）',
  '6. Google Chrome / Microsoft Edge 公式ヘルプ（ブラウザ ショートカット）',
  '7. できるネット（インプレス）ショートカットキーまとめ',
  '8. パソコン工房 NEXMAG ショートカットキー特集',
  '9. ドスパラ（サードウェーブ）PCショートカット解説',
  '10. ショートカットキー.com（shortcutkeysjp.com）',
  '11. Youseful（ユースフル）Excel・Office実務ショートカット',
  '12. Moug（モーグ）/ Excel神髄 ショートカット辞典',
  '13. パソコン教室わかるとできる ショートカット一覧',
  '14. NEC LAVIE / 富士通 FMV / Dynabook 公式サポートガイド',
  '15. お名前.com / GMO ブラウザ・ビジネス効率化コラム',
  '16. MarkeZine / マイナビニュース PC時短テクニック',
  '17. Qiita / Zenn エンジニア＆ビジネスPC操作まとめ',
  '18. Helpforest / ヘルパソ Office・PDFショートカット徹底解説',
  '19. BIGLOBE / All About デジタル仕事術ガイド',
  '20. PopInsight / Mazrica / 724685.com ビジネス資料作成ガイド'
];

/**
 * level:
 *   3 = 必須（毎日使う最重要ショートカット）
 *   2 = 便利（知っていると作業速度が2倍になる）
 *   1 = 玄人（さらに極めたい人向けの時短ワザ）
 */
const SHORTCUTS_DATA = [
  // ==========================================
  // 共通・文字入力 (common)
  // ==========================================
  {
    id: 'cm-1',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'C'],
    title: 'コピー',
    desc: '選択したテキストやファイル、オブジェクトをクリップボードにコピーします（Ctrl + Insert も同じ）。',
    tip: 'Win + V と組み合わせると過去のコピー履歴から自由に選んで貼り付け可能です。',
    level: 3
  },
  {
    id: 'cm-2',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'X'],
    title: '切り取り（カット）',
    desc: '選択した項目を切り取ってクリップボードに移動します（Shift + Delete でも切り取り動作になるアプリあり）。',
    tip: '文章の移動やエクスプローラーでのファイル移動時にも使えます。',
    level: 3
  },
  {
    id: 'cm-3',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'V'],
    title: '貼り付け（ペースト）',
    desc: 'クリップボードの内容を現在のカーソル位置に貼り付けます（Shift + Insert も同じ）。',
    tip: '書式を消して貼り付けたい場合は Ctrl + Shift + V が便利です。',
    level: 3
  },
  {
    id: 'cm-4',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'Shift', 'V'],
    title: '書式なし貼り付け（プレーンテキスト貼り付け）',
    desc: 'フォントサイズや色、背景などの装飾を除去し、文字情報だけを綺麗に貼り付けます。',
    tip: 'Webページや他資料からのコピペでフォントが崩れるのを防ぐ最強ワザです（Excel/Word/ブラウザ/Teams対応）。',
    level: 3
  },
  {
    id: 'cm-5',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'Z'],
    title: '元に戻す（アンドゥ）',
    desc: '直前の操作を取り消して1つ前の状態に戻します。',
    tip: '誤って消してしまった文章やファイル移動もすぐ戻せます。',
    level: 3
  },
  {
    id: 'cm-6',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'Y'],
    title: 'やり直し（リドゥ） / 直前の操作の繰り返し',
    desc: 'Ctrl + Z で戻しすぎた操作をやり直します。Officeアプリでは直前の操作を繰り返します。',
    tip: 'ExcelやWordでは「直前の書式変更を繰り返す（F4と同じ）」としても大活躍します。',
    level: 3
  },
  {
    id: 'cm-7',
    category: 'common',
    subcategory: '選択・検索・置換',
    keys: ['Ctrl', 'A'],
    title: 'すべて選択',
    desc: '画面内・ドキュメント内・フォルダ内のすべてのテキストやアイテムを一括選択します。',
    tip: '全文コピーや一括書式変更の前に使います。',
    level: 3
  },
  {
    id: 'cm-8',
    category: 'common',
    subcategory: '選択・検索・置換',
    keys: ['Ctrl', 'F'],
    title: '検索',
    desc: 'ページ内やドキュメント内のキーワード検索ボックスを開きます。',
    tip: '長文ドキュメントやWebページから目的の言葉を瞬時に探せます。',
    level: 3
  },
  {
    id: 'cm-9',
    category: 'common',
    subcategory: '選択・検索・置換',
    keys: ['Ctrl', 'H'],
    title: '置換',
    desc: '特定の文字列を検索して、別の文字列に一括または個別に置き換えます。',
    tip: 'Word・Excel・メモ帳・各種エディタ共通で使えます（ブラウザでは閲覧履歴が開きます）。',
    level: 2
  },
  {
    id: 'cm-10',
    category: 'common',
    subcategory: 'ファイル・ウィンドウ基本',
    keys: ['Ctrl', 'S'],
    title: '上書き保存',
    desc: '現在作業中のファイルを上書き保存します。',
    tip: '作業の区切りごとにクセづけておくと不意のフリーズでも安心です。',
    level: 3
  },
  {
    id: 'cm-11',
    category: 'common',
    subcategory: 'ファイル・ウィンドウ基本',
    keys: ['F12'],
    title: '名前を付けて保存（Office共通）',
    desc: 'Excel・Word・PowerPointで「名前を付けて保存」ダイアログを直接開きます（Ctrl + Shift + S でも可）。',
    tip: '別名保存やコピーを作りたい時、ファイルメニューを開く手間がゼロになります。',
    level: 3
  },
  {
    id: 'cm-12',
    category: 'common',
    subcategory: 'ファイル・ウィンドウ基本',
    keys: ['Ctrl', 'P'],
    title: '印刷 / PDF出力',
    desc: '印刷プレビュー・印刷設定画面を開きます。',
    tip: 'プリンタに「Microsoft Print to PDF」を選べばあらゆる画面をPDF保存できます。',
    level: 3
  },
  {
    id: 'cm-13',
    category: 'common',
    subcategory: 'ファイル・ウィンドウ基本',
    keys: ['Ctrl', 'N'],
    title: '新規作成 / 新しいウィンドウ',
    desc: '新しいファイル、ドキュメント、または新しいウィンドウを開きます。',
    tip: 'New の N。アプリを問わず「新しく作る」ときの基本キーです。',
    level: 2
  },
  {
    id: 'cm-14',
    category: 'common',
    subcategory: 'ファイル・ウィンドウ基本',
    keys: ['Ctrl', 'O'],
    title: 'ファイルを開く',
    desc: '既存のファイルを開くためのダイアログを表示します。',
    tip: 'Open の O と覚えると忘れません。',
    level: 2
  },
  {
    id: 'cm-15',
    category: 'common',
    subcategory: 'ファイル・ウィンドウ基本',
    keys: ['Ctrl', 'W'],
    title: '現在のファイル・タブを閉じる',
    desc: '作業中のブック・文書・ブラウザタブ・エクスプローラーを閉じます（Ctrl + F4 と同じ）。',
    tip: 'アプリ自体は終了せず、今開いているファイルやタブだけを閉じたい時に便利です。',
    level: 3
  },
  {
    id: 'cm-16',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['F6'],
    title: 'ひらがなに変換',
    desc: '入力中（変換確定前）の文字をすべて「ひらがな」に戻します。',
    tip: '勝手に漢字変換されてしまった部分をひらがな表記にしたい時に一発です。',
    level: 2
  },
  {
    id: 'cm-17',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['F7'],
    title: '全角カタカナに変換',
    desc: '入力中の文字をすべて「全角カタカナ」に一発変換します。',
    tip: 'スペースキーで何度も変換候補を探す手間が省けます。',
    level: 3
  },
  {
    id: 'cm-18',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['F8'],
    title: '半角カタカナに変換',
    desc: '入力中の文字を「半角カタカナ」に変換します。',
    tip: '銀行振込名義やシステム入力フォームなどで重宝します。',
    level: 2
  },
  {
    id: 'cm-19',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['F9'],
    title: '全角英数に変換',
    desc: '入力中の文字を「全角アルファベット・数字」に変換します。',
    tip: '押すたびに「すべて小文字 → すべて大文字 → 先頭のみ大文字」と切り替わります。',
    level: 2
  },
  {
    id: 'cm-20',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['F10'],
    title: '半角英数に変換',
    desc: '日本語モードのまま入力してしまった英単語を「半角英数字」に変換します。',
    tip: 'メールアドレスや英単語をうっかり「かな入力」した時に打ち直さず一発で直せます。',
    level: 3
  },
  {
    id: 'cm-21',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['Ctrl', 'U / I / O / P'],
    title: 'ホームポジションのまま文字種変換（F6〜F9相当）',
    desc: '文字入力中に Ctrl+U（ひらがな）、Ctrl+I（全角カナ）、Ctrl+O（半角カナ）、Ctrl+P（全角英数）に変換します。',
    tip: 'ノートPCでファンクションキーが押しにくい環境でも指を動かさず高速変換できます（Ctrl+Tで半角英数）。',
    level: 1
  },
  {
    id: 'cm-22',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['Win', '/ (スラッシュ)'],
    title: '確定済みの文字を「再変換」する（または変換キー）',
    desc: 'すでにEnterで確定してしまった文字列をもう一度変換候補に戻して選び直します。',
    tip: '誤変換に気づいたとき、Backspaceで消して打ち直す必要がなくなります（文字列を選択して「変換」キーでも可）。',
    level: 2
  },
  {
    id: 'cm-23',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['Ctrl', 'Backspace'],
    title: '確定直後の文字を未確定状態に戻す / 単語削除',
    desc: 'IMEでEnter確定した直後に押すと確定を取り消して再変換でき、英文等では前の1単語をまとめて消去します。',
    tip: '「あっ、今の変換間違えた！」という瞬間にすぐ戻せます。',
    level: 2
  },
  {
    id: 'cm-24',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['Shift', '文字キー'],
    title: '日本語モードのまま一時的に半角英数入力',
    desc: '日本語入力（あ）のままでも、Shiftを押しながらキーを打つとそのまま英字入力モードに入ります。',
    tip: '文中に英単語（例: Excel、PC、AIなど）を混ぜる時に「半角/全角」キーを押す回数が激減します。',
    level: 3
  },
  {
    id: 'cm-25',
    category: 'common',
    subcategory: '文字入力・IME・ファンクション変換',
    keys: ['Shift', 'F10'],
    title: '右クリックメニュー（コンテキストメニュー）を開く',
    desc: 'マウスで右クリックした時と同じメニューをキーボードから開きます（アプリケーションキーと同じ）。',
    tip: 'Windows 11のエクスプローラーでは Shift + F10 を押すと「その他のオプションを表示」を開いた状態の旧メニューが直接出ます！',
    level: 2
  },

  // ==========================================
  // Windows 11 (win11)
  // ==========================================
  {
    id: 'w11-1',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Win', 'V'],
    title: 'クリップボード履歴を開く',
    desc: '過去にコピーしたテキストや画像の履歴一覧を表示し、選んで貼り付けられます。',
    tip: '初回のみ「有効にする」をクリックすれば、よく使う定型文のピン留めも使える最強機能です。',
    level: 3
  },
  {
    id: 'w11-2',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Win', 'Shift', 'S'],
    title: '範囲を指定してスクリーンショット（Snipping Tool）',
    desc: '画面の好きな範囲をドラッグして切り取りスクショを撮影します。',
    tip: '撮影した画像は自動でクリップボードに入り、そのままチャットや資料に Ctrl + V で貼り付け可能です。',
    level: 3
  },
  {
    id: 'w11-3',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Win', 'Shift', 'R'],
    title: '画面範囲を指定して動画キャプチャ（画面録画）',
    desc: 'Windows 11のSnipping Toolの録画モードを直接起動し、指定領域の操作手順をMP4録画します。',
    tip: '操作マニュアル作成やバグ報告の動画撮影が標準機能だけで完結します。',
    level: 2
  },
  {
    id: 'w11-4',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Win', 'PrintScreen'],
    title: '全画面スクショを即座に画像ファイルとして保存',
    desc: '画面全体のスクリーンショットを撮影し、「ピクチャ > スクリーンショット」フォルダに自動保存します。',
    tip: '画面が一瞬暗くなれば保存完了の合図です。貼り付け作業なしで連写保存できます。',
    level: 3
  },
  {
    id: 'w11-5',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Alt', 'PrintScreen'],
    title: '現在アクティブなウィンドウだけをスクショ（コピー）',
    desc: '全画面ではなく、今最前面で操作しているウィンドウ1つだけを綺麗に切り取ってコピーします。',
    tip: '背景のデスクトップや他のアプリを写り込ませたくない時に重宝します。',
    level: 3
  },
  {
    id: 'w11-6',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Win', 'G'],
    title: 'Xbox Game Bar（ゲームバー・画面録画）を開く',
    desc: 'アプリの画面録画やオーディオ出力切り替え、パフォーマンス監視パネルを呼び出します。',
    tip: 'Win + Alt + R を押せば、パネルを開かずに即座に画面録画を開始/停止できます。',
    level: 2
  },
  {
    id: 'w11-7',
    category: 'win11',
    subcategory: 'クリップボード・スクショ・録画',
    keys: ['Win', 'Alt', 'R'],
    title: 'アクティブウィンドウの画面録画を即座に開始 / 停止',
    desc: '今開いているアプリの画面録画をワンタッチで開始・終了します（ビデオ > キャプチャに保存）。',
    tip: 'オンライン会議やブラウザ動作の記録に便利です。',
    level: 2
  },
  {
    id: 'w11-8',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'D'],
    title: 'デスクトップを表示 / 元に戻す',
    desc: '開いているすべてのウィンドウを一瞬で最小化し、デスクトップを表示します。',
    tip: 'もう一度押すと元のウィンドウ配置に戻ります。デスクトップ上のファイルを見る時に最適。',
    level: 3
  },
  {
    id: 'w11-9',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'M'],
    title: 'すべてのウィンドウを最小化（Win+Shift+Mで復元）',
    desc: '開いている全ウィンドウを最小化します。Win + Shift + M で元のサイズに復元します。',
    tip: 'ダイアログが開いていない限り Win + D の方がトグル動作するため便利です。',
    level: 1
  },
  {
    id: 'w11-10',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Alt', 'Tab'],
    title: 'アプリの高速切り替え',
    desc: '起動中のアプリ一覧を表示し、直前に使っていたウィンドウへ素早く切り替えます。',
    tip: 'Altを押したままTabを連打すると目的のウィンドウを選べます。Shiftを足すと逆順移動。',
    level: 3
  },
  {
    id: 'w11-11',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Alt', 'Esc'],
    title: 'ウィンドウを開いた順番で直接切り替え',
    desc: 'サムネイル一覧を出さずに、現在開いているウィンドウを直接次々と切り替えます。',
    tip: '画面のアニメーション待ち時間ゼロで切り替えたい玄人に人気です。',
    level: 1
  },
  {
    id: 'w11-12',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Tab'],
    title: 'タスクビュー（全ウィンドウ＆仮想デスクトップ一覧）',
    desc: '現在開いている全ウィンドウの俯瞰と、仮想デスクトップの追加・切り替えを行います。',
    tip: 'キーから指を離しても一覧が閉じないため、マウスでも選びやすいのが特徴です。',
    level: 3
  },
  {
    id: 'w11-13',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', '← / →'],
    title: 'ウィンドウを画面の左右半分にスナップ配置',
    desc: '現在のウィンドウを画面の左半分または右半分にピタッと50%整列させます。',
    tip: '左右に資料と作業画面を並べて見比べるときに必須のショートカットです。',
    level: 3
  },
  {
    id: 'w11-14',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', '↑ / ↓'],
    title: 'ウィンドウの最大化（↑）/ 元のサイズ・最小化（↓）',
    desc: 'Win + ↑ でウィンドウを最大化し、Win + ↓ でサイズ復元または最小化します。',
    tip: 'Win + ←/→ のあとに ↑/↓ を押すと画面の4分割（四隅への配置）も自在にできます。',
    level: 3
  },
  {
    id: 'w11-15',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Z'],
    title: 'スナップレイアウト（Windows 11専用）を開く',
    desc: '画面右上に2分割・3分割・4分割の整列レイアウト選択ポップアップを表示します。',
    tip: '矢印キーまたは数字キー（1〜6）で配置先をそのまま指定できます。',
    level: 3
  },
  {
    id: 'w11-16',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Shift', '← / →'],
    title: 'ウィンドウを別のモニター（ディスプレイ）へ移動',
    desc: 'マルチモニター環境で、アクティブなウィンドウを隣のディスプレイへ瞬時に移動します。',
    tip: 'マウスで画面端まで長距離ドラッグする手間がなくなります。',
    level: 3
  },
  {
    id: 'w11-17',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Shift', '↑'],
    title: '横幅はそのままにウィンドウを「縦方向だけ最大化」',
    desc: '現在の横幅を維持したまま、画面の上端から下端まで縦いっぱいに広げます。',
    tip: '縦に長いコードやWebページ、PDFを読むときに非常に重宝します。',
    level: 1
  },
  {
    id: 'w11-18',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Home'],
    title: '作業中以外の背景ウィンドウをすべて最小化',
    desc: '現在アクティブなウィンドウ1つだけを残し、後ろにある他のウィンドウを一括で最小化します。',
    tip: 'もう一度 Win + Home を押すと背景のウィンドウが元の位置に復帰します。',
    level: 2
  },
  {
    id: 'w11-19',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'L'],
    title: 'PCを即座にロック',
    desc: '画面をロックし、パスワード/PIN/顔認証のサインイン画面に戻します。',
    tip: '離席するときのセキュリティ対策として、席を立つ瞬間に押す習慣をつけましょう。',
    level: 3
  },
  {
    id: 'w11-20',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'I'],
    title: 'Windowsの「設定」を開く',
    desc: 'システム設定画面（Bluetooth、ディスプレイ、ネットワーク、Windows Updateなど）を直接起動します。',
    tip: 'スタートメニューから歯車アイコンを探す必要がなくなります。',
    level: 3
  },
  {
    id: 'w11-21',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'A'],
    title: 'クイック設定（Wi-Fi・Bluetooth・音量・明るさ）を開く',
    desc: '画面右下のWi-Fi、Bluetooth、音量、画面輝度、夜間モード等のパネルを開きます。',
    tip: 'イヤホンの接続切り替えや明るさ調整に1秒でアクセスできます。',
    level: 3
  },
  {
    id: 'w11-22',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'N'],
    title: '通知センターとカレンダーを開く',
    desc: '画面右下の時計部分をクリックした時と同じ、カレンダーと新着通知一覧を開きます。',
    tip: '作業中に今日の日付や曜日・予定をサッと確認したい時に便利です。',
    level: 2
  },
  {
    id: 'w11-23',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'X'],
    title: 'クイックリンクメニュー（管理者メニュー）を開く',
    desc: 'スタートボタン右クリックと同じ管理メニュー（ターミナル、デバイスマネージャー、ディスク管理等）を開きます。',
    tip: 'Win + X → U → U で最速シャットダウン、Win + X → U → R で再起動ができます！',
    level: 3
  },
  {
    id: 'w11-24',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Ctrl', 'Shift', 'Esc'],
    title: 'タスクマネージャーを直接起動',
    desc: 'フリーズしたアプリの強制終了やCPU・メモリ使用率を確認するタスクマネージャーを即座に開きます。',
    tip: 'Ctrl + Alt + Del を経由せずに一発で開ける必須ショートカットです。',
    level: 3
  },
  {
    id: 'w11-25',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Alt', 'F4'],
    title: 'アプリを終了する / シャットダウンメニュー',
    desc: '現在アクティブなアプリを終了します。デスクトップ上で押すとWindowsのシャットダウンダイアログが出ます。',
    tip: 'マウスで右上の「×」ボタンを狙う必要がなくなります。',
    level: 3
  },
  {
    id: 'w11-26',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'S'],
    title: 'Windows検索（アプリ・ファイル・Web検索）を開く',
    desc: 'PC内のアプリ起動やファイル検索を行う検索ウィンドウを開きます（Win + Q でも同じ）。',
    tip: '実は Win キーを単独で押してそのままアプリ名をタイピングしても検索できます。',
    level: 2
  },
  {
    id: 'w11-27',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'R'],
    title: '「ファイル名を指定して実行」を開く',
    desc: 'calc（電卓）、notepad（メモ帳）、mspaint、cmd、control（コンパネ）等をコマンドで即起動します。',
    tip: 'shell:startup と入力すればスタートアップフォルダを一発で開けます。',
    level: 2
  },
  {
    id: 'w11-28',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'P'],
    title: '外部ディスプレイの表示モード切り替え（複製 / 拡張）',
    desc: 'プロジェクターや外部モニター接続時に「PC画面のみ / 複製 / 拡張 / セカンドスクリーンのみ」を切り替えます。',
    tip: '会議室でモニターに繋いだのに映らない時はまず Win + P を押しましょう！',
    level: 3
  },
  {
    id: 'w11-29',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'K'],
    title: 'ワイヤレスディスプレイ・Bluetooth機器へ接続（キャスト）',
    desc: 'Miracast対応のワイヤレスモニターやテレビ、オーディオ機器への接続パネルを開きます。',
    tip: 'ケーブルなしで会議室モニターに画面投影するときに使います。',
    level: 1
  },
  {
    id: 'w11-30',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'Pause'],
    title: 'システムのバージョン・PCスペック情報を開く',
    desc: 'CPU、メモリ容量（RAM）、PC名、Windowsのバージョン・エディション画面を一発で開きます。',
    tip: '自分のPCのスペックを確認したい時に設定画面を探し回る必要がありません。',
    level: 1
  },
  {
    id: 'w11-31',
    category: 'win11',
    subcategory: 'システム・設定・セキュリティ',
    keys: ['Win', 'Ctrl', 'Shift', 'B'],
    title: 'グラフィックドライバーを再起動（画面フリーズ時の応急処置）',
    desc: 'PCの電源を切らずに、画面描画（GPUドライバー）だけをピッと鳴らしてリセット再起動します。',
    tip: '画面が真っ暗になったり表示が固まった時に、作業データを失わずに復旧できる最後の切り札です。',
    level: 1
  },
  {
    id: 'w11-32',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', 'Ctrl', 'D'],
    title: '新しい仮想デスクトップを作成',
    desc: '作業スペース（仮想デスクトップ）を新しく追加して切り替えます。',
    tip: '「仕事用」「調べ物用」「会議用」など画面を分けてスッキリ作業できます。',
    level: 2
  },
  {
    id: 'w11-33',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', 'Ctrl', '← / →'],
    title: '仮想デスクトップを左右に切り替え',
    desc: '作成済みの複数の仮想デスクトップ間を瞬時にスライド移動します。',
    tip: '作業中のウィンドウが開きすぎて散らかった時に一瞬で別画面へ移れます。',
    level: 2
  },
  {
    id: 'w11-34',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', 'Ctrl', 'F4'],
    title: '現在の仮想デスクトップを閉じる',
    desc: '今開いている仮想デスクトップを削除します（開いていたアプリは隣のデスクトップへ自動移動します）。',
    tip: 'アプリ自体は強制終了されないので安心して閉じられます。',
    level: 2
  },
  {
    id: 'w11-35',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', '. (ピリオド)'],
    title: '絵文字・顔文字・記号パネルを開く',
    desc: 'カーソル位置に絵文字（😊👍🎉）や顔文字、特殊記号（㎡、※、①、℃など）を入力するパネルを出します。',
    tip: 'Win + ;（セミコロン）でも同じパネルが開きます。記号タブはビジネス文書でも重宝します。',
    level: 3
  },
  {
    id: 'w11-36',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', 'H'],
    title: '音声入力（AIディクテーション）を起動',
    desc: 'マイクに向かって話すだけで高精度にテキスト文字起こし・自動句読点入力を行います。',
    tip: '長文メールの下書きや議事録メモでタイピング疲れを軽減できます。',
    level: 2
  },
  {
    id: 'w11-37',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', '数字 (1〜9)'],
    title: 'タスクバーのピン留めアプリを起動・切り替え',
    desc: 'タスクバーの左から数えて1〜9番目にピン留めされているアプリを起動・アクティブ化します。',
    tip: 'Win + Shift + 数字 を押すと、すでに開いているアプリの「新しい別ウィンドウ」を起動できます。',
    level: 2
  },
  {
    id: 'w11-38',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', 'T'],
    title: 'タスクバー上のアプリアイコンにフォーカスして選択',
    desc: 'タスクバーのアプリアイコンを矢印キーで順番に選び、Enterで開くことができます。',
    tip: 'Win + B なら画面右下のシステムトレイ（隠れているインジケーター）にフォーカスします。',
    level: 1
  },
  {
    id: 'w11-39',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', '+ (プラス)'],
    title: '拡大鏡（画面ズーム）を起動（Win+Escで終了）',
    desc: '画面全体をズームインして大きく表示します。Win + - で縮小、Win + Esc で拡大鏡を閉じます。',
    tip: 'プレゼンや画面共有中に、細かい文字や図の一部を聴衆に拡大して見せたい時に絶大な効果があります！',
    level: 2
  },
  {
    id: 'w11-40',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能・アクセシビリティ',
    keys: ['Win', 'U'],
    title: 'アクセシビリティ設定を開く（Win+Ctrl+Oで画面キーボード）',
    desc: 'テキストサイズの拡大、コントラスト、ナレーターなどのアクセシビリティ設定画面を開きます。',
    tip: 'Win + Ctrl + L で音声のリアルタイム字幕（ライブキャプション）も呼び出せます。',
    level: 1
  },

  // ==========================================
  // エクスプローラー (explorer) - 独立カテゴリ
  // ==========================================
  {
    id: 'exp-1',
    category: 'explorer',
    subcategory: '起動・タブ・ウィンドウ管理',
    keys: ['Win', 'E'],
    title: 'エクスプローラーを起動する',
    desc: 'どの画面からでもファイル・フォルダ管理画面（エクスプローラー）を新しく開きます。',
    tip: 'PC作業で最も頻繁に使うショートカットのひとつです。',
    level: 3
  },
  {
    id: 'exp-2',
    category: 'explorer',
    subcategory: '起動・タブ・ウィンドウ管理',
    keys: ['Ctrl', 'T'],
    title: '新しいフォルダー「タブ」を開く（Win11）',
    desc: 'Windows 11のエクスプローラー内で、ブラウザと同じように新しいタブを追加します。',
    tip: '複数フォルダを見比べたりコピペする時、ウィンドウを増やさず1つの画面内でスッキリ作業できます！',
    level: 3
  },
  {
    id: 'exp-3',
    category: 'explorer',
    subcategory: '起動・タブ・ウィンドウ管理',
    keys: ['Ctrl', 'W'],
    title: '現在のタブ（またはウィンドウ）を閉じる',
    desc: '今開いているエクスプローラーのタブを閉じます（最後の1タブの場合はウィンドウを閉じます）。',
    tip: 'ブラウザのタブ閉じ（Ctrl+W）と全く同じ感覚で使えます。',
    level: 3
  },
  {
    id: 'exp-4',
    category: 'explorer',
    subcategory: '起動・タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Tab'],
    title: '右隣のタブへ切り替え（Ctrl+Shift+Tabで左隣へ）',
    desc: 'エクスプローラー内で開いている複数のフォルダタブを順番に切り替えます。',
    tip: 'Ctrl + 数字（1〜8）で指定番号のタブへ直接ジャンプすることも可能です。',
    level: 3
  },
  {
    id: 'exp-5',
    category: 'explorer',
    subcategory: '起動・タブ・ウィンドウ管理',
    keys: ['Ctrl', 'N'],
    title: '現在と同じフォルダを「別ウィンドウ」でもう1つ開く',
    desc: '今開いているフォルダと全く同じ場所を表示した新しいエクスプローラーウィンドウを複製起動します。',
    tip: 'Win + ← / → で左右に並べてフォルダ間でファイルをドラッグ移動したい時に超便利です！',
    level: 3
  },
  {
    id: 'exp-6',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['Ctrl', 'Shift', 'N'],
    title: '新しいフォルダーを作成する',
    desc: '現在開いている場所（またはデスクトップ上）に新規フォルダを一瞬で作成します。',
    tip: '右クリック → 新規作成 → フォルダー の3ステップが1秒になります。',
    level: 3
  },
  {
    id: 'exp-7',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['F2'],
    title: 'ファイル・フォルダの名前を変更（リネーム）',
    desc: '選択中のアイテムの名前を編集状態にします（拡張子を除いたファイル名部分だけが自動選択されます）。',
    tip: 'リネーム中に Tab キーを押すと、そのまま下のファイルの名前変更へ連続で移動できます！',
    level: 3
  },
  {
    id: 'exp-8',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['Ctrl', 'Shift', 'C'],
    title: '選択したファイル・フォルダの「フルパス」をコピー',
    desc: '選択している項目の場所（例: `"C:\\Users\\...\\資料.xlsx"`）をテキストとしてコピーします。',
    tip: 'メールやチャットで共有サーバーの格納場所を伝える時や、ファイル選択画面で一発指定する時に大活躍します！',
    level: 3
  },
  {
    id: 'exp-9',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['Alt', 'Enter'],
    title: '選択したファイル・フォルダの「プロパティ」を開く',
    desc: 'ファイルサイズや作成日時、フォルダ内の総容量・ファイル数を確認するプロパティ画面を表示します。',
    tip: 'Altキーを押しながらファイルをダブルクリックしても同じようにプロパティが開きます！',
    level: 3
  },
  {
    id: 'exp-10',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['Delete'],
    title: 'ファイルをごみ箱へ削除（Ctrl + D でも同じ）',
    desc: '選択したファイルやフォルダをごみ箱へ移動します。',
    tip: 'キーボードのDeleteが遠い時は、左手だけで押せる Ctrl + D でも削除できます。',
    level: 3
  },
  {
    id: 'exp-11',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['Shift', 'Delete'],
    title: 'ごみ箱に入れずに「完全削除」する',
    desc: 'ごみ箱を経由せず、ストレージから直接ファイルを完全消去します。',
    tip: '復元できないため注意が必要ですが、大容量の不要ファイルを即座に空にしたい時に便利です。',
    level: 2
  },
  {
    id: 'exp-12',
    category: 'explorer',
    subcategory: 'フォルダ・ファイル作成＆操作',
    keys: ['Ctrl', 'ドラッグ'],
    title: 'ファイルをその場に複製コピー（Alt+ドラッグでショートカット作成）',
    desc: 'Ctrlを押しながらドラッグするとファイルのコピーを作成し、Altを押しながらドラッグするとショートカットを作成します。',
    tip: '同じフォルダ内でも別フォルダ間でも確実に「コピー」として動作させたい時に便利です。',
    level: 2
  },
  {
    id: 'exp-13',
    category: 'explorer',
    subcategory: '階層移動・アドレスバー・検索',
    keys: ['Alt', '↑'],
    title: '1つ上の階層（親フォルダ）へ移動',
    desc: '現在開いているフォルダの1つ上の親フォルダへ瞬時に上がります。',
    tip: '深いフォルダ階層から上のフォルダへ戻る時の基本ショートカットです。',
    level: 3
  },
  {
    id: 'exp-14',
    category: 'explorer',
    subcategory: '階層移動・アドレスバー・検索',
    keys: ['Alt', '← / →'],
    title: '直前に開いていたフォルダへ「戻る（←）」/「進む（→）」',
    desc: 'ブラウザの戻る・進むと同じように、フォルダの移動履歴を前後に行き来します（Backspaceでも戻る）。',
    tip: 'マウスの戻るボタンがない環境でも高速にフォルダ間を往復できます。',
    level: 3
  },
  {
    id: 'exp-15',
    category: 'explorer',
    subcategory: '階層移動・アドレスバー・検索',
    keys: ['Alt', 'D'],
    title: 'アドレスバー（パス入力欄）を選択（Ctrl+L / F4でも同じ）',
    desc: '上部のフォルダパス欄を全選択状態にします。そのまま Ctrl+C で現在のフォルダパスをコピーできます。',
    tip: 'アドレスバーに `cmd` や `powershell` と打ってEnterを押せば、そのフォルダでターミナルが即起動します！',
    level: 3
  },
  {
    id: 'exp-16',
    category: 'explorer',
    subcategory: '階層移動・アドレスバー・検索',
    keys: ['Ctrl', 'F'],
    title: 'フォルダ内のファイル検索ボックスへ移動（F3 / Ctrl+Eでも同じ）',
    desc: 'エクスプローラー右上の検索窓にカーソルを移動し、現在のフォルダ配下のファイルを絞り込み検索します。',
    tip: '`*.pdf` や `*.xlsx` のように拡張子で絞り込むのにも便利です。',
    level: 3
  },
  {
    id: 'exp-17',
    category: 'explorer',
    subcategory: '表示レイアウト切替・プレビュー',
    keys: ['Alt', 'P'],
    title: 'プレビューウィンドウの表示 / 非表示を切り替え',
    desc: '右側にプレビューパネルを表示し、PDF・画像・Word・Excel・テキストを開かずに中身を確認できます。',
    tip: '大量のファイルの中身を矢印キーで次々チェックする時に圧倒的な時短になります！',
    level: 3
  },
  {
    id: 'exp-18',
    category: 'explorer',
    subcategory: '表示レイアウト切替・プレビュー',
    keys: ['Alt', 'Shift', 'P'],
    title: '詳細ウィンドウ（メタデータ・容量・更新日時パネル）の表示切替',
    desc: '画面右側にファイルの解像度、撮影日、作成者、ファイルサイズなどの詳細情報パネルを表示します。',
    tip: '写真のサイズやドキュメントの最終保存者を確認するときに便利です。',
    level: 1
  },
  {
    id: 'exp-19',
    category: 'explorer',
    subcategory: '表示レイアウト切替・プレビュー',
    keys: ['Ctrl', 'Shift', '2 / 6'],
    title: '表示形式を「大アイコン（Ctrl+Shift+2）」/「詳細（Ctrl+Shift+6）」に一発切替',
    desc: '写真が見やすい「大アイコン（2）」と、更新日時・サイズ順で並べ替えやすい「詳細一覧（6）」を瞬時に切り替えます。',
    tip: '1:特大、2:大、3:中、4:小、5:一覧、6:詳細、7:並べて表示、8:コンテンツ にそれぞれ対応しています！',
    level: 2
  },
  {
    id: 'exp-20',
    category: 'explorer',
    subcategory: '表示レイアウト切替・プレビュー',
    keys: ['Ctrl', 'マウスホイール'],
    title: 'アイコンの表示サイズを無段階で拡大 / 縮小',
    desc: 'フォルダ内でCtrlを押しながらホイールを回すだけで、画像サムネイルの大きさを自在にズームできます。',
    tip: '画像フォルダから目的の写真を探すときに一番直感的で速い方法です。',
    level: 2
  },

  // ==========================================
  // Excel (excel)
  // ==========================================
  {
    id: 'ex-1',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', '↑ / ↓ / ← / →'],
    title: 'データの端まで一気にジャンプ移動',
    desc: 'データが入力されている連続範囲の端（先頭・末尾）のセルまで一瞬で移動します。',
    tip: '何千行ある表でも一瞬で一番下まで到達できる、Excel最重要の移動ワザです。',
    level: 3
  },
  {
    id: 'ex-2',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'Shift', '↑ / ↓ / ← / →'],
    title: 'データの端まで一気に範囲選択',
    desc: '現在のセルからデータが途切れる端のセルまでを一括で範囲選択します。',
    tip: '表のデータ列を丸ごとコピーしたり関数範囲に指定する時に必須です。',
    level: 3
  },
  {
    id: 'ex-3',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'Home'],
    title: '先頭セル（A1）へ一気に戻る',
    desc: 'シートのどこにいても、一番左上のA1セル（ウィンドウ枠固定時は左上端）へ戻ります。',
    tip: 'ファイルを保存して閉じる前に全シートで Ctrl + Home を押すのは実務の鉄則マナーです！',
    level: 3
  },
  {
    id: 'ex-4',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'End'],
    title: 'データが存在する最終セル（右下端）へ移動',
    desc: 'シート内でデータや書式が使われている一番右下の最終セルへジャンプします。',
    tip: 'Ctrl + Shift + End なら現在のセルから表の右下端までを一括選択できます。',
    level: 3
  },
  {
    id: 'ex-5',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Shift', 'Space'],
    title: '現在の「行」を丸ごと選択',
    desc: '選択中のセルが含まれる横1行すべてを選択します。',
    tip: 'そのまま Ctrl + 「+」で行挿入、Ctrl + 「-」で行削除に繋げるとマウスいらず！',
    level: 3
  },
  {
    id: 'ex-6',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'Space'],
    title: '現在の「列」を丸ごと選択',
    desc: '選択中のセルが含まれる縦1列すべてを選択します。',
    tip: '日本語入力がONだと半角スペース入力になる場合があるため、半角英数モードで使いましょう。',
    level: 3
  },
  {
    id: 'ex-7',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'A'],
    title: '現在の表全体を選択（もう一度押すとシート全体）',
    desc: '表の中のセルで押すと連続するデータ範囲（表全体）を選択し、もう1回押すとシート全体を選択します。',
    tip: 'Ctrl + Shift + *（アスタリスク）でも現在の表全体を一発選択できます。',
    level: 3
  },
  {
    id: 'ex-8',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'PageUp / PageDown'],
    title: '左右のワークシートへ切り替え',
    desc: 'Ctrl + PageDown で右隣のシートへ、Ctrl + PageUp で左隣のシートへ瞬時に移動します。',
    tip: 'Ctrl + Shift + PageDown / PageUp なら複数シートをまとめてグループ選択できます。',
    level: 3
  },
  {
    id: 'ex-9',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'G'],
    title: '「ジャンプ」ダイアログを開く（F5でも同じ）',
    desc: '指定セルへの移動や、「セル選択(S)」から空白セル・数式セル・可視セルだけを一括選択します。',
    tip: 'Ctrl + G → Alt + S → K → Enter で「表の中の空白セルだけを一括選択」する実務テクニックは超有名です！',
    level: 2
  },
  {
    id: 'ex-10',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Alt', '; (セミコロン)'],
    title: '見えているセル（可視セル）だけを選択',
    desc: '非表示にした行・列や折りたたんだグループを除外し、画面に表示されているセルだけを選択対象にします。',
    tip: '集計行だけをコピーしたいのに隠れている行まで一緒にコピーされてしまう問題を一発解決します！',
    level: 2
  },
  {
    id: 'ex-11',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', '. (ピリオド)'],
    title: '選択範囲の四隅（アクティブセル）を時計回りに移動',
    desc: '広い範囲を選択している時、選択範囲の左上→右上→右下→左下へと視点をジャンプします。',
    tip: '下まで範囲選択しすぎた時に、選択開始側ではなく選択終了側を微調整したい時に必須です。',
    level: 1
  },
  {
    id: 'ex-12',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Alt', 'PageDown / PageUp'],
    title: '画面を1画面分「右（PageDown）/ 左（PageUp）」へ横スクロール',
    desc: '通常のPageDown/Upは上下スクロールですが、Altを足すと横長シートを左右に1画面ずつ移動します。',
    tip: '列数が多いスケジュール表や管理表を見る時に便利です。',
    level: 1
  },
  {
    id: 'ex-13',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['F2'],
    title: 'セル内の編集モードに入る',
    desc: '選択中のセルの末尾にカーソルを表示し、中身を直接編集できるようにします。',
    tip: 'ダブルクリック不要で文字の追記や参照先セルの色分け確認ができます。',
    level: 3
  },
  {
    id: 'ex-14',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Alt', 'Enter'],
    title: 'セル内で改行する',
    desc: '1つのセルの中で文章を折り返して改行します。',
    tip: '通常のEnterだと下のセルへ移動してしまいますが、Alt + Enterならセル内改行になります。',
    level: 3
  },
  {
    id: 'ex-15',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'D'],
    title: '上のセルの内容・数式をコピー（下方向へフィル）',
    desc: '1つ上のセルに入力されている値や数式を、現在のセルへ瞬時に複写します。',
    tip: '複数行を選択してから押すと、一番上のセルの内容を選択範囲すべてに一括コピーします。',
    level: 3
  },
  {
    id: 'ex-16',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'R'],
    title: '左のセルの内容・数式をコピー（右方向へフィル）',
    desc: '1つ左のセルに入力されている値や数式を、現在のセルへ複写します。',
    tip: 'Down（下）の D、Right（右）の R とセットで覚えましょう。',
    level: 3
  },
  {
    id: 'ex-17',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', '; (セミコロン)'],
    title: '今日の日付を入力',
    desc: '現在のセルに本日の日付（例: 2026/11/05）を固定値として一発入力します。',
    tip: 'TODAY()関数と違い、翌日ファイルを開き直しても日付が勝手に変わりません。',
    level: 3
  },
  {
    id: 'ex-18',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', ': (コロン)'],
    title: '現在の時刻を入力',
    desc: '現在のセルに今の時刻（例: 14:30）を固定値として一発入力します。',
    tip: '作業開始・終了時刻の記録やタイムスタンプ入力に最適です。',
    level: 2
  },
  {
    id: 'ex-19',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'Enter'],
    title: '選択した複数セルに同じ値・数式を一括同時入力',
    desc: '複数セルを選択した状態で文字や数式を打ち、Ctrl + Enter で確定すると全セルに同時入力されます。',
    tip: 'また、単一セルで Ctrl + Enter を押すと「確定後に下のセルへ移動せずその場に留まる」ため書式調整に便利です！',
    level: 3
  },
  {
    id: 'ex-20',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'E'],
    title: 'フラッシュフィル（法則を自動認識して一括入力）',
    desc: '隣の列の入力例から法則（姓と名の分割や結合、抽出など）を認識し、残り全行を自動入力します。',
    tip: '関数を書かずに「氏名から苗字だけ抜き出す」「住所から都道府県だけ抜く」が一瞬で終わります！',
    level: 3
  },
  {
    id: 'ex-21',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Alt', '↓'],
    title: 'ドロップダウンリスト（入力規則・オートコンプリート）を開く',
    desc: 'セルに設定されたプルダウンリストや、同じ列の既存入力候補一覧をキーボードで開きます。',
    tip: 'リストが設定されたアンケート表や管理表をマウスなしで高速入力できます。',
    level: 2
  },
  {
    id: 'ex-22',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'Shift', '2 (")'],
    title: '上のセルの「値（計算結果）」だけをコピーして編集状態にする',
    desc: '上のセルに数式や罫線が入っていても、書式や数式はコピーせず「表示されている値」だけを転写します。',
    tip: 'Ctrl + D と違い、罫線が崩れず編集モードのまま追記できる隠れた名機能です。',
    level: 1
  },
  {
    id: 'ex-23',
    category: 'excel',
    subcategory: '数式・関数・名前定義',
    keys: ['F4'],
    title: '絶対参照（$A$1）の切り替え / 直前の操作の繰り返し',
    desc: '数式編集中は「$A$1 → A$1 → $A1 → A1」を切り替え、通常時は直前の操作（色塗りや行挿入等）を繰り返します。',
    tip: '1つの機能で2役こなす、Excelユーザー全員が毎日使う神キーです。',
    level: 3
  },
  {
    id: 'ex-24',
    category: 'excel',
    subcategory: '数式・関数・名前定義',
    keys: ['Alt', 'Shift', '= (イコール)'],
    title: 'オートSUM（SUM関数を自動挿入）',
    desc: '隣接する数値範囲を自動判定して `=SUM(...)` を一瞬で入力します。',
    tip: '合計を出したいデータ範囲＋空白の合計行・列をまとめて選択して押すと、縦計・横計をすべて1秒で同時計算できます！',
    level: 3
  },
  {
    id: 'ex-25',
    category: 'excel',
    subcategory: '数式・関数・名前定義',
    keys: ['Shift', 'F3'],
    title: '「関数の挿入」ダイアログを開く',
    desc: '数式バー左の「fx」ボタンを押した時と同じ、関数検索・引数ガイド画面を開きます。',
    tip: '引数の順番がうろ覚えな関数（VLOOKUPやXLOOKUPなど）を入力する時に安心です。',
    level: 2
  },
  {
    id: 'ex-26',
    category: 'excel',
    subcategory: '数式・関数・名前定義',
    keys: ['Ctrl', 'Shift', '@ (`)'],
    title: 'シート内のすべての「数式そのもの」を一覧表示',
    desc: '計算結果の値ではなく、セルに入力されている数式文字列（`=SUM(...)`等）をシート全体で表示切り替えします。',
    tip: 'どこに数式が入っていてどこが手入力ベタ打ち数値なのかを一目で監査できます。もう一度押すと戻ります。',
    level: 2
  },
  {
    id: 'ex-27',
    category: 'excel',
    subcategory: '数式・関数・名前定義',
    keys: ['Ctrl', 'F3'],
    title: '「名前の管理」を開く（Ctrl+Shift+F3で一括定義）',
    desc: 'セル範囲に付けた名前定義の一覧・編集画面を開きます。数式内では F3 で名前を呼び出せます。',
    tip: '表全体を選んで Ctrl + Shift + F3 を押せば、見出し行の名前で一括して名前定義を作れます。',
    level: 1
  },
  {
    id: 'ex-28',
    category: 'excel',
    subcategory: '数式・関数・名前定義',
    keys: ['Alt', 'M → P / A'],
    title: '数式の参照元を矢印でトレース表示（M→P）/ 矢印消去（M→A）',
    desc: '選択中の数式がどのセルを参照して計算しているかを青い矢印で可視化します。',
    tip: '他人が作った複雑なExcelシートの計算ロジックを解読する時の必須コマンドです。',
    level: 2
  },
  {
    id: 'ex-29',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Alt', 'V'],
    title: '「形式を選択して貼り付け」ダイアログを開く',
    desc: '値のみ（V）、数式のみ（F）、書式のみ（T）、列幅（W）、演算、行列の入れ替え（E）などをキーボードで実行します。',
    tip: 'Ctrl + Alt + V → E → Enter で「縦と横（行と列）を入れ替えて貼り付け」が瞬時にできます！',
    level: 3
  },
  {
    id: 'ex-30',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', 'V'],
    title: '値のみ貼り付け（Microsoft 365 / 最新Excel対応）',
    desc: 'コピーしたセルの数式や罫線・背景色を持たせず、「値だけ」を直接貼り付けます。',
    tip: '従来の Ctrl + Alt + V → V → Enter がワンアクションに短縮されました。',
    level: 3
  },
  {
    id: 'ex-31',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', '1 (テンキー以外)'],
    title: '「セルの書式設定」ダイアログを開く',
    desc: '表示形式、配置、フォント、罫線、塗りつぶしを詳細設定する画面を一発で開きます。',
    tip: 'リボンメニューから探すより圧倒的に速く、あらゆる書式設定の起点になります。',
    level: 3
  },
  {
    id: 'ex-32',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', '5 (テンキー以外)'],
    title: '取り消し線のON / OFF切り替え',
    desc: '選択したセルまたは文字に中央の取り消し線（見え消し線）を引きます。',
    tip: 'ToDoリストや課題管理表で完了した項目を消すときに毎日使えます！',
    level: 3
  },
  {
    id: 'ex-33',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', '1 (!)'],
    title: '数値を「3桁カンマ区切り（#,##0）」表示にする',
    desc: '選択した数値セルに千単位のカンマ（例: 1,234,567）を一発で設定します。',
    tip: '金額や数量の表を見やすく整えるときに毎回使えます。',
    level: 3
  },
  {
    id: 'ex-34',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', '3 (#)'],
    title: '数値を「日付（yyyy/m/d）」表示形式にする',
    desc: '日付が「45601」のようなシリアル値（ただの数字）になってしまったセルを一発で日付表示に直します。',
    tip: '日付セルに数値を貼って変な数字になった時の特効薬です！',
    level: 2
  },
  {
    id: 'ex-35',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', '4 ($)'],
    title: '数値を「通貨（¥1,234）」表示形式にする',
    desc: '選択した数値セルに円マーク（¥）と3桁カンマを一発で付与します。',
    tip: '見積書や売上表の作成時に便利です。',
    level: 2
  },
  {
    id: 'ex-36',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', '5 (%)'],
    title: '数値を「パーセント（%）」表示形式にする',
    desc: '0.15 などの小数を「15%」のパーセント表記に一発で変更します。',
    tip: '達成率や前年比の列を設定するときに一瞬で終わります。',
    level: 2
  },
  {
    id: 'ex-37',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', '^ (~)'],
    title: '表示形式を「標準」にリセットする',
    desc: '日付や通貨、パーセントなどが設定されたセルの表示形式を、初期状態の「標準」に戻します。',
    tip: '勝手に日付に変換されてしまった数値を元の数字に戻したい時に使います。',
    level: 2
  },
  {
    id: 'ex-38',
    category: 'excel',
    subcategory: '貼り付け・書式・表示形式',
    keys: ['Ctrl', 'Shift', '6 (&) / _ (アンダースコア)'],
    title: '選択範囲に「外枠罫線」を引く（&）/ 罫線をすべて消す（_）',
    desc: 'Ctrl+Shift+6(&) で外枠に実線を引き、Ctrl+Shift+ろ(_) で選択範囲の罫線をすべて消去します。',
    tip: 'ダイアログを開かずに枠線の追加・クリアができます。',
    level: 1
  },
  {
    id: 'ex-39',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Ctrl', '+ (プラス)'],
    title: 'セル・行・列の挿入',
    desc: '選択中のセル・行・列の手前（上または左）に新しい空白を挿入します。',
    tip: 'メインキーボードの場合は Ctrl + Shift + ; (セミコロン) で「+」を入力します。',
    level: 3
  },
  {
    id: 'ex-40',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Ctrl', '- (マイナス)'],
    title: 'セル・行・列の削除',
    desc: '選択中のセル・行・列を詰めて削除します。',
    tip: 'Shift + Space（行選択）→ Ctrl + -（行削除）のコンボは超高速です。',
    level: 3
  },
  {
    id: 'ex-41',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Ctrl', '9 / Shift+9'],
    title: '選択した「行」を非表示にする（Ctrl+9）/ 再表示（Ctrl+Shift+9）',
    desc: '不要な行を一時的に隠します。上下の行をまたいで選択し Ctrl + Shift + 9 で再表示します。',
    tip: 'テンキーではなくキーボード上部の数字「9」を使います。',
    level: 2
  },
  {
    id: 'ex-42',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Ctrl', '0 (ゼロ)'],
    title: '選択した「列」を非表示にする',
    desc: '選択している縦の列を一時的に非表示にします（再表示は Alt → H → O → U → L）。',
    tip: '印刷時に見せたくない計算用の作業列をサッと隠すときに便利です。',
    level: 2
  },
  {
    id: 'ex-43',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Alt', 'Shift', '→ / ←'],
    title: '行・列を「グループ化」する（→）/ グループ化解除（←）',
    desc: '選択した行や列に「＋ / －」の折りたたみボタン（アウトライン）を設置します。',
    tip: '単なる非表示（Ctrl+9/0）だと他の人が気づきにくいため、実務ではグループ化（Alt+Shift+→）の方が圧倒的に好まれます！',
    level: 3
  },
  {
    id: 'ex-44',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Alt', 'H → O → I'],
    title: '列幅の自動調整（文字数にピッタリ合わせる）',
    desc: '選択している列の横幅を、入力されているデータの最大長さに自動フィットさせます。',
    tip: 'Altキーから順番に H, O, I とポンポン押すだけで「###」表示を一瞬で解消できます（行の高さ自動調整は Alt→H→O→A）。',
    level: 3
  },
  {
    id: 'ex-45',
    category: 'excel',
    subcategory: '行列操作・非表示・グループ化',
    keys: ['Alt', 'W → F → F'],
    title: 'ウィンドウ枠の固定 / 解除',
    desc: '現在のセルの上側と左側を見出しとして固定し、スクロールしても常に見えるようにします。',
    tip: 'すでに固定されている状態で押すと固定解除になります。Alt → W → F → F のリズムで覚えましょう！',
    level: 3
  },
  {
    id: 'ex-46',
    category: 'excel',
    subcategory: 'テーブル・フィルタ・ピボット・シート',
    keys: ['Ctrl', 'Shift', 'L'],
    title: 'フィルター（オートフィルタ）のON / OFF切り替え',
    desc: '表の見出し行に絞り込み・並び替え用のドロップダウン矢印（▼）を設置・解除します。',
    tip: '見出しセル上で Alt + ↓ を押すと、マウスを使わずにフィルターメニューを開いて絞り込みできます！',
    level: 3
  },
  {
    id: 'ex-47',
    category: 'excel',
    subcategory: 'テーブル・フィルタ・ピボット・シート',
    keys: ['Ctrl', 'T'],
    title: 'データ範囲を「テーブル」に変換',
    desc: '表を構造化参照・自動縞模様・フィルタ付きのExcelテーブルに変換します（Ctrl + L でも同じ）。',
    tip: '末尾に行を追加しても数式や書式が自動拡張されるため、データベース管理の基本テクニックです。',
    level: 3
  },
  {
    id: 'ex-48',
    category: 'excel',
    subcategory: 'テーブル・フィルタ・ピボット・シート',
    keys: ['Alt', 'N → V → T'],
    title: 'ピボットテーブルを挿入',
    desc: '現在の表データからクロス集計を行うピボットテーブル作成画面を一発で呼び出します。',
    tip: '旧来のショートカット Alt → D → P でもピボットテーブルウィザードを起動できます。',
    level: 2
  },
  {
    id: 'ex-49',
    category: 'excel',
    subcategory: 'テーブル・フィルタ・ピボット・シート',
    keys: ['Alt', 'F1'],
    title: '選択データから即座にグラフを作成（F11で別シート作成）',
    desc: '表を選択して押すだけで、現在のシート上に標準の棒グラフ等を1秒で自動生成します。',
    tip: 'F11 単独押しなら、グラフ専用の新しいシートを追加して全画面グラフを作成します。',
    level: 2
  },
  {
    id: 'ex-50',
    category: 'excel',
    subcategory: 'テーブル・フィルタ・ピボット・シート',
    keys: ['Shift', 'F11'],
    title: '新しいワークシートを挿入（Alt→H→O→Rでシート名変更）',
    desc: '現在のシートの左隣に新規ワークシートを1枚追加します。',
    tip: '追加したあと Alt → H → O → R と押せば、マウスを使わずにそのままシート名を変更できます！',
    level: 2
  },
  {
    id: 'ex-51',
    category: 'excel',
    subcategory: 'テーブル・フィルタ・ピボット・シート',
    keys: ['Shift', 'F2'],
    title: 'セルに「メモ（旧コメント）」を挿入・編集',
    desc: 'セルの右上に赤い三角マークが付く従来の「メモ」を挿入・編集します（モダンコメントは Ctrl + Alt + M）。',
    tip: '補足説明や注意事項をセルに書き残したい時にすぐ呼び出せます。',
    level: 2
  },

  // ==========================================
  // Word (word)
  // ==========================================
  {
    id: 'wd-1',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'B'],
    title: '太字（ボールド）のON / OFF',
    desc: '選択したテキストを太字にするか、太字を解除します。',
    tip: 'Bold の B。ExcelやPowerPoint、Webエディタでも共通です。',
    level: 3
  },
  {
    id: 'wd-2',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'U'],
    title: '下線（アンダーライン）のON / OFF',
    desc: '選択したテキストに下線を引くか、下線を解除します。',
    tip: 'Underline の U。空白を除いて単語だけに下線を引きたい時は Ctrl + Shift + W です。',
    level: 3
  },
  {
    id: 'wd-3',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Shift', 'D'],
    title: '二重下線を引く',
    desc: '選択したテキストに二重下線を引きます。',
    tip: '契約書や見積書の合計金額欄、重要箇所の強調によく使われます。',
    level: 2
  },
  {
    id: 'wd-4',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'I'],
    title: '斜体（イタリック）のON / OFF',
    desc: '選択したテキストを斜め（イタリック体）にします。',
    tip: 'Italic の I。欧文の引用や変数表記に使われます。',
    level: 2
  },
  {
    id: 'wd-5',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'D'],
    title: '「フォント」詳細設定ダイアログを開く（Ctrl+Shift+Fでも可）',
    desc: 'フォント種類、サイズ、文字色、取り消し線、文字間隔、網掛けなどを設定する画面を開きます。',
    tip: 'Excelでは上のセルコピーですが、Wordではフォント画面が開きます。',
    level: 2
  },
  {
    id: 'wd-6',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Space'],
    title: '文字の書式（装飾）をすべてクリアして初期状態に戻す',
    desc: '選択した文字についたフォントサイズ、色、太字、蛍光ペンなどの直接装飾を一発でリセットします。',
    tip: 'コピペで混ざってしまった変なフォントや文字サイズを瞬時に標準へ戻せる神ショートカットです。',
    level: 3
  },
  {
    id: 'wd-7',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Shift', '> / <'],
    title: 'フォントサイズを段階的に拡大（>）/ 縮小（<）',
    desc: '選択したテキストの文字サイズを規定の段階（10.5→11→12→14...）で大きくまたは小さくします。',
    tip: 'Ctrl + ] / [ を使うと、より細かく「1ポイント（1pt）単位」で拡大・縮小できます！',
    level: 3
  },
  {
    id: 'wd-8',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Shift', '+ / Ctrl + ='],
    title: '上付き文字（Ctrl+Shift++）/ 下付き文字（Ctrl+=）',
    desc: '注釈番号（¹ ²）や平方メートル（m²）の上付き文字、化学式（H₂O）の下付き文字に切り替えます。',
    tip: 'もう一度押すと通常の文字サイズに戻ります。',
    level: 1
  },
  {
    id: 'wd-9',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Shift', 'F3'],
    title: '英字の大文字・小文字を切り替え',
    desc: '選択した英単語を「すべて大文字 → すべて小文字 → 先頭だけ大文字」の順に切り替えます。',
    tip: 'CapsLockを間違えて打ってしまった英文も打ち直す必要がありません。',
    level: 2
  },
  {
    id: 'wd-10',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Shift', 'C / V'],
    title: '書式のコピー（Ctrl+Shift+C）と貼り付け（Ctrl+Shift+V）',
    desc: 'ハケのアイコン（書式のコピー/貼り付け）と同じく、文字デザインだけを別箇所にコピー＆適用します。',
    tip: '一度 Ctrl+Shift+C すれば、何度でも別箇所に Ctrl+Shift+V で同じデザインを連続適用できます。',
    level: 3
  },
  {
    id: 'wd-11',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'E'],
    title: '段落を「中央揃え」にする',
    desc: 'カーソルがある段落（または選択範囲）をページ中央に配置します。',
    tip: '文書のタイトルや表紙を作成する時に一瞬で中央寄せできます。',
    level: 3
  },
  {
    id: 'wd-12',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'R'],
    title: '段落を「右揃え」にする',
    desc: 'カーソルがある段落を右端に揃えて配置します。',
    tip: 'ビジネス文書の日付や作成者名・結語（以上、敬具など）を右寄せする時に必須です！',
    level: 3
  },
  {
    id: 'wd-13',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'L'],
    title: '段落を「左揃え」にする',
    desc: '中央揃えや右揃えにした段落を、通常の左揃えに戻します。',
    tip: 'Left（左）の L、Right（右）の R、Center（中央）は C がコピーなので E と覚えましょう。',
    level: 3
  },
  {
    id: 'wd-14',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'J'],
    title: '段落を「両端揃え」にする（Ctrl+Shift+Jで均等割り付け）',
    desc: '複数行にわたる文章の右端が綺麗に揃うよう文字間隔を調整します。Ctrl+Shift+J なら1行を幅いっぱいに均等配置します。',
    tip: '報告書や契約書をプロっぽく整然と見せるための必須テクニックです。',
    level: 2
  },
  {
    id: 'wd-15',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'Q'],
    title: '段落書式（インデント・配置・行間）をすべてクリア',
    desc: 'Ctrl + Space が「文字の装飾」を消すのに対し、Ctrl + Q は「段落の配置やインデント設定」を初期状態に戻します。',
    tip: 'インデントや箇条書きがグチャグチャになって直せない時は Ctrl + Q で一発解決します！',
    level: 2
  },
  {
    id: 'wd-16',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'Enter'],
    title: '改ページを挿入',
    desc: '現在のカーソル位置でページを区切り、次のページの先頭へ移動します。',
    tip: 'Enterキーを連打して次のページへ送ると後からズレる原因になるため、必ず Ctrl+Enter を使いましょう！',
    level: 3
  },
  {
    id: 'wd-17',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Shift', 'Enter'],
    title: '段落を変えずに改行（行区切り）',
    desc: '新しい段落を作らず、同じ段落・同じ箇条書きの中で次の行へ折り返します。',
    tip: '番号付きリスト（1. 2. 3.）の途中で番号を増やさずに2行目を書きたい時に超便利です。',
    level: 3
  },
  {
    id: 'wd-18',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', 'M / Shift+M'],
    title: '段落のインデントを増やす（Ctrl+M）/ 減らす（Ctrl+Shift+M）',
    desc: '段落全体の左端を1字分ずつ右へ字下げ（インデント）したり、元に戻したりします。',
    tip: '2行目以降だけを字下げする「ぶら下げインデント」は Ctrl + T（解除は Ctrl + Shift + T）です！',
    level: 2
  },
  {
    id: 'wd-19',
    category: 'word',
    subcategory: '段落・配置・インデント・改ページ',
    keys: ['Ctrl', '1 / 2 / 5'],
    title: '行間を 1行（Ctrl+1）/ 2行（Ctrl+2）/ 1.5行（Ctrl+5）に変更',
    desc: '段落の行間スペースをワンタッチで切り替えます（Ctrl + 0 で段落前の間隔を追加/削除）。',
    tip: '文章が詰まって読みにくい時は Ctrl + 5（1.5行間隔）にすると一気に読みやすくなります。',
    level: 2
  },
  {
    id: 'wd-20',
    category: 'word',
    subcategory: '見出し・スタイル・脚注・表操作',
    keys: ['Ctrl', 'Alt', '1 / 2 / 3'],
    title: '見出し1 / 見出し2 / 見出し3 スタイルを適用',
    desc: '現在の行にWord標準の「見出し1〜3」スタイルを一発で設定します（本文に戻す時は Ctrl + Shift + N）。',
    tip: '見出しスタイルを使うと、左側のナビゲーション目次や自動目次生成がそのまま使えて一石三鳥です。',
    level: 3
  },
  {
    id: 'wd-21',
    category: 'word',
    subcategory: '見出し・スタイル・脚注・表操作',
    keys: ['Ctrl', 'Shift', 'L'],
    title: '箇条書き（・）を開始',
    desc: '現在の段落を中黒（・）付きの箇条書きリストに変換します。',
    tip: 'Tabキーで階層を下げ、Shift + Tab で階層を上げられます。',
    level: 2
  },
  {
    id: 'wd-22',
    category: 'word',
    subcategory: '見出し・スタイル・脚注・表操作',
    keys: ['Alt', 'Shift', '↑ / ↓'],
    title: '段落（または表の行）を上下に入れ替え移動',
    desc: 'カーソルがある段落や箇条書き、表の行を切り取り＆貼り付けなしでそのまま上下へスライド移動します。',
    tip: '見出し行で実行すると配下の本文ごと移動でき、Wordの表の中で実行すると行の順番を綺麗に入れ替えられます！',
    level: 3
  },
  {
    id: 'wd-23',
    category: 'word',
    subcategory: '見出し・スタイル・脚注・表操作',
    keys: ['Ctrl', 'Shift', 'Enter'],
    title: '表を上下に分割する / 段組み区切りを挿入',
    desc: 'Wordの表（テーブル）の中で押すと、現在の行の上で表を2つにパカッと分割します。',
    tip: '大きな表を2つに切り分けたい時、コピペ不要で1秒で分割できる裏ワザです。',
    level: 2
  },
  {
    id: 'wd-24',
    category: 'word',
    subcategory: '見出し・スタイル・脚注・表操作',
    keys: ['Ctrl', 'Alt', 'F / D'],
    title: '脚注を挿入（Ctrl+Alt+F）/ 文末脚注を挿入（Ctrl+Alt+D）',
    desc: 'ページ下部に注釈を入れる「脚注」や、文書末尾にまとめる「文末脚注」を自動採番で挿入します。',
    tip: '論文・レポート・調査報告書の執筆時にリボンを探す手間がなくなります。',
    level: 1
  },
  {
    id: 'wd-25',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['F8'],
    title: '拡張選択モード（押すたびに 単語 → 文 → 段落 → 全文 を選択）',
    desc: 'F8を2回押すと単語、3回で1文（句点まで）、4回で1段落を選択します（Shift+F8で縮小、Escで解除）。',
    tip: 'マウスドラッグで行き過ぎたり足りなかったりするストレスなく、正確に1文・1段落を選択できます！',
    level: 2
  },
  {
    id: 'wd-26',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'Shift', 'F8'],
    title: '矩形選択（縦方向のブロック選択）モードを開始',
    desc: '行をまたいで縦1列（四角形ブロック状）に文字を選択します（Altを押しながらマウスドラッグでも可能）。',
    tip: '各行の先頭についた不要な記号やスペースだけを縦にまとめて削除したい時に大活躍します。',
    level: 1
  },
  {
    id: 'wd-27',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Shift', 'F5'],
    title: '直前に編集していた場所へジャンプ',
    desc: '文書内の別のページを見に行ったあと、先ほどまで文字を打っていた元のカーソル位置へ瞬時に戻ります。',
    tip: 'ファイルを開いた直後に Shift + F5 を押すと「前回保存した時の最後の編集位置」へ飛べます！',
    level: 3
  },
  {
    id: 'wd-28',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'K'],
    title: 'ハイパーリンクの挿入・編集',
    desc: '選択したテキストにWebサイトのURLや別ファイル、文書内の見出しへのリンクを設定します。',
    tip: 'Wordだけでなく、Excel・PowerPoint・Outlook・Teams・Slack等でも共通です！',
    level: 3
  },
  {
    id: 'wd-29',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['F7'],
    title: 'スペルチェックと文章校正（エディター）を実行',
    desc: '誤字脱字、表記ゆれ、文法ミスをチェックするエディターペインを開きます（Shift + F7 で類義語辞典）。',
    tip: '提出・印刷前の最終チェックとして必ず一度押しておきたいキーです。',
    level: 2
  },
  {
    id: 'wd-30',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'Shift', 'G'],
    title: '文字数カウント（行数・単語数・段落数）を表示',
    desc: '文書全体または選択範囲の文字数（スペース含める/含めない）・行数・ページ数を瞬時に表示します。',
    tip: '文字数制限のあるレポートや原稿を執筆するときに一瞬で確認できます。',
    level: 2
  },
  {
    id: 'wd-31',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'Shift', 'E'],
    title: '「変更履歴の記録」のON / OFF切り替え',
    desc: '文書の添削・赤入れを可視化する「変更履歴の記録」モードを開始または停止します。',
    tip: '契約書レビューや原稿チェックを始める時にすぐ切り替えられます。',
    level: 2
  },
  {
    id: 'wd-32',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'Alt', 'M'],
    title: 'コメントを挿入',
    desc: '選択箇所に対して校閲用の吹き出しコメントを追加します。',
    tip: 'GoogleドキュメントやExcel、PowerPointでも共通して使えるショートカットです。',
    level: 2
  },
  {
    id: 'wd-33',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'Shift', '8 (*)'],
    title: '編集記号（スペース・改行・タブ・段落記号）の表示切り替え',
    desc: '空白スペースやタブ、改ページ位置などの見えない記号を画面上に表示・非表示します。',
    tip: 'レイアウト崩れの原因（余計な全角スペースやタブ）を特定するときに便利です。',
    level: 1
  },
  {
    id: 'wd-34',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['Ctrl', 'Alt', 'S'],
    title: 'ドキュメント画面を上下2つに分割 / 分割解除',
    desc: '同じWord文書の離れたページ（例: 1ページ目の目次と20ページ目の本文）を上下に並べて同時表示します。',
    tip: '長い文書の前後の整合性を見比べながら執筆するときに非常に便利です。',
    level: 2
  },
  {
    id: 'wd-35',
    category: 'word',
    subcategory: '選択・移動・校閲・フィールド',
    keys: ['F9'],
    title: 'フィールド（目次・相互参照・図表番号）を最新状態に更新',
    desc: '選択した自動目次やページ番号参照などのフィールド情報を再計算して最新化します。',
    tip: 'Ctrl + A（全選択）→ F9 を押せば、文書内のすべての目次・相互参照を一括で最新に更新できます！',
    level: 2
  },

  // ==========================================
  // PowerPoint (powerpoint)
  // ==========================================
  {
    id: 'pp-1',
    category: 'powerpoint',
    subcategory: 'スライド管理・複製・作成',
    keys: ['Ctrl', 'M'],
    title: '新しいスライドを追加する',
    desc: '現在選択しているスライドの直後に、新しいスライドを1枚挿入します。',
    tip: 'Ctrl + N は「新しいプレゼンテーションファイル作成」なので、スライド追加は Ctrl + M と覚えましょう！',
    level: 3
  },
  {
    id: 'pp-2',
    category: 'powerpoint',
    subcategory: 'スライド管理・複製・作成',
    keys: ['Ctrl', 'D'],
    title: '図形・テキストボックス・スライドをその場に「複製」',
    desc: 'コピー（Ctrl+C）と貼り付け（Ctrl+V）を1回で同時に行い、選択中の図形やスライドを複製します。',
    tip: '複製した図形を適切な間隔に動かしてから再び Ctrl + D を連打すると、等間隔で図形を綺麗に量産できます！',
    level: 3
  },
  {
    id: 'pp-3',
    category: 'powerpoint',
    subcategory: 'スライド管理・複製・作成',
    keys: ['Alt', 'Shift', '↑ / ↓'],
    title: '箇条書きの行（または左欄のスライド順序）を上下に入れ替え',
    desc: 'テキストボックス内の箇条書き項目や、スライド一覧の順番をドラッグなしで上下に移動します。',
    tip: 'Wordと共通の操作感でアウトラインの構成を素早く入れ替えられます。',
    level: 2
  },
  {
    id: 'pp-4',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['Ctrl', 'G'],
    title: '選択した複数の図形を「グループ化」する',
    desc: '複数の図形やテキストボックスを1つのグループにまとめ、一緒に移動・リサイズできるようにします。',
    tip: 'Group の G。配置が決まった図形をロック感覚でまとめておくのに必須です。',
    level: 3
  },
  {
    id: 'pp-5',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['Ctrl', 'Shift', 'G'],
    title: '図形のグループ化を解除する',
    desc: 'グループ化されたオブジェクトを元の個別図形にバラします。',
    tip: '一部だけ位置を直したい時に Ctrl+Shift+G で解除し、修正後にまた Ctrl+G でまとめ直せます。',
    level: 3
  },
  {
    id: 'pp-6',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['Ctrl', 'Shift', 'ドラッグ'],
    title: '図形を水平・垂直に真っすぐ保ったまま複製コピー',
    desc: 'Ctrl（複製）とShift（水平・垂直固定）を押しながら図形をドラッグし、ズレずに真横・真下にコピーします。',
    tip: 'パワポ資料作成のプロが最頻出で使う、最も美しく速い図形量産テクニックです！',
    level: 3
  },
  {
    id: 'pp-7',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['Ctrl', 'Shift', 'C / V'],
    title: '図形や文字の「デザイン（色・枠線・フォント）」だけをコピー＆適用',
    desc: 'ある図形の色や枠線・文字スタイルを Ctrl+Shift+C で記憶し、別の図形に Ctrl+Shift+V で一発適用します。',
    tip: 'スライド内の図形デザインを統一するとき、1つずつ色を変える手間がゼロになります！',
    level: 3
  },
  {
    id: 'pp-8',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['Ctrl', 'Shift', '] / ['],
    title: '図形を「最前面へ移動（Ctrl+Shift+]）」/「最背面へ移動（Ctrl+Shift+[）」',
    desc: '重なっている図形の前後順序を一発で一番前または一番後ろに変更します（Ctrl + ] / [ なら1段階ずつ移動）。',
    tip: '日本語キーボードでは「]（む）」「[（゜）」キーにあたります。',
    level: 2
  },
  {
    id: 'pp-9',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['Alt', 'H → G → A'],
    title: '図形の「配置・整列」メニューを呼び出す',
    desc: '複数選択した図形の「左揃え(L)」「上揃え(T)」「左右に整列(H)」「上下に整列(V)」を実行します。',
    tip: 'クイックアクセスツールバーに配置ボタンを入れておけば Alt + 数字（1〜4等）でさらに1秒で整列できます。',
    level: 2
  },
  {
    id: 'pp-10',
    category: 'powerpoint',
    subcategory: '図形操作・グループ化・整列',
    keys: ['F2'],
    title: '図形内の「文字編集モード」と「図形枠の選択モード」を切り替え',
    desc: '図形を選択してF2を押すと中の文字編集に入り、文字編集中にF2（またはEsc）を押すと図形全体の選択に戻ります。',
    tip: '図形全体のフォントサイズを一括変更したい時は、F2で枠選択にしてから Ctrl+Shift+> を押すと一瞬です！',
    level: 3
  },
  {
    id: 'pp-11',
    category: 'powerpoint',
    subcategory: 'スライドショー・発表者ツール',
    keys: ['F5'],
    title: '最初のスライドからスライドショーを開始',
    desc: '1枚目の表紙スライドから全画面プレゼンテーションを開始します（終了は Esc）。',
    tip: '本番のプレゼン開始時に使います。',
    level: 3
  },
  {
    id: 'pp-12',
    category: 'powerpoint',
    subcategory: 'スライドショー・発表者ツール',
    keys: ['Shift', 'F5'],
    title: '現在開いているスライドからスライドショーを開始',
    desc: '1枚目に戻らず、今編集している途中のページから即座にスライドショー表示します。',
    tip: 'アニメーションの確認や、途中のページから発表を再開したい時に必須です！',
    level: 3
  },
  {
    id: 'pp-13',
    category: 'powerpoint',
    subcategory: 'スライドショー・発表者ツール',
    keys: ['Alt', 'F5'],
    title: '外部モニターがなくても「発表者ツール」画面を起動',
    desc: 'プロジェクターに繋いでいなくても、手元でノートやタイマーが見える「発表者ツール」画面をテスト起動します。',
    tip: '本番前のリハーサルや時間配分の練習に最適です。',
    level: 2
  },
  {
    id: 'pp-14',
    category: 'powerpoint',
    subcategory: 'スライドショー・発表者ツール',
    keys: ['スライド番号', 'Enter'],
    title: 'スライドショー中に指定したページ番号へ直接ジャンプ',
    desc: '発表中に数字キー（例: `1` `5`）を押して Enter を押すと、途中のページを飛ばして15ページ目へ一瞬で移動します。',
    tip: '質疑応答で「〇ページの資料を見せてください」と言われた時にスマートに即出しできます！',
    level: 2
  },
  {
    id: 'pp-15',
    category: 'powerpoint',
    subcategory: 'スライドショー・発表者ツール',
    keys: ['B / W'],
    title: 'スライドショー中に画面を「真っ黒（B）」または「真っ白（W）」にする',
    desc: '発表中、一時的にスライドを隠して聴衆の視線を話し手に集中させます（もう一度押すと復帰）。',
    tip: 'Black の B、White の W。カンマ（,）とピリオド（.）でも同じ動作になります。',
    level: 2
  },
  {
    id: 'pp-16',
    category: 'powerpoint',
    subcategory: 'スライドショー・発表者ツール',
    keys: ['Ctrl', 'L / P / E'],
    title: '発表中にレーザーポインター（Ctrl+L）・ペン（Ctrl+P）に切り替え',
    desc: 'スライドショー中のマウスカーソルを赤いレーザーポインター（Ctrl+L）や書き込みペン（Ctrl+P）に変えます。',
    tip: 'ペンで書き込んだ線をすべて消すには E（Eraser）、通常の矢印に戻すには Ctrl + A を押します。',
    level: 2
  },

  // ==========================================
  // Outlook (outlook) - 新規カテゴリ
  // ==========================================
  {
    id: 'ol-1',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'Shift', 'M'],
    title: 'どの画面からでも「新しいメール」を作成（メール画面ではCtrl+N）',
    desc: '予定表や連絡先を開いている時でも、一発で新規メール作成ウィンドウを立ち上げます。',
    tip: 'Message の M。メール画面を表示中ならシンプルな Ctrl + N でも新規メールが作れます。',
    level: 3
  },
  {
    id: 'ol-2',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'Enter'],
    title: '作成中のメールを送信する（Alt + S でも同じ）',
    desc: '書き終わったメールを即座に送信します。',
    tip: 'うっかり誤送信を防ぐため、初回確認ダイアログで「送信する」を選べば次回から爆速送信できます。',
    level: 3
  },
  {
    id: 'ol-3',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'R'],
    title: '差出人に「返信」する',
    desc: '選択中のメールの送信者（1人）に対して返信メールを作成します。',
    tip: 'Reply の R。全員に返信したい場合は Shift を足して Ctrl + Shift + R を使いましょう！',
    level: 3
  },
  {
    id: 'ol-4',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'Shift', 'R'],
    title: '「全員に返信」する（To・CCの全員へ返信）',
    desc: '差出人だけでなく、宛先（To）やCCに入っているメンバー全員に返信メールを作成します。',
    tip: 'ビジネスメールで最頻出のショートカットです。単なる Ctrl+R（個別に返信）との使い分けが重要です。',
    level: 3
  },
  {
    id: 'ol-5',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'F'],
    title: 'メールを「転送」する',
    desc: '選択中のメールを別の人へ転送する作成画面を開きます（添付ファイルもそのまま引き継がれます）。',
    tip: 'Forward（転送）の F。Outlookで文字検索したい時は F4 または Ctrl + E を使います。',
    level: 3
  },
  {
    id: 'ol-6',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'Alt', 'R'],
    title: '受信メールに対して「会議出席依頼」で全員に返信する',
    desc: 'メールの件名・本文・宛先メンバーをすべて引き継いだ状態で、そのまま日程調整の会議招待を作成します。',
    tip: '「この件、一度打ち合わせしましょう」となった時に宛先を入れ直す手間がゼロになる神ワザです！',
    level: 2
  },
  {
    id: 'ol-7',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['F9'],
    title: 'すべてのフォルダの「送受信」を今すぐ実行（Ctrl+Mでも同じ）',
    desc: 'サーバーに新着メールが届いていないか即座に手動チェック＆送受信を行います。',
    tip: '相手から「今メール送りました」と言われた時にすぐ受信確認できます。',
    level: 2
  },
  {
    id: 'ol-8',
    category: 'outlook',
    subcategory: 'メール作成・返信・送受信',
    keys: ['Ctrl', 'K'],
    title: '宛先（To/CC）の名前チェック補完 / 本文中のリンク挿入',
    desc: '宛先欄に苗字やアドレスの一部を打って Ctrl + K を押すと、アドレス帳から正式な連絡先に一発変換します。',
    tip: '本文編集中に押した場合は、選択文字へのハイパーリンク挿入として動作します。',
    level: 2
  },
  {
    id: 'ol-9',
    category: 'outlook',
    subcategory: 'メール整理・既読/未読・フラグ',
    keys: ['Ctrl', 'Q'],
    title: '選択したメールを「開封済み（既読）」にする',
    desc: '未読のメールをワンタッチで既読状態にします（複数選択して一括既読も可能）。',
    tip: 'メルマガや通知メールを確認してどんどん既読処理する時に圧倒的に速いです！',
    level: 3
  },
  {
    id: 'ol-10',
    category: 'outlook',
    subcategory: 'メール整理・既読/未読・フラグ',
    keys: ['Ctrl', 'U'],
    title: '選択したメールを「未開封（未読）」に戻す',
    desc: '一度開いたメールを、あとで対応するために再び未読（太字）状態に戻します。',
    tip: 'Unread（未読）の U。Ctrl + Q（既読）とセットで覚えると受信トレイ整理が劇的に速くなります。',
    level: 3
  },
  {
    id: 'ol-11',
    category: 'outlook',
    subcategory: 'メール整理・既読/未読・フラグ',
    keys: ['Insert'],
    title: 'クイックフラグ（赤い旗マーク）の付与 / 完了チェック切替',
    desc: '選択中のメールに要対応のフラグ（旗）を立てたり、完了チェックに切り替えたりします。',
    tip: '期限日時やアラームを細かく指定してフラグを立てたい時は Ctrl + Shift + G を押します。',
    level: 2
  },
  {
    id: 'ol-12',
    category: 'outlook',
    subcategory: 'メール整理・既読/未読・フラグ',
    keys: ['Ctrl', 'Shift', 'V'],
    title: '選択したメールを指定フォルダーへ移動する',
    desc: 'フォルダー選択ダイアログを開き、矢印キーやフォルダ名頭文字で振り分け先を選んでメールを移動します。',
    tip: 'マウスで左側の狭いフォルダツリーへドラッグして誤爆するストレスがなくなります！',
    level: 2
  },
  {
    id: 'ol-13',
    category: 'outlook',
    subcategory: 'メール整理・既読/未読・フラグ',
    keys: ['Backspace'],
    title: '選択したメールを「アーカイブ」フォルダへ一発移動',
    desc: '削除はせずに受信トレイから片付けたいメールを、ワンタッチでアーカイブフォルダへ退避します。',
    tip: 'Deleteキーは「削除済みアイテム」行き、Backspaceは「アーカイブ」行きと使い分けられます。',
    level: 2
  },
  {
    id: 'ol-14',
    category: 'outlook',
    subcategory: 'メール整理・既読/未読・フラグ',
    keys: ['Ctrl', 'Shift', 'I'],
    title: 'どのフォルダにいても一瞬で「受信トレイ（Inbox）」へ戻る',
    desc: '別フォルダや検索結果を見たあと、メインの受信トレイへ一発でジャンプします（Ctrl+Shift+Oで送信トレイ）。',
    tip: 'Inbox の I と覚えると忘れません。',
    level: 2
  },
  {
    id: 'ol-15',
    category: 'outlook',
    subcategory: '画面切替・予定表・検索',
    keys: ['Ctrl', '1 / 2 / 3 / 4'],
    title: 'メール（1）・予定表（2）・連絡先（3）・タスク（4）を瞬時に切り替え',
    desc: 'Ctrl + 1 でメール画面、Ctrl + 2 でカレンダー（予定表）画面へ1秒で切り替えます。',
    tip: 'メールを書きながら「来週の空き日程いつだっけ？」と予定表（Ctrl+2）を見る時に毎日使えます！',
    level: 3
  },
  {
    id: 'ol-16',
    category: 'outlook',
    subcategory: '画面切替・予定表・検索',
    keys: ['Ctrl', 'E'],
    title: '検索ボックスに移動してメール・予定を検索（F3でも同じ）',
    desc: '上部の検索窓にカーソルを移動し、差出人やキーワードでメールや予定を即座に検索します。',
    tip: 'さらに細かい条件（添付ファイルの有無や期間など）で探す「高度な検索」は Ctrl + Shift + F です。',
    level: 3
  },
  {
    id: 'ol-17',
    category: 'outlook',
    subcategory: '画面切替・予定表・検索',
    keys: ['Ctrl', 'Shift', 'A'],
    title: '新しい「予定（アポイントメント）」を作成',
    desc: 'メール画面を見ていても、自分のカレンダーに新しい予定を登録するウィンドウを直接開きます。',
    tip: 'Appointment（予定）の A。他の参加者を招待する「会議」を作る時は Ctrl + Shift + Q です！',
    level: 3
  },
  {
    id: 'ol-18',
    category: 'outlook',
    subcategory: '画面切替・予定表・検索',
    keys: ['Ctrl', 'Shift', 'Q'],
    title: '新しい「会議出席依頼」を作成',
    desc: '参加メンバーを招待してTeams会議や会議室を予約する「会議出席依頼」作成画面をどこからでも開きます。',
    tip: 'スケジュール調整の起点になる重要ショートカットです。',
    level: 3
  },
  {
    id: 'ol-19',
    category: 'outlook',
    subcategory: '画面切替・予定表・検索',
    keys: ['Ctrl', 'G'],
    title: '予定表で「指定した日付」へ一気にジャンプ',
    desc: 'カレンダー表示中に日付入力ダイアログを開き、数ヶ月先や過去の日付へ一瞬で移動します。',
    tip: '「今日」の予定へすぐ戻りたい時は `Alt → H → O → D`（またはホームタブの今日）で戻れます。',
    level: 2
  },
  {
    id: 'ol-20',
    category: 'outlook',
    subcategory: '画面切替・予定表・検索',
    keys: ['Ctrl', 'Alt', '1 / 2 / 3 / 4'],
    title: '予定表の表示を「日(1) / 稼働日(2) / 週(3) / 月(4)」に切り替え',
    desc: 'カレンダーの表示粒度を1日表示、月〜金の稼働日表示、1週間表示、月間カレンダー表示にワンタッチで変えます。',
    tip: 'さらに `Alt + 数字(1〜9)` を押すと「好きな日数分（例: Alt+3で3日間）」のカレンダー表示にもできます！',
    level: 2
  },

  // ==========================================
  // OneNote (onenote) - 新規カテゴリ
  // ==========================================
  {
    id: 'on-1',
    category: 'onenote',
    subcategory: 'ページ・セクション・検索',
    keys: ['Ctrl', 'N'],
    title: '新しいページを追加する',
    desc: '現在のセクションに新しいノートページを1枚追加し、タイトル入力状態にします。',
    tip: '現在のページの下にインデントされた「サブページ」を追加したい時は Ctrl + Alt + N です。',
    level: 3
  },
  {
    id: 'on-2',
    category: 'onenote',
    subcategory: 'ページ・セクション・検索',
    keys: ['Ctrl', 'T'],
    title: '新しいセクション（タブ）を追加する',
    desc: 'ノートブック内に新しいセクションタブを追加します。',
    tip: 'ブラウザの新しいタブ（Ctrl+T）と同じ感覚でセクションを増やせます。',
    level: 3
  },
  {
    id: 'on-3',
    category: 'onenote',
    subcategory: 'ページ・セクション・検索',
    keys: ['Ctrl', 'E'],
    title: 'すべてのノートブックを横断して全文検索（ページ内検索はCtrl+F）',
    desc: '開いている全ノートブック・全セクション・画像内の文字（OCR）まで含めて一括検索します。',
    tip: '今開いているページの中だけを探したい時は Ctrl + F、全体から探す時は Ctrl + E と使い分けます！',
    level: 3
  },
  {
    id: 'on-4',
    category: 'onenote',
    subcategory: 'ページ・セクション・検索',
    keys: ['Ctrl', 'PageDown / PageUp'],
    title: '次のページ（PageDown）/ 前のページ（PageUp）へ切り替え',
    desc: '同じセクション内のノートページを上下に順番に切り替えます。',
    tip: 'セクション自体を切り替えたい時は Ctrl + Tab / Ctrl + Shift + Tab を使います。',
    level: 2
  },
  {
    id: 'on-5',
    category: 'onenote',
    subcategory: 'ページ・セクション・検索',
    keys: ['F11'],
    title: 'ページを全画面表示（ノートブック枠を隠して広く使う）',
    desc: '左側のノートブック一覧や上部のリボンを隠し、キャンバス全面をノート記述領域にします。',
    tip: '会議の議事録を集中して取る時や、ペンタブレットで手書きする時に最適です（もう一度F11で復帰）。',
    level: 2
  },
  {
    id: 'on-6',
    category: 'onenote',
    subcategory: 'チェックボックス・タグ・日時挿入',
    keys: ['Ctrl', '1'],
    title: 'チェックボックス（To Do タグ）の挿入 / 完了チェック / 解除',
    desc: '現在の行に「□ タスク」を付けます。もう一度 Ctrl+1 を押すと「☑ 完了」になり、3回目で消えます！',
    tip: 'OneNoteで最も使われる神ショートカットです。会議中の宿題事項にその場でチェックボックスを付けられます。',
    level: 3
  },
  {
    id: 'on-7',
    category: 'onenote',
    subcategory: 'チェックボックス・タグ・日時挿入',
    keys: ['Ctrl', '2 / 3 / 4 / 5'],
    title: '重要★（2）・質問？（3）・後で確認マーカー（4）・定義（5）タグを付与',
    desc: '行頭に「★（重要）」「？（質問）」などの目印アイコン（ノートシール）をワンタッチで付与します。',
    tip: '付けたタグはすべてを取り消す「Ctrl + 0（ゼロ）」で一発クリアできます。',
    level: 3
  },
  {
    id: 'on-8',
    category: 'onenote',
    subcategory: 'チェックボックス・タグ・日時挿入',
    keys: ['Alt', 'Shift', 'F'],
    title: '現在の日付と時刻（タイムスタンプ）を同時挿入',
    desc: 'カーソル位置に「2026/11/05 14:30」のように現在の日時を一発で挿入します。',
    tip: '日付だけなら Alt + Shift + D（Date）、時刻だけなら Alt + Shift + T（Time）で個別に入力できます！',
    level: 3
  },
  {
    id: 'on-9',
    category: 'onenote',
    subcategory: 'チェックボックス・タグ・日時挿入',
    keys: ['Ctrl', 'Shift', 'H'],
    title: '選択したテキストに蛍光ペン（ハイライト）を引く',
    desc: '直前に使った蛍光ペンの色で、選択した文字にマーカーを引きます。',
    tip: '重要箇所の色塗りがマウスなしでサクサク進みます。',
    level: 2
  },
  {
    id: 'on-10',
    category: 'onenote',
    subcategory: '表作成・アウトライン・構造整理',
    keys: ['文字入力', 'Tab'],
    title: '文字を打ってTabキーを押すだけでその場に「表（テーブル）」を作成',
    desc: 'ノート上で文字を入力した直後に Tab キーを押すと、自動的に枠線付きの2列の表に変換されます！',
    tip: 'さらに Tab を押せば3列、4列と増え、右端のセルで Enter を押せば新しい行が下に追加されます。',
    level: 3
  },
  {
    id: 'on-11',
    category: 'onenote',
    subcategory: '表作成・アウトライン・構造整理',
    keys: ['Ctrl', 'Enter'],
    title: '表（テーブル）の現在の行の「すぐ下」に新しい行を挿入',
    desc: 'OneNoteの表の中で、途中の行でも一発で下に新しい空白行を追加します（表内のセル内改行は Shift + Enter）。',
    tip: 'Wordの表と異なり、OneNoteの表では Enter だけでセル内改行、Ctrl + Enter で行追加になります。',
    level: 2
  },
  {
    id: 'on-12',
    category: 'onenote',
    subcategory: '表作成・アウトライン・構造整理',
    keys: ['Alt', 'Shift', '↑ / ↓'],
    title: '現在の段落（または表の行）を上下に入れ替え移動',
    desc: '箇条書きの項目や表の行を、配下のサブ階層ごとそのまま上下にスライド移動します。',
    tip: 'ブレインストーミングで書き出したメモの優先順位を後から並べ替える時に無敵の威力を発揮します！',
    level: 3
  },
  {
    id: 'on-13',
    category: 'onenote',
    subcategory: '表作成・アウトライン・構造整理',
    keys: ['Alt', 'Shift', '+ / -'],
    title: '見出し・親項目の下にある「サブ階層テキスト」を折りたたむ（-）/ 展開（+）',
    desc: 'インデントで階層化したメモの子要素を折りたたんで隠し、見出しだけをスッキリ一覧表示します。',
    tip: '長くなった議事録やプロジェクトノートをアコーディオンのように整理できるOneNoteならではの機能です。',
    level: 2
  },
  {
    id: 'on-14',
    category: 'onenote',
    subcategory: '表作成・アウトライン・構造整理',
    keys: ['Ctrl', '. (ピリオド) / / (スラッシュ)'],
    title: '箇条書きリストを開始（Ctrl+.）/ 番号付きリストを開始（Ctrl+/）',
    desc: '現在の行を中黒（・）の箇条書き（Ctrl + .）または連番リスト（Ctrl + /）に変換します。',
    tip: '見出し1〜6スタイルは Word と同じく Ctrl + Alt + 1〜6 で一発適用できます！',
    level: 2
  },

  // ==========================================
  // Adobe PDF (pdf) - 新規カテゴリ (Acrobat / Reader)
  // ==========================================
  {
    id: 'pdf-1',
    category: 'pdf',
    subcategory: '表示倍率・回転・画面モード',
    keys: ['Ctrl', '0 (ゼロ)'],
    title: '「1ページ全体」がウィンドウに収まる倍率に合わせる',
    desc: 'PDFの1ページ全体が画面内にピッタリ見えるように表示倍率を自動調整します。',
    tip: 'スライド資料型のPDFや図面全体を見渡したい時に一瞬でフィットさせられます。',
    level: 3
  },
  {
    id: 'pdf-2',
    category: 'pdf',
    subcategory: '表示倍率・回転・画面モード',
    keys: ['Ctrl', '2'],
    title: 'ページの「横幅」に合わせて拡大表示する',
    desc: 'ウィンドウの左右幅いっぱいにページが広がるよう倍率を自動調整します。',
    tip: 'A4縦の契約書や論文PDFの文字を大きく読みやすく表示する時の定番ショートカットです（Ctrl+1で100%等倍）。',
    level: 3
  },
  {
    id: 'pdf-3',
    category: 'pdf',
    subcategory: '表示倍率・回転・画面モード',
    keys: ['Ctrl', 'Shift', '+ / -'],
    title: 'ページの表示向きを90度回転（+で時計回り / -で反時計回り）',
    desc: '横向きにスキャンされて首をかしげないと読めないPDFページを、時計回りまたは反時計回りに回転します。',
    tip: 'メニューから「表示 ＞ 表示を回転」を探す手間がゼロになります！',
    level: 3
  },
  {
    id: 'pdf-4',
    category: 'pdf',
    subcategory: '表示倍率・回転・画面モード',
    keys: ['Ctrl', 'L'],
    title: 'フルスクリーン（全画面プレゼン）モードを開始 / 終了',
    desc: 'メニューや枠をすべて消してPDFを全画面表示します（Escで終了）。',
    tip: 'PDF化したスライドでそのままプレゼン発表するときに使います。',
    level: 2
  },
  {
    id: 'pdf-5',
    category: 'pdf',
    subcategory: '表示倍率・回転・画面モード',
    keys: ['Ctrl', 'H'],
    title: '閲覧モード（ツールバーを隠して画面を広く使う）/ 自動スクロール',
    desc: '上部のリボンや右側のツールパネルを隠し、PDF本文だけを広く表示します（Ctrl+Shift+Hで自動スクロール開始）。',
    tip: 'F8（ツールバー表示切替）や F9（メニューバー表示切替）でも画面をスッキリ広くできます。',
    level: 2
  },
  {
    id: 'pdf-6',
    category: 'pdf',
    subcategory: 'ページ移動・ジャンプ・しおり',
    keys: ['Ctrl', 'Shift', 'N'],
    title: '指定したページ番号へ直接ジャンプ移動',
    desc: 'ページ番号入力ボックスを開き、何百ページあるPDFでも目的のページへ1秒で移動します。',
    tip: '先頭ページへは Home、最終ページへは End キーで一瞬で飛べます。',
    level: 3
  },
  {
    id: 'pdf-7',
    category: 'pdf',
    subcategory: 'ページ移動・ジャンプ・しおり',
    keys: ['Alt', '← / →'],
    title: '直前に見ていたページ位置へ「戻る（Alt+←）」/「進む（Alt+→）」',
    desc: 'PDF内の目次リンクをクリックして別ページへ飛んだあと、元のページ位置へワンタッチで戻ります！',
    tip: '「目次（3ページ）→ 本文（85ページ）→ また目次へ戻る」という往復がストレスゼロになります。',
    level: 3
  },
  {
    id: 'pdf-8',
    category: 'pdf',
    subcategory: 'ページ移動・ジャンプ・しおり',
    keys: ['F4'],
    title: '左側のナビゲーションパネル（しおり・ページサムネイル）を開閉',
    desc: 'PDFの「しおり（目次ツリー）」やページ一覧サムネイルを表示する左ペインを開いたり閉じたりします。',
    tip: 'Acrobat（有料版）では Ctrl + B を押すことで、現在のページに新しい「しおり」を追加できます。',
    level: 3
  },
  {
    id: 'pdf-9',
    category: 'pdf',
    subcategory: 'ページ移動・ジャンプ・しおり',
    keys: ['Space（長押し）'],
    title: '押している間だけ「手のひらツール」に切り替え（ドラッグで画面移動）',
    desc: 'テキスト選択モード中でも、スペースキーを押している間はマウスドラッグでページを上下左右に掴んで動かせます。',
    tip: '拡大した図面や表を見回すときにツールを持ち替える必要がありません。',
    level: 3
  },
  {
    id: 'pdf-10',
    category: 'pdf',
    subcategory: '検索・ハイライト注釈・文書情報',
    keys: ['Ctrl', 'Shift', 'F'],
    title: '「高度な検索」を開く（一致箇所の一覧表示・フォルダ内の複数PDF一括検索！）',
    desc: '通常の Ctrl+F と違い、検索ヒット箇所を文脈付きで一覧リスト表示し、さらに指定フォルダ内の全PDFを串刺し検索できます！',
    tip: '何百ページあるマニュアルや大量のPDF資料からキーワードを探すなら、Ctrl+F より Ctrl+Shift+F が10倍便利です！',
    level: 3
  },
  {
    id: 'pdf-11',
    category: 'pdf',
    subcategory: '検索・ハイライト注釈・文書情報',
    keys: ['Ctrl', '6'],
    title: 'ノート注釈（付箋コメント）を追加する',
    desc: 'PDF上に黄色の吹き出しノート注釈（コメント）を挿入します。',
    tip: '環境設定で「単一のショートカットキーでツールを使用可能にする」をONにすると、U（蛍光ペン）、S（付箋）、V（選択）、H（手のひら）が1キーで使えます！',
    level: 2
  },
  {
    id: 'pdf-12',
    category: 'pdf',
    subcategory: '検索・ハイライト注釈・文書情報',
    keys: ['Ctrl', 'D'],
    title: '「文書のプロパティ」を開く（フォント埋め込み・セキュリティ確認）',
    desc: 'PDFの作成ソフト、ページサイズ、パスワード保護制限、フォントが正しく埋め込まれているかを確認する画面を開きます。',
    tip: '印刷所への入稿前や客先提出前に「フォント埋め込み」を確認する必須ショートカットです。',
    level: 2
  },

  // ==========================================
  // ブラウザ (browser) - Chrome / Edge
  // ==========================================
  {
    id: 'br-1',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'T'],
    title: '新しいタブを開く',
    desc: '新しいタブを追加して開き、そのまま検索・URL入力できる状態にします。',
    tip: 'マウスで「＋」ボタンをクリックするより何倍も速い基本動作です。',
    level: 3
  },
  {
    id: 'br-2',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'W'],
    title: '現在のタブを閉じる（Ctrl+Shift+Wでウィンドウごと閉じる）',
    desc: '今見ているタブを閉じます（Ctrl + F4 でも同じ）。',
    tip: '見終わったタブをサクサク閉じてブラウザのメモリ消費を常に軽く保てます。',
    level: 3
  },
  {
    id: 'br-3',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'T'],
    title: '直前に閉じたタブ（またはウィンドウ）を復元して開き直す',
    desc: '誤って閉じてしまったタブを、閲覧履歴ごと元の位置に復活させます。',
    tip: '連打すると過去に閉じたタブを順番に何個でも遡って復活できる救世主ショートカットです！',
    level: 3
  },
  {
    id: 'br-4',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Tab'],
    title: '右隣のタブへ切り替え（Ctrl+Shift+Tab で左隣へ）',
    desc: '開いているタブを右方向（Shift追加で左方向）へ順番に切り替えます（Ctrl + PageDown / PageUp でも同じ）。',
    tip: 'マウスを使わずに複数タブを見比べるときに必須です。',
    level: 3
  },
  {
    id: 'br-5',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'PageUp / PageDown'],
    title: '現在のタブの並び順を左（PageUp）/ 右（PageDown）へ移動',
    desc: '開いているタブ自体の位置を左右に入れ替えます。',
    tip: '関連するタブを隣同士に整理したい時、ドラッグ不要で並べ替えられます。',
    level: 1
  },
  {
    id: 'br-6',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', '数字 (1〜8) / 9'],
    title: '指定した番号のタブへ直接ジャンプ（9は常に右端タブ）',
    desc: '左から1〜8番目のタブへ一瞬で移動します。Ctrl + 9 はタブが何個あっても常に「一番右端のタブ」へ移動します。',
    tip: 'メールやカレンダーを左端（1番・2番）にピン留めしておくと Ctrl + 1 でいつでも戻れます。',
    level: 2
  },
  {
    id: 'br-7',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'N'],
    title: 'シークレット（InPrivate）ウィンドウを開く',
    desc: '閲覧履歴やCookie、ログイン情報を残さないプライベートウィンドウを開きます。',
    tip: '別アカウントでのログイン確認や、パーソナライズを除いた検索順位確認に最適です。',
    level: 3
  },
  {
    id: 'br-8',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'A'],
    title: '開いている全タブ・最近閉じたタブをタイトル検索',
    desc: 'タブを大量に開きすぎて目的のページがどこにあるか分からない時、キーワードでタブを検索してジャンプできます。',
    tip: 'タブを20個以上開きっぱなしにする人の最強の味方です。',
    level: 2
  },
  {
    id: 'br-9',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'M'],
    title: 'ブラウザのプロファイル（アカウント）を切り替え',
    desc: '仕事用アカウントと個人用アカウントなど、ブラウザのユーザープロファイル選択メニューを開きます。',
    tip: '複数アカウントを使い分けている環境で素早く別プロファイルのウィンドウを開けます。',
    level: 1
  },
  {
    id: 'br-10',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Ctrl', 'L'],
    title: 'アドレスバー（URL欄）を選択して即座に検索・URL入力',
    desc: 'ページ内のどこを見ていても、一瞬で上部のアドレスバーにフォーカスしてURLを全選択します（Alt + D や F6 でも同じ）。',
    tip: 'Ctrl + L → Ctrl + C を押せば、今見ているページのURLを1秒でコピーできます！',
    level: 3
  },
  {
    id: 'br-11',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Ctrl', 'K'],
    title: 'アドレスバーで既定の検索エンジン検索を開始（Ctrl+Eでも同じ）',
    desc: 'アドレスバーに「? 検索」が入った状態でフォーカスし、URLではなく確実にキーワード検索として実行します。',
    tip: '社内ホスト名やドットを含む文字列をURLと誤認させずにGoogle/Bing検索したい時に便利です。',
    level: 2
  },
  {
    id: 'br-12',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Alt', 'Enter'],
    title: 'アドレスバーの検索ワード・URLを「新しいタブ」で開く',
    desc: '現在見ているページを残したまま、アドレスバーに入力した検索結果やURLを別タブで開きます。',
    tip: 'Ctrl + L（アドレスバー選択）→ 検索語入力 → Alt + Enter のコンボは一度使うと手放せません！',
    level: 3
  },
  {
    id: 'br-13',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Ctrl', 'Enter'],
    title: 'アドレスバーの単語に「.com」を自動補完して開く',
    desc: 'アドレスバーにサイト名（例: `github`）だけ打って Ctrl + Enter を押すと `https://www.github.com` へ移動します。',
    tip: '.com サイトを開くときに最後まで打つ手間が省けます。',
    level: 1
  },
  {
    id: 'br-14',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Alt', '← / →'],
    title: '前のページに戻る（Alt+←）/ 次のページに進む（Alt+→）',
    desc: 'ブラウザ左上の「←（戻る）」「→（進む）」ボタンと同じ動作をします。',
    tip: 'Alt + Home を押せば設定されているホームページ（初期画面）へ一発で戻れます。',
    level: 3
  },
  {
    id: 'br-15',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Ctrl', 'R'],
    title: 'ページの再読み込み（リロード / F5と同じ）',
    desc: '現在のWebページを最新の状態に更新します（読み込み途中で止めたい時は Esc キー）。',
    tip: 'ホームポジションから手を離さずにリロードできるため F5 より押しやすいです。',
    level: 3
  },
  {
    id: 'br-16',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Ctrl', 'Shift', 'R'],
    title: 'スーパーリロード（キャッシュを無視して完全再読み込み）',
    desc: '古いキャッシュ画像やCSSを破棄し、サーバーから最新データを強制的に再取得します（Ctrl + F5 と同じ）。',
    tip: 'Webサイトの表示が崩れている時や更新が反映されない時の特効薬です。',
    level: 3
  },
  {
    id: 'br-17',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー・検索',
    keys: ['Ctrl', 'クリック'],
    title: 'リンクをバックグラウンドの「新しいタブ」で開く',
    desc: '現在のページを表示したまま、クリックしたリンク先を裏で新しいタブとして開きます（マウスホイール押し込みでも同じ）。',
    tip: 'Ctrl + Shift + クリック なら「新しいタブで開くと同時にそのタブへ即座に移動」します！',
    level: 3
  },
  {
    id: 'br-18',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Ctrl', 'G'],
    title: 'ページ内検索（Ctrl+F）の「次の検索結果」へ移動',
    desc: 'Ctrl + F で検索中、次の一致箇所へ移動します（Enterと同じ）。Ctrl + Shift + G（またはShift + Enter）で前の一致箇所へ戻ります。',
    tip: 'F3 キーでもページ内検索の開始・次の一致箇所へのジャンプが可能です。',
    level: 2
  },
  {
    id: 'br-19',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Space'],
    title: '1画面分下へスクロール（Shift+Space で1画面上へ）',
    desc: 'Webページを読み進めるとき、ちょうど1画面分ずつ下へスムーズにスクロールします。',
    tip: 'Shift + Space を押すと1画面分上へ戻ります。長文記事を読むときにマウスホイールいらずです。',
    level: 2
  },
  {
    id: 'br-20',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Home / End'],
    title: 'ページの最上部（Home）/ 最下部（End）へ一瞬で移動',
    desc: 'どんなに縦に長いWebページでも、一瞬でページの先頭またはフッターまでジャンプします。',
    tip: 'ノートPCでHome/Endが独立していない場合は Fn + ← / → に割り当てられていることが多いです。',
    level: 3
  },
  {
    id: 'br-21',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Ctrl', '+ / -'],
    title: 'ページの拡大（ズームイン）/ 縮小（ズームアウト）',
    desc: 'Webページの文字や画像サイズを拡大・縮小表示します（Ctrl + マウスホイールでも可能）。',
    tip: '文字が小さくて読みづらいサイトや、画面全体を1枚に収めてスクショしたい時に便利です。',
    level: 3
  },
  {
    id: 'br-22',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Ctrl', '0 (ゼロ)'],
    title: 'ページの拡大率を100%（標準サイズ）に戻す',
    desc: '拡大・縮小したページの表示倍率を一発でデフォルトの100%にリセットします。',
    tip: 'うっかり Ctrl + マウスホイール で画面が大きくなりすぎた時も一瞬で直せます。',
    level: 3
  },
  {
    id: 'br-23',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['F11'],
    title: '全画面表示（フルスクリーン）のON / OFF',
    desc: 'タブバーやアドレスバーを隠し、モニター全面にWebページを表示します。',
    tip: 'プレゼンやWebダッシュボード表示に最適。もう一度 F11 を押すと元に戻ります。',
    level: 2
  },
  {
    id: 'br-24',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['F9'],
    title: 'イマーシブリーダー（記事の広告等を消して読書表示 / Edge）',
    desc: 'Microsoft Edgeでニュースやブログ記事を開いている時、周囲の広告やメニューを消して本文だけを読みやすく整形します。',
    tip: 'さらに Ctrl + Shift + U を押すと、AI音声で記事の本文をナチュラルに読み上げてくれます！',
    level: 2
  },
  {
    id: 'br-25',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Ctrl', 'D'],
    title: '現在のページをブックマーク（お気に入り）に登録',
    desc: '見ているページをワンタッチでブックマークに追加します。',
    tip: 'Ctrl + Shift + D なら、現在開いているすべてのタブを1つのフォルダにまとめてブックマーク保存できます！',
    level: 3
  },
  {
    id: 'br-26',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Ctrl', 'Shift', 'B'],
    title: 'ブックマークバーの表示 / 非表示を切り替え',
    desc: 'アドレスバー直下のブックマークバーを表示したり隠したりします（Ctrl + Shift + O でブックマーク管理画面）。',
    tip: '画面共有やスクショ撮影時にプライベートなブックマークをサッと隠したい時に必須です！',
    level: 3
  },
  {
    id: 'br-27',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Ctrl', 'H'],
    title: '閲覧履歴（ヒストリー）を開く',
    desc: '過去に見たWebページの履歴一覧を開きます。',
    tip: '「昨日見たあのサイトどれだっけ？」という時にすぐ検索できます。',
    level: 3
  },
  {
    id: 'br-28',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Ctrl', 'J'],
    title: 'ダウンロード履歴を開く',
    desc: 'ブラウザでダウンロードしたファイルの一覧と保存先フォルダへのリンクを表示します。',
    tip: 'ダウンロードしたPDFやインストーラーがどこに行ったか分からない時に一発で見つかります。',
    level: 3
  },
  {
    id: 'br-29',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Ctrl', 'Shift', 'Delete'],
    title: '閲覧履歴・キャッシュ・Cookieの削除画面を開く',
    desc: '期間を指定してブラウザキャッシュや閲覧履歴を削除するダイアログを直接開きます。',
    tip: '設定メニューの奥深くまで探す必要がなくなります。',
    level: 2
  },
  {
    id: 'br-30',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['F12'],
    title: 'デベロッパーツール（開発者ツール）を開く',
    desc: 'HTML/CSSの検証、ネットワーク通信、スマホ表示確認などを行う開発者ツールを開きます（Ctrl + Shift + I でも同じ）。',
    tip: 'コンソールを直接開くなら Ctrl + Shift + J、ページのHTMLソースを見るだけなら Ctrl + U です。',
    level: 2
  },
  {
    id: 'br-31',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Ctrl', 'Shift', 'C'],
    title: 'ページの要素（HTML/CSS）をマウスで指定して検査',
    desc: '開発者ツールの要素選択モードを起動し、ページ上の気になる箇所をクリックしてHTMLやスタイルを調べます。',
    tip: 'さらに開発者ツール内で Ctrl + Shift + P を押して `screenshot` と打てば、縦長ページ全体のフルページスクショも撮れます！',
    level: 1
  },
  {
    id: 'br-32',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・開発ツール',
    keys: ['Shift', 'Esc'],
    title: 'ブラウザ内のタスクマネージャーを開く',
    desc: 'どのタブや拡張機能がメモリ・CPUを大量消費しているかを特定し、重いタブだけを個別に強制終了できます。',
    tip: 'ブラウザが急に重くなった時に原因のタブを一発で突き止められます。',
    level: 1
  }
];
