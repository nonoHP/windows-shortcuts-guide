const CATEGORIES = [
  {
    id: 'all',
    name: 'すべて',
    icon: '⚡',
    color: '#6366f1',
    description: '全カテゴリのショートカットキーを一括で検索・閲覧できます'
  },
  {
    id: 'win11',
    name: 'Windows 11',
    icon: '🪟',
    color: '#0078d4',
    description: 'OS操作・ウィンドウ整列・仮想デスクトップ・エクスプローラー・スクショなど'
  },
  {
    id: 'excel',
    name: 'Excel',
    icon: '📊',
    color: '#107c41',
    description: '爆速セル移動・範囲選択・書式設定・関数入力・行列操作・テーブル処理など'
  },
  {
    id: 'word',
    name: 'Word',
    icon: '📝',
    color: '#185abd',
    description: '文字装飾・段落配置・見出しスタイル設定・高速カーソル移動・校閲など'
  },
  {
    id: 'browser',
    name: 'ブラウザ',
    icon: '🌐',
    color: '#ea580c',
    description: 'Chrome / Edge 共通のタブ管理・履歴移動・アドレスバー・検索・開発ツールなど'
  },
  {
    id: 'common',
    name: '共通・基本',
    icon: '⌨️',
    color: '#475569',
    description: 'ほぼすべてのWindowsアプリで共通して使える最重要の基本ショートカット'
  }
];

/**
 * level:
 *   3 = 必須（毎日使う最重要ショートカット）
 *   2 = 便利（知っていると作業速度が2倍になる）
 *   1 = 玄人（さらに極めたい人向けの時短ワザ）
 */
const SHORTCUTS_DATA = [
  // ==========================================
  // 共通・基本 (common)
  // ==========================================
  {
    id: 'cm-1',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'C'],
    title: 'コピー',
    desc: '選択したテキストやファイル、オブジェクトをクリップボードにコピーします。',
    tip: 'Win + V と組み合わせると過去のコピー履歴から貼り付け可能です。',
    level: 3
  },
  {
    id: 'cm-2',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'X'],
    title: '切り取り（カット）',
    desc: '選択した項目を切り取ってクリップボードに移動します。',
    tip: 'ファイルの移動時にも使えます。',
    level: 3
  },
  {
    id: 'cm-3',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'V'],
    title: '貼り付け（ペースト）',
    desc: 'クリップボードの内容を現在のカーソル位置に貼り付けます。',
    tip: '書式を消して貼り付けたい場合は Ctrl + Shift + V が便利です。',
    level: 3
  },
  {
    id: 'cm-4',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'Shift', 'V'],
    title: '書式なし貼り付け（テキストのみ）',
    desc: 'フォントや色などの装飾を除去し、プレーンテキストとして貼り付けます。',
    tip: 'Webページや他資料からのコピペでレイアウトが崩れるのを防げます。',
    level: 3
  },
  {
    id: 'cm-5',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'Z'],
    title: '元に戻す（アンドゥ）',
    desc: '直前の操作を取り消して1つ前の状態に戻します。',
    tip: '誤って消してしまった文章やファイル操作もすぐ戻せます。',
    level: 3
  },
  {
    id: 'cm-6',
    category: 'common',
    subcategory: '編集・クリップボード',
    keys: ['Ctrl', 'Y'],
    title: 'やり直し（リドゥ） / 直前の操作の繰り返し',
    desc: 'Ctrl + Z で戻しすぎた操作をやり直します。Officeでは直前の操作を繰り返します。',
    tip: 'ExcelやWordでは「直前の書式変更を繰り返す(F4と同じ)」としても大活躍します。',
    level: 3
  },
  {
    id: 'cm-7',
    category: 'common',
    subcategory: '選択・検索',
    keys: ['Ctrl', 'A'],
    title: 'すべて選択',
    desc: '画面内・ドキュメント内のすべてのテキストやアイテムを一括選択します。',
    tip: '全文コピーや一括削除の前に使います。',
    level: 3
  },
  {
    id: 'cm-8',
    category: 'common',
    subcategory: '選択・検索',
    keys: ['Ctrl', 'F'],
    title: '検索',
    desc: 'ページ内やファイル内のキーワード検索ボックスを開きます。',
    tip: '長文ドキュメントやWebページから目的の言葉を瞬時に探せます。',
    level: 3
  },
  {
    id: 'cm-9',
    category: 'common',
    subcategory: '選択・検索',
    keys: ['Ctrl', 'H'],
    title: '置換',
    desc: '特定の文字列を検索して、別の文字列に一括または個別に置き換えます。',
    tip: 'Word・Excel・メモ帳・テキストエディタ共通で使えます（ブラウザでは履歴）。',
    level: 2
  },
  {
    id: 'cm-10',
    category: 'common',
    subcategory: 'ファイル操作',
    keys: ['Ctrl', 'S'],
    title: '上書き保存',
    desc: '現在作業中のファイルを上書き保存します。',
    tip: '作業の区切りごとにクセづけておくと不意のトラブルでも安心です。',
    level: 3
  },
  {
    id: 'cm-11',
    category: 'common',
    subcategory: 'ファイル操作',
    keys: ['Ctrl', 'P'],
    title: '印刷 / PDF出力',
    desc: '印刷プレビュー・印刷設定画面を開きます。',
    tip: 'プリンタに「Microsoft Print to PDF」を選べばあらゆる画面をPDF保存できます。',
    level: 3
  },
  {
    id: 'cm-12',
    category: 'common',
    subcategory: 'ファイル操作',
    keys: ['Ctrl', 'N'],
    title: '新規作成 / 新しいウィンドウ',
    desc: '新しいファイル、ドキュメント、または新しいウィンドウを開きます。',
    tip: 'アプリを問わず「新しく作る」ときの基本キーです。',
    level: 2
  },
  {
    id: 'cm-13',
    category: 'common',
    subcategory: 'ファイル操作',
    keys: ['Ctrl', 'O'],
    title: 'ファイルを開く',
    desc: '既存のファイルを開くためのダイアログを表示します。',
    tip: 'Open の O と覚えると忘れません。',
    level: 2
  },
  {
    id: 'cm-14',
    category: 'common',
    subcategory: '文字入力・変換',
    keys: ['F7'],
    title: '全角カタカナに変換',
    desc: '入力中の文字をすべて全角カタカナに一発変換します。',
    tip: 'スペースキーで何度も変換候補を探す手間が省けます。',
    level: 3
  },
  {
    id: 'cm-15',
    category: 'common',
    subcategory: '文字入力・変換',
    keys: ['F8'],
    title: '半角カタカナに変換',
    desc: '入力中の文字を半角カタカナに変換します。',
    tip: '銀行振込名義の入力フォームなどで重宝します。',
    level: 2
  },
  {
    id: 'cm-16',
    category: 'common',
    subcategory: '文字入力・変換',
    keys: ['F9'],
    title: '全角英数に変換',
    desc: '入力中の英数字を全角アルファベット・数字に変換します。',
    tip: '連打すると「小文字 → 大文字 → 先頭のみ大文字」と切り替わります。',
    level: 2
  },
  {
    id: 'cm-17',
    category: 'common',
    subcategory: '文字入力・変換',
    keys: ['F10'],
    title: '半角英数に変換',
    desc: '日本語モードのまま入力してしまった英単語を半角英数字に変換します。',
    tip: 'メールアドレスや英単語をうっかり「かな入力」した時に一発で直せます。',
    level: 3
  },

  // ==========================================
  // Windows 11 (win11)
  // ==========================================
  {
    id: 'w11-1',
    category: 'win11',
    subcategory: 'クリップボード・スクショ',
    keys: ['Win', 'V'],
    title: 'クリップボード履歴を開く',
    desc: '過去にコピーしたテキストや画像の履歴一覧を表示し、選んで貼り付けられます。',
    tip: '初回のみ「有効にする」をクリックすれば、ピン留めも使える最強機能です。',
    level: 3
  },
  {
    id: 'w11-2',
    category: 'win11',
    subcategory: 'クリップボード・スクショ',
    keys: ['Win', 'Shift', 'S'],
    title: '画面領域を指定してスクリーンショット',
    desc: 'Snipping Toolが起動し、ドラッグした範囲のスクリーンショットや画面録画を撮れます。',
    tip: '撮影した画像は自動的にクリップボードに入り、そのまま Ctrl + V で貼り付け可能です。',
    level: 3
  },
  {
    id: 'w11-3',
    category: 'win11',
    subcategory: 'クリップボード・スクショ',
    keys: ['Win', 'PrintScreen'],
    title: '全画面スクショを即座に画像ファイル保存',
    desc: '画面全体のスクリーンショットを撮影し、「ピクチャ > スクリーンショット」に自動保存します。',
    tip: '画面が一瞬暗くなれば保存完了の合図です。',
    level: 2
  },
  {
    id: 'w11-4',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'D'],
    title: 'デスクトップを表示 / 元に戻す',
    desc: '開いているすべてのウィンドウを一瞬で最小化し、デスクトップを表示します。',
    tip: 'もう一度押すと元のウィンドウ配置に戻ります。デスクトップ上のファイルを見る時に最適。',
    level: 3
  },
  {
    id: 'w11-5',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Alt', 'Tab'],
    title: 'アプリの高速切り替え',
    desc: '起動中のアプリ一覧を表示し、直前に使っていたウィンドウへ素早く切り替えます。',
    tip: 'Altを押したままTabを連打すると目的のウィンドウを選べます。Shiftを足すと逆順。',
    level: 3
  },
  {
    id: 'w11-6',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Tab'],
    title: 'タスクビュー（全ウィンドウ＆仮想デスクトップ一覧）',
    desc: '現在開いている全ウィンドウの俯瞰と、仮想デスクトップの追加・切り替えを行います。',
    tip: '指を離しても一覧が閉じないため、マウスでも選びやすいのが特徴です。',
    level: 2
  },
  {
    id: 'w11-7',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', '← / →'],
    title: 'ウィンドウを画面の左右半分にスナップ配置',
    desc: '現在のウィンドウを画面の左半分または右半分にピタッと整列させます。',
    tip: '左右に資料と作業画面を並べて見比べるときに必須のショートカットです。',
    level: 3
  },
  {
    id: 'w11-8',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', '↑ / ↓'],
    title: 'ウィンドウの最大化 / 元のサイズ / 最小化',
    desc: 'Win + ↑ でウィンドウを最大化し、Win + ↓ でサイズ復元または最小化します。',
    tip: 'Win + ←/→ のあとに ↑/↓ を押すと画面の4分割（四隅配置）もできます。',
    level: 2
  },
  {
    id: 'w11-9',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Z'],
    title: 'スナップレイアウト（Windows 11専用）を開く',
    desc: '画面右上に2分割・3分割・4分割の整列レイアウト選択ポップアップを表示します。',
    tip: '矢印キーまたは数字キー（1〜6）で配置先をそのまま指定できます。',
    level: 3
  },
  {
    id: 'w11-10',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Shift', '← / →'],
    title: 'ウィンドウを別のモニターへ移動',
    desc: 'マルチモニター環境で、アクティブなウィンドウを隣のディスプレイへ瞬時に移動します。',
    tip: 'マウスで画面端まで長距離ドラッグする手間がなくなります。',
    level: 2
  },
  {
    id: 'w11-11',
    category: 'win11',
    subcategory: 'ウィンドウ・画面整理',
    keys: ['Win', 'Home'],
    title: '作業中以外のウィンドウをすべて最小化',
    desc: '現在アクティブなウィンドウだけを残し、背景のウィンドウを一括で最小化します。',
    tip: 'もう一度押すと背景のウィンドウが元の位置に復帰します。集中したい時に便利。',
    level: 1
  },
  {
    id: 'w11-12',
    category: 'win11',
    subcategory: 'システム・セキュリティ',
    keys: ['Win', 'L'],
    title: 'PCを即座にロック',
    desc: '画面をロックし、サインイン画面に戻します。',
    tip: '離席するときのセキュリティ対策として、席を立つ瞬間に押す習慣をつけましょう。',
    level: 3
  },
  {
    id: 'w11-13',
    category: 'win11',
    subcategory: 'システム・セキュリティ',
    keys: ['Win', 'I'],
    title: '「設定」を開く',
    desc: 'Windows 11のシステム設定画面を直接起動します。',
    tip: 'Bluetooth接続やディスプレイ設定、Windows Updateの確認にすぐアクセスできます。',
    level: 3
  },
  {
    id: 'w11-14',
    category: 'win11',
    subcategory: 'システム・セキュリティ',
    keys: ['Win', 'A'],
    title: 'クイック設定（Wi-Fi・音量・明るさ）を開く',
    desc: '画面右下のWi-Fi、Bluetooth、音量、画面輝度、集中モードのパネルを開きます。',
    tip: 'Windows 11で新設された便利なショートカットです。',
    level: 2
  },
  {
    id: 'w11-15',
    category: 'win11',
    subcategory: 'システム・セキュリティ',
    keys: ['Win', 'X'],
    title: 'クイックリンクメニュー（管理者メニュー）を開く',
    desc: 'スタートボタン右クリックと同じシステム管理メニュー（デバイスマネージャー、ターミナル等）を開きます。',
    tip: 'Win + X → U → U で最速シャットダウン、Win + X → U → R で再起動ができます！',
    level: 3
  },
  {
    id: 'w11-16',
    category: 'win11',
    subcategory: 'システム・セキュリティ',
    keys: ['Ctrl', 'Shift', 'Esc'],
    title: 'タスクマネージャーを直接起動',
    desc: 'フリーズしたアプリの強制終了やCPU・メモリ使用率を確認するタスクマネージャーを即座に開きます。',
    tip: 'Ctrl + Alt + Del を経由せずに一発で開けるので覚えておくと非常に便利です。',
    level: 3
  },
  {
    id: 'w11-17',
    category: 'win11',
    subcategory: 'システム・セキュリティ',
    keys: ['Alt', 'F4'],
    title: 'アプリを閉じる / シャットダウンメニュー',
    desc: '現在アクティブなアプリやウィンドウを終了します。デスクトップ上で押すと電源メニューが出ます。',
    tip: 'マウスで右上の「×」ボタンを狙う必要がなくなります。',
    level: 3
  },
  {
    id: 'w11-18',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['Win', 'E'],
    title: 'エクスプローラーを開く',
    desc: 'ファイルやフォルダを管理するエクスプローラーを新しく開きます。',
    tip: 'PC作業で最も頻繁に使うWindowsショートカットのひとつです。',
    level: 3
  },
  {
    id: 'w11-19',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['F2'],
    title: 'ファイル・フォルダの名前変更（リネーム）',
    desc: '選択中のファイルやフォルダの名前を編集状態にします。',
    tip: 'リネーム中に Tab キーを押すと、そのまま次のファイルの名前変更に移れます。',
    level: 3
  },
  {
    id: 'w11-20',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['Ctrl', 'Shift', 'N'],
    title: '新しいフォルダを作成',
    desc: 'エクスプローラーやデスクトップ上で、新規フォルダを一瞬で作成します。',
    tip: '右クリック → 新規作成 → フォルダー の3ステップが1秒になります。',
    level: 3
  },
  {
    id: 'w11-21',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['Alt', 'Enter'],
    title: '選択したファイルのプロパティを表示',
    desc: 'ファイルサイズや作成日時、場所などを確認するプロパティ画面を開きます。',
    tip: 'Altキーを押しながらファイルをダブルクリックしても同じ動作になります。',
    level: 2
  },
  {
    id: 'w11-22',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['Alt', '↑ / ← / →'],
    title: 'フォルダ階層の移動（上へ / 戻る / 進む）',
    desc: 'Alt + ↑ で1つ上の親フォルダへ、Alt + ← で前のフォルダへ戻ります。',
    tip: 'ブラウザの戻る/進むと同じ感覚でフォルダを自在に行き来できます。',
    level: 2
  },
  {
    id: 'w11-23',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['Shift', 'Delete'],
    title: 'ごみ箱に入れずに完全削除',
    desc: '選択したファイルをごみ箱を経由せず、直接完全に削除します。',
    tip: '復元できないため注意が必要ですが、大容量の不要ファイル消去に便利です。',
    level: 2
  },
  {
    id: 'w11-24',
    category: 'win11',
    subcategory: 'エクスプローラー・ファイル',
    keys: ['Ctrl', 'Shift', 'C'],
    title: 'ファイルのパスをコピー（Win11 エクスプローラー）',
    desc: '選択しているファイルやフォルダのフルパス（"C:\\..."）をクリップボードにコピーします。',
    tip: 'チャットで共有フォルダの場所を伝えたい時やファイル選択ダイアログで大活躍します。',
    level: 2
  },
  {
    id: 'w11-25',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能',
    keys: ['Win', 'Ctrl', 'D'],
    title: '新しい仮想デスクトップを作成',
    desc: '作業スペース（仮想デスクトップ）を新しく追加して切り替えます。',
    tip: '「仕事用」「調べ物用」「会議用」など画面を分けてスッキリ作業できます。',
    level: 2
  },
  {
    id: 'w11-26',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能',
    keys: ['Win', 'Ctrl', '← / →'],
    title: '仮想デスクトップを左右に切り替え',
    desc: '作成済みの複数の仮想デスクトップ間を瞬時にスライド移動します。',
    tip: 'Win + Ctrl + F4 で現在の仮想デスクトップを閉じることができます。',
    level: 2
  },
  {
    id: 'w11-27',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能',
    keys: ['Win', '. (ピリオド)'],
    title: '絵文字・顔文字・記号パネルを開く',
    desc: 'カーソル位置に絵文字（😊👍🎉）や顔文字、特殊記号（㎡、※、①など）を入力するパネルを出します。',
    tip: 'Win + ;（セミコロン）でも同じパネルが開きます。',
    level: 3
  },
  {
    id: 'w11-28',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能',
    keys: ['Win', 'H'],
    title: '音声入力（ディクテーション）を起動',
    desc: 'マイクに向かって話すだけで高精度にテキスト文字起こし・句読点入力を行います。',
    tip: '長文メールの下書きや議事録メモでタイピング疲れを軽減できます。',
    level: 1
  },
  {
    id: 'w11-29',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能',
    keys: ['Win', '数字 (1〜9)'],
    title: 'タスクバーのピン留めアプリを起動・切り替え',
    desc: 'タスクバーの左から数えて1〜9番目にピン留めされているアプリを起動・アクティブ化します。',
    tip: 'よく使うブラウザやExcelを1〜3番目に置いておくと爆速で呼び出せます。',
    level: 2
  },
  {
    id: 'w11-30',
    category: 'win11',
    subcategory: '仮想デスクトップ・便利機能',
    keys: ['Win', 'R'],
    title: '「ファイル名を指定して実行」を開く',
    desc: 'calc（電卓）、notepad（メモ帳）、mspaint、cmd などをコマンド入力で即起動します。',
    tip: 'shell:startup と入力すればスタートアップフォルダを一発で開けます。',
    level: 1
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
    tip: 'ファイルを保存して閉じる前に Ctrl + Home を押しておくと、次に開く人が見やすくなります！',
    level: 3
  },
  {
    id: 'ex-4',
    category: 'excel',
    subcategory: 'セル移動・範囲選択',
    keys: ['Ctrl', 'End'],
    title: 'データが存在する最終セルへ移動',
    desc: 'シート内でデータや書式が使われている一番右下のセルへジャンプします。',
    tip: '表全体の規模を確認したい時や末尾の余計な空白行を見つけたい時に便利です。',
    level: 2
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
    keys: ['Ctrl', 'PageUp / PageDown'],
    title: '隣のワークシートへ切り替え',
    desc: 'PageDown で右隣のシートへ、PageUp で左隣のシートへ瞬時に移動します。',
    tip: '複数シートを行き来して作業するとき、マウスで画面下のシートタブを探す手間がゼロになります。',
    level: 3
  },
  {
    id: 'ex-8',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['F2'],
    title: 'セル内の編集モードに入る',
    desc: '選択中のセルの末尾にカーソルを表示し、中身を直接編集できるようにします。',
    tip: 'ダブルクリック不要で文字の追記や数式の確認ができます。',
    level: 3
  },
  {
    id: 'ex-9',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Alt', 'Enter'],
    title: 'セル内で改行する',
    desc: '1つのセルの中で文章を折り返して改行します。',
    tip: '通常のEnterだと下のセルへ移動してしまいますが、Alt + Enterならセル内改行になります。',
    level: 3
  },
  {
    id: 'ex-10',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'D'],
    title: '上のセルの内容・数式をコピー（下方向へフィル）',
    desc: '1つ上のセルに入力されている値や数式を、現在のセルへ瞬時に複写します。',
    tip: '複数行を選択してから押すと、一番上のセルの内容を選択範囲すべてに一括コピーします。',
    level: 3
  },
  {
    id: 'ex-11',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'R'],
    title: '左のセルの内容・数式をコピー（右方向へフィル）',
    desc: '1つ左のセルに入力されている値や数式を、現在のセルへ複写します。',
    tip: 'Down（下）の D、Right（右）の R とセットで覚えましょう。',
    level: 2
  },
  {
    id: 'ex-12',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', '; (セミコロン)'],
    title: '今日の日付を入力',
    desc: '現在のセルに本日の日付（例: 2026/11/05）を固定値として一発入力します。',
    tip: 'TODAY()関数と違い、翌日ファイルを開き直しても日付が勝手に変わりません。',
    level: 3
  },
  {
    id: 'ex-13',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', ': (コロン)'],
    title: '現在の時刻を入力',
    desc: '現在のセルに今の時刻（例: 14:30）を固定値として一発入力します。',
    tip: '作業開始・終了時刻の記録やタイムスタンプ入力に最適です。',
    level: 2
  },
  {
    id: 'ex-14',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'Enter'],
    title: '選択した複数セルに同じ値・数式を一括入力',
    desc: '複数セルを選択した状態で文字や数式を打ち、Ctrl + Enter で確定すると全セルに同時入力されます。',
    tip: '空欄セルをまとめて「0」や「未定」で埋めたい時に圧倒的な威力を発揮します。',
    level: 3
  },
  {
    id: 'ex-15',
    category: 'excel',
    subcategory: 'データ入力・編集',
    keys: ['Ctrl', 'E'],
    title: 'フラッシュフィル（法則を自動認識して一括入力）',
    desc: '隣の列の入力例から法則（姓と名の分割や結合、抽出など）をAI的に認識し、残り全行を自動入力します。',
    tip: '関数を書かずに「氏名から苗字だけ抜き出す」「住所から都道府県だけ抜く」が一瞬で終わります！',
    level: 3
  },
  {
    id: 'ex-16',
    category: 'excel',
    subcategory: '数式・貼り付け・書式',
    keys: ['F4'],
    title: '絶対参照（$A$1）の切り替え / 直前の操作の繰り返し',
    desc: '数式編集中は「$A$1 → A$1 → $A1 → A1」を切り替え、通常時は直前の操作（色塗りや行挿入等）を繰り返します。',
    tip: '1つの機能で2役こなす、Excelユーザー全員が毎日使う神キーです。',
    level: 3
  },
  {
    id: 'ex-17',
    category: 'excel',
    subcategory: '数式・貼り付け・書式',
    keys: ['Alt', 'Shift', '= (イコール)'],
    title: 'オートSUM（SUM関数を自動挿入）',
    desc: '隣接する数値範囲を自動判定して `=SUM(...)` を一瞬で入力します。',
    tip: '合計を出したい範囲＋空白1行/1列を選択して押すと、縦計・横計をすべて同時計算できます。',
    level: 3
  },
  {
    id: 'ex-18',
    category: 'excel',
    subcategory: '数式・貼り付け・書式',
    keys: ['Ctrl', 'Alt', 'V'],
    title: '「形式を選択して貼り付け」ダイアログを開く',
    desc: '値のみ貼り付け（V）、書式のみ（T）、演算、行列の入れ替え（E）などをキーボードだけで実行します。',
    tip: 'Ctrl + Alt + V → V → Enter で「値貼り付け」が最速で完了します（最近のExcelは Ctrl+Shift+V も対応）。',
    level: 3
  },
  {
    id: 'ex-19',
    category: 'excel',
    subcategory: '数式・貼り付け・書式',
    keys: ['Ctrl', '1 (テンキー以外)'],
    title: '「セルの書式設定」を開く',
    desc: '表示形式、配置、フォント、罫線、塗りつぶしを詳細設定するダイアログを開きます。',
    tip: 'リボンメニューから探すより圧倒的に速く、あらゆる書式設定の起点になります。',
    level: 3
  },
  {
    id: 'ex-20',
    category: 'excel',
    subcategory: '数式・貼り付け・書式',
    keys: ['Ctrl', 'Shift', '1 (!)'],
    title: '数値の3桁カンマ区切り表示（#,##0）にする',
    desc: '選択した数値セルに千単位のカンマ（例: 1,234,567）を一発で設定します。',
    tip: '金額や数量の表を見やすく整えるときに毎回使えます。',
    level: 2
  },
  {
    id: 'ex-21',
    category: 'excel',
    subcategory: '数式・貼り付け・書式',
    keys: ['Ctrl', 'Shift', '4 ($)'],
    title: '通貨表示形式（¥1,234）にする',
    desc: '選択した数値セルに円マーク（¥）と3桁カンマを一発で付与します。',
    tip: '見積書や売上表の作成時に便利です。Ctrl + Shift + 5 (%) ならパーセント表示になります。',
    level: 2
  },
  {
    id: 'ex-22',
    category: 'excel',
    subcategory: '行列操作・テーブル・フィルタ',
    keys: ['Ctrl', '+ (プラス)'],
    title: 'セル・行・列の挿入',
    desc: '選択中のセル・行・列の位置に新しい空白を挿入します。',
    tip: 'メインキーボードの場合は Ctrl + Shift + ; (セミコロン) で「+」を入力します。',
    level: 3
  },
  {
    id: 'ex-23',
    category: 'excel',
    subcategory: '行列操作・テーブル・フィルタ',
    keys: ['Ctrl', '- (マイナス)'],
    title: 'セル・行・列の削除',
    desc: '選択中のセル・行・列を詰めて削除します。',
    tip: 'Shift + Space（行選択）→ Ctrl + -（行削除）のコンボは超高速です。',
    level: 3
  },
  {
    id: 'ex-24',
    category: 'excel',
    subcategory: '行列操作・テーブル・フィルタ',
    keys: ['Ctrl', 'Shift', 'L'],
    title: 'フィルター（オートフィルタ）のON / OFF切り替え',
    desc: '表の見出し行に絞り込み・並び替え用のドロップダウン矢印（▼）を設置・解除します。',
    tip: '見出しセル上で Alt + ↓ を押すと、マウスを使わずにフィルターメニューを開けます！',
    level: 3
  },
  {
    id: 'ex-25',
    category: 'excel',
    subcategory: '行列操作・テーブル・フィルタ',
    keys: ['Ctrl', 'T'],
    title: '範囲を「テーブル」に変換',
    desc: 'データ範囲を構造化参照・自動縞模様・フィルタ付きのExcelテーブルに変換します。',
    tip: '行を追加しても数式や書式が自動拡張されるため、データ管理の基本テクニックです。',
    level: 2
  },
  {
    id: 'ex-26',
    category: 'excel',
    subcategory: '行列操作・テーブル・フィルタ',
    keys: ['Alt', 'H → O → I'],
    title: '列幅の自動調整（文字数に合わせる）',
    desc: '選択している列の横幅を、入力されているデータの最大長さにピッタリ合わせます。',
    tip: 'Altキーから順番に H, O, I とポンポン押すだけで「###」表示を一瞬で解消できます。',
    level: 2
  },
  {
    id: 'ex-27',
    category: 'excel',
    subcategory: '行列操作・テーブル・フィルタ',
    keys: ['Ctrl', 'Shift', '@ (`)'],
    title: 'セルの値ではなく「数式そのもの」を一覧表示',
    desc: 'シート内のすべての数式セルについて、計算結果ではなく入力されている数式（=SUM...等）を表示します。',
    tip: 'どこに数式が入っていてどこがベタ打ち数値なのかを一目で監査できます。もう一度押すと戻ります。',
    level: 1
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
    tip: 'Underline の U。二重下線にしたい時は Ctrl + Shift + D です。',
    level: 3
  },
  {
    id: 'wd-3',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'I'],
    title: '斜体（イタリック）のON / OFF',
    desc: '選択したテキストを斜め（イタリック体）にします。',
    tip: 'Italic の I。',
    level: 2
  },
  {
    id: 'wd-4',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Space'],
    title: '文字の書式（装飾）をすべてクリアして初期状態に戻す',
    desc: '選択した文字についたフォントサイズ、色、太字、蛍光ペンなどの直接装飾を一発でリセットします。',
    tip: 'コピペで混ざってしまった変なフォントや文字サイズを瞬時に標準へ戻せる神ショートカットです。',
    level: 3
  },
  {
    id: 'wd-5',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Shift', '> / <'],
    title: 'フォントサイズを1段階ずつ拡大 / 縮小',
    desc: '選択したテキストの文字サイズを1段階大きく（>）または小さく（<）します。',
    tip: 'Ctrl + ] / [ を使うと1ポイント（1pt）単位で微調整できます。',
    level: 2
  },
  {
    id: 'wd-6',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Shift', 'F3'],
    title: '英字の大文字・小文字を切り替え',
    desc: '選択した英単語を「すべて大文字 → すべて小文字 → 先頭だけ大文字」の順に切り替えます。',
    tip: 'CapsLockを間違えて打ってしまった英文も打ち直す必要がありません。',
    level: 2
  },
  {
    id: 'wd-7',
    category: 'word',
    subcategory: '文字装飾・フォント',
    keys: ['Ctrl', 'Shift', 'C / V'],
    title: '書式のコピー（Ctrl+Shift+C）と貼り付け（Ctrl+Shift+V）',
    desc: 'ハケのアイコン（書式のコピー/貼り付け）と同じく、文字デザインだけを別箇所にコピー＆適用します。',
    tip: '一度 Ctrl+Shift+C すれば、何度でも別箇所に Ctrl+Shift+V で同じデザインを適用できます。',
    level: 2
  },
  {
    id: 'wd-8',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', 'E'],
    title: '段落を「中央揃え」にする',
    desc: 'カーソルがある段落（または選択範囲）をページ中央に配置します。',
    tip: '文書のタイトルや表紙を作成する時に一瞬で中央寄せできます。',
    level: 3
  },
  {
    id: 'wd-9',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', 'R'],
    title: '段落を「右揃え」にする',
    desc: 'カーソルがある段落を右端に揃えて配置します。',
    tip: 'ビジネス文書の日付や作成者名・宛名（以上、敬具など）を右寄せする時に必須です！',
    level: 3
  },
  {
    id: 'wd-10',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', 'L'],
    title: '段落を「左揃え」にする',
    desc: '中央揃えや右揃えにした段落を、通常の左揃えに戻します。',
    tip: 'Left（左）の L、Right（右）の R、Center（中央）は C がコピーなので E と覚えましょう。',
    level: 3
  },
  {
    id: 'wd-11',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', 'J'],
    title: '段落を「両端揃え」にする',
    desc: '複数行にわたる文章の右端が綺麗に揃うよう、文字間隔を自動調整します。',
    tip: '報告書や論文、契約書をプロっぽく整然と見せるための必須テクニックです。',
    level: 2
  },
  {
    id: 'wd-12',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', 'Enter'],
    title: '改ページを挿入',
    desc: '現在のカーソル位置でページを区切り、次のページの先頭へ移動します。',
    tip: 'Enterキーを連打して次のページへ送ると後からズレる原因になるため、必ず Ctrl+Enter を使いましょう！',
    level: 3
  },
  {
    id: 'wd-13',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Shift', 'Enter'],
    title: '段落を変えずに改行（行区切り）',
    desc: '新しい段落を作らず、同じ段落・同じ箇条書きの中で次の行へ折り返します。',
    tip: '番号付きリスト（1. 2. 3.）の途中で番号を増やさずに改行したい時に超便利です。',
    level: 3
  },
  {
    id: 'wd-14',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', 'M / Shift+M'],
    title: '段落のインデントを増やす（Ctrl+M）/ 減らす（Ctrl+Shift+M）',
    desc: '段落全体の左端を1字分ずつ右へ字下げ（インデント）したり、元に戻したりします。',
    tip: 'スペースキーで無理やり字下げすると2行目以降がズレるため、インデントを使いましょう。',
    level: 2
  },
  {
    id: 'wd-15',
    category: 'word',
    subcategory: '段落・配置・改ページ',
    keys: ['Ctrl', '1 / 2 / 5'],
    title: '行間を 1行（Ctrl+1）/ 2行（Ctrl+2）/ 1.5行（Ctrl+5）に変更',
    desc: '段落の行間スペースをワンタッチで切り替えます。',
    tip: '文章が詰まって読みにくい時は Ctrl + 5（1.5行間隔）にすると一気に読みやすくなります。',
    level: 1
  },
  {
    id: 'wd-16',
    category: 'word',
    subcategory: '見出し・箇条書き・構造移動',
    keys: ['Ctrl', 'Alt', '1 / 2 / 3'],
    title: '見出し1 / 見出し2 / 見出し3 スタイルを適用',
    desc: '現在の行にWord標準の「見出し1〜3」スタイルを一発で設定します。',
    tip: '見出しスタイルを使うと、ナビゲーションウィンドウや自動目次生成がそのまま使えて一石三鳥です。',
    level: 3
  },
  {
    id: 'wd-17',
    category: 'word',
    subcategory: '見出し・箇条書き・構造移動',
    keys: ['Ctrl', 'Shift', 'L'],
    title: '箇条書き（・）を開始',
    desc: '現在の段落を中黒（・）付きの箇条書きリストに変換します。',
    tip: 'Tabキーで階層を下げ、Shift + Tab で階層を上げられます。',
    level: 2
  },
  {
    id: 'wd-18',
    category: 'word',
    subcategory: '見出し・箇条書き・構造移動',
    keys: ['Alt', 'Shift', '↑ / ↓'],
    title: '段落（または表の行）を上下に入れ替え移動',
    desc: 'カーソルがある段落や箇条書き、表の行を切り取り＆貼り付けなしでそのまま上下へスライド移動します。',
    tip: '見出しに設定した行で実行すると、その見出し配下の本文ごと丸ごと順番を入れ替えられます！',
    level: 3
  },
  {
    id: 'wd-19',
    category: 'word',
    subcategory: 'カーソル移動・校閲・その他',
    keys: ['Ctrl', 'Backspace / Delete'],
    title: '単語単位でまとめて削除',
    desc: '1文字ずつではなく、カーソル前（Backspace）または後ろ（Delete）の1単語・1文節を一気に消去します。',
    tip: '長文の書き直しスピードが劇的に上がるため、普段の文字入力でも必須のワザです。',
    level: 3
  },
  {
    id: 'wd-20',
    category: 'word',
    subcategory: 'カーソル移動・校閲・その他',
    keys: ['Shift', 'F5'],
    title: '直前に編集していた場所へジャンプ',
    desc: '文書内の別のページを見に行ったあと、先ほどまで文字を打っていた元のカーソル位置へ瞬時に戻ります。',
    tip: 'ファイルを開いた直後に Shift + F5 を押すと「前回保存した時の最後の編集位置」へ飛べます！',
    level: 2
  },
  {
    id: 'wd-21',
    category: 'word',
    subcategory: 'カーソル移動・校閲・その他',
    keys: ['Ctrl', 'K'],
    title: 'ハイパーリンクの挿入・編集',
    desc: '選択したテキストにWebサイトのURLや別ファイルへのリンクを設定します。',
    tip: 'Wordだけでなく、Excel・PowerPoint・Teams・Slack・Notion等でもほぼ共通です！',
    level: 3
  },
  {
    id: 'wd-22',
    category: 'word',
    subcategory: 'カーソル移動・校閲・その他',
    keys: ['Ctrl', 'Shift', 'E'],
    title: '「変更履歴の記録」のON / OFF切り替え',
    desc: '文書の添削・赤入れを可視化する「変更履歴の記録」モードを開始または停止します。',
    tip: '契約書レビューや原稿チェックを始める時にすぐ切り替えられます。',
    level: 1
  },
  {
    id: 'wd-23',
    category: 'word',
    subcategory: 'カーソル移動・校閲・その他',
    keys: ['Ctrl', 'Alt', 'M'],
    title: 'コメントを挿入',
    desc: '選択箇所に対して校閲用の吹き出しコメントを追加します。',
    tip: 'Googleドキュメント等でも共通して使えるショートカットです。',
    level: 2
  },

  // ==========================================
  // ブラウザ (browser) - Chrome / Edge 共通
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
    title: '現在のタブを閉じる',
    desc: '今見ているタブを閉じます（Ctrl + F4 でも同じ）。',
    tip: '見終わったタブをサクサク閉じてブラウザを常に軽く保てます。',
    level: 3
  },
  {
    id: 'br-3',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'T'],
    title: '直前に閉じたタブを復元して開き直す',
    desc: '誤って閉じてしまったタブを、履歴ごと元の位置に復活させます。',
    tip: '連打すると過去に閉じたタブを順番に何個でも遡って復活できる救世主ショートカットです！',
    level: 3
  },
  {
    id: 'br-4',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Tab'],
    title: '右隣のタブへ切り替え（Ctrl+Shift+Tab で左隣へ）',
    desc: '開いているタブを右方向（Shift追加で左方向）へ順番に切り替えます。',
    tip: 'Ctrl + PageDown / PageUp でも同様に左右のタブを移動できます。',
    level: 3
  },
  {
    id: 'br-5',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', '数字 (1〜8) / 9'],
    title: '指定した番号のタブへ直接ジャンプ',
    desc: '左から1〜8番目のタブへ一瞬で移動します。Ctrl + 9 は常に「一番右端のタブ」へ移動します。',
    tip: 'メールやチャットを左端（1番・2番）に固定しておくと Ctrl + 1 でいつでも戻れます。',
    level: 2
  },
  {
    id: 'br-6',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'N'],
    title: 'シークレット（InPrivate）ウィンドウを開く',
    desc: '閲覧履歴やCookie、ログイン情報を残さないプライベートウィンドウを開きます。',
    tip: '別アカウントでのログイン確認やキャッシュの影響を受けない表示確認に最適です。',
    level: 2
  },
  {
    id: 'br-7',
    category: 'browser',
    subcategory: 'タブ・ウィンドウ管理',
    keys: ['Ctrl', 'Shift', 'A'],
    title: '開いている全タブ・最近閉じたタブを検索（Chrome/Edge）',
    desc: 'タブを大量に開きすぎてどこに何があるか分からない時、タイトルでタブを検索してジャンプできます。',
    tip: 'タブが20個以上開いている人の最強の味方です。',
    level: 2
  },
  {
    id: 'br-8',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー',
    keys: ['Ctrl', 'L'],
    title: 'アドレスバー（URL欄）を選択して即座に検索・URL入力',
    desc: 'ページ内のどこを見ていても、一瞬で上部のアドレスバー（検索バー）にフォーカスして全選択します。',
    tip: 'Alt + D や F6 でも同じ動作になります。そのまま Ctrl + C を押せば現在のURLを即コピーできます！',
    level: 3
  },
  {
    id: 'br-9',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー',
    keys: ['Alt', 'Enter'],
    title: 'アドレスバーの検索・URLを「新しいタブ」で開く',
    desc: '現在のページを残したまま、アドレスバーに入力した検索ワードやURLを別タブで開きます。',
    tip: 'Ctrl + L（アドレスバー選択）→ 検索語入力 → Alt + Enter のコンボは最高に快適です。',
    level: 3
  },
  {
    id: 'br-10',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー',
    keys: ['Alt', '← / →'],
    title: '前のページに戻る（Alt+←）/ 次のページに進む（Alt+→）',
    desc: 'ブラウザ左上の「←（戻る）」「→（進む）」ボタンと同じ動作をします。',
    tip: 'マウスのサイドボタンがない環境でもキーボードだけで快適にWebブラウジングできます。',
    level: 3
  },
  {
    id: 'br-11',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー',
    keys: ['Ctrl', 'R'],
    title: 'ページの再読み込み（リロード）',
    desc: '現在のWebページを最新の状態に更新します（F5キーと同じ）。',
    tip: 'ホームポジションから手を離さずにリロードできるため F5 より押しやすいです。',
    level: 3
  },
  {
    id: 'br-12',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー',
    keys: ['Ctrl', 'Shift', 'R'],
    title: 'スーパーリロード（キャッシュを無視して完全再読み込み）',
    desc: '古いキャッシュ画像やCSSを破棄し、サーバーから最新データを強制的に再取得します（Ctrl + F5 と同じ）。',
    tip: 'Webサイトの表示が崩れている時や更新が反映されない時の特効薬です。',
    level: 3
  },
  {
    id: 'br-13',
    category: 'browser',
    subcategory: 'ナビゲーション・アドレスバー',
    keys: ['Ctrl', 'クリック'],
    title: 'リンクをバックグラウンドの「新しいタブ」で開く',
    desc: '現在のページを表示したまま、クリックしたリンク先を裏で新しいタブとして開きます。',
    tip: '検索結果の上位ページを Ctrl + クリック で次々開いてから順番に読むと効率が跳ね上がります（マウスホイール押し込みでも同じ）。',
    level: 3
  },
  {
    id: 'br-14',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Space'],
    title: '1画面分下へスクロール（Shift+Space で上へ）',
    desc: 'Webページを読み進めるとき、ちょうど1画面分ずつ下へスムーズにスクロールします。',
    tip: 'Shift + Space を押すと1画面分上へ戻ります。長文記事を読むときにマウスホイールいらずです。',
    level: 2
  },
  {
    id: 'br-15',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Home / End'],
    title: 'ページの最上部（Home）/ 最下部（End）へ一瞬で移動',
    desc: 'どんなに縦に長いWebページでも、一瞬でページの先頭またはフッターまでジャンプします。',
    tip: 'ノートPCでHome/Endが独立していない場合は Fn + ← / → に割り当てられていることが多いです。',
    level: 2
  },
  {
    id: 'br-16',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Ctrl', '+ / -'],
    title: 'ページの拡大（ズームイン）/ 縮小（ズームアウト）',
    desc: 'Webページの文字や画像サイズを拡大・縮小表示します（Ctrl + マウスホイールでも可能）。',
    tip: '文字が小さくて読みづらいサイトや、画面全体を1枚に収めてスクショしたい時に便利です。',
    level: 3
  },
  {
    id: 'br-17',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['Ctrl', '0 (ゼロ)'],
    title: 'ページの拡大率を100%（標準サイズ）に戻す',
    desc: '拡大・縮小したページの表示倍率を一発でデフォルトの100%にリセットします。',
    tip: 'うっかり Ctrl + マウスホイール で画面が大きくなりすぎた時も一瞬で直せます。',
    level: 3
  },
  {
    id: 'br-18',
    category: 'browser',
    subcategory: 'ページ操作・表示・ズーム',
    keys: ['F11'],
    title: '全画面表示（フルスクリーン）のON / OFF',
    desc: 'タブバーやアドレスバーを隠し、モニター全面にWebページを表示します。',
    tip: 'プレゼンやダッシュボード表示に最適。もう一度 F11 を押すと元に戻ります。',
    level: 2
  },
  {
    id: 'br-19',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・ツール',
    keys: ['Ctrl', 'D'],
    title: '現在のページをブックマーク（お気に入り）に登録',
    desc: '見ているページをワンタッチでブックマークに追加します。',
    tip: 'Ctrl + Shift + D なら、現在開いているすべてのタブを1つのフォルダにまとめてブックマークできます！',
    level: 3
  },
  {
    id: 'br-20',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・ツール',
    keys: ['Ctrl', 'Shift', 'B'],
    title: 'ブックマークバーの表示 / 非表示を切り替え',
    desc: 'アドレスバー直下のブックマークバーを表示したり隠したりします。',
    tip: '画面共有やスクショ撮影時にプライベートなブックマークをサッと隠したい時に必須です！',
    level: 2
  },
  {
    id: 'br-21',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・ツール',
    keys: ['Ctrl', 'H'],
    title: '閲覧履歴（ヒストリー）を開く',
    desc: '過去に見たWebページの履歴一覧を新しいタブで開きます。',
    tip: '「昨日見たあのサイトどれだっけ？」という時にすぐ検索できます。',
    level: 3
  },
  {
    id: 'br-22',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・ツール',
    keys: ['Ctrl', 'J'],
    title: 'ダウンロード履歴を開く',
    desc: 'ブラウザでダウンロードしたファイルの一覧と保存先フォルダへのリンクを表示します。',
    tip: 'ダウンロードしたPDFやインストーラーがどこに行ったか分からない時に一発で見つかります。',
    level: 3
  },
  {
    id: 'br-23',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・ツール',
    keys: ['Ctrl', 'Shift', 'Delete'],
    title: '閲覧履歴・キャッシュ・Cookieの消去画面を開く',
    desc: '期間を指定してキャッシュや閲覧履歴を削除するダイアログを直接開きます。',
    tip: '設定メニューの奥深くまで探す必要がなくなります。',
    level: 2
  },
  {
    id: 'br-24',
    category: 'browser',
    subcategory: 'ブックマーク・履歴・ツール',
    keys: ['F12'],
    title: 'デベロッパーツール（開発者ツール）を開く',
    desc: 'HTML/CSSの検証、コンソール、スマホ表示シミュレーションなどを行う開発者ツールを開きます（Ctrl + Shift + I でも同じ）。',
    tip: 'Ctrl + Shift + C を押すと、ページ上の気になる要素にマウスを合わせるだけで要素検査ができます。',
    level: 1
  }
];

