export default {
    head: {
        title: 'Viento Mirror',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js' },
            { src: 'https://mirror.viento.me/etc/static/js/speedtest.js' },
        ]
    },
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL,
        DB_PATH: process.env.DB_PATH,
    },
    plugins: [],
    components: true,
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/i18n",
    ],
    i18n: {
        locales: [{
                code: 'ko',
                name: '한국어'
            },
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'jp',
                name: '日本語',
            },
        ],
        defaultLocale: 'ko',
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        vueI18n: {
            fallbackLocale: 'ko',
            silentTranslationWarn: process.env.NODE_ENV === 'production',
            messages: {
                ko: {
                    new_ver: '현재 새 버전의 미러 메인페이지를 사용중입니다. 문제가 있는 경우 문의 메일을 통해 신고 부탁드립니다.',
                    summary: '개요',
                    welcome: '비엔토 미러에 오신 것을 환영합니다!',
                    summary_info: '비엔토 미러에서는 오픈 소스 소프트웨어 미러링 및 여러 파일과 소프트웨어의 미러링 서비스를 제공하며, HTTP로 접근하실 수 있습니다. 시스템의 운영 체제는 Ubuntu GNU/Linux이며, nginx, rsync 등의 자유 소프트웨어를 사용하고 있습니다.',
                    disclaimer: '면책 조항',
                    disclaimer_info_1: '비엔토 미러 서비스 운영자는 서비스에 대한 가능한 모든 법적 책임을 지지 않습니다. 모든 서비스는 사용자 본인 책임 하에 사용됩니다.',
                    disclaimer_info_2: '비엔토 미러 서비스 운영자는 이 서비스로 인하여 발생될 가능성이 있는 문제에 대하여 책임을 지지 않습니다.',
                    disclaimer_info_3: '서비스 사용 기록은 자동으로 수집되며, 서비스의 품질 개선 및 통계 분석 목적으로 사용될 수 있으며, 서비스 개선을 위하여 이용에 제한이 가해질 수도 있습니다.',
                    sync_status: '동기화 상태',
                    sync_cycle: '동기화 주기',
                    source: '소스',
                    last_time: '마지막 동기화 시각',
                    update: '업데이트',
                    unknown: '알 수 없음',
                    error: '오류',
                    goto: '저장소로 이동',
                    contact: '문의하기',
                    success: '성공',
                    failed: '실패',
                    syncing: '동기화중',
                    package: '패키지',
                    address: '서버 주소',
                    notice: '공지사항',
                    speedcheck: '속도 체크',
                    net_usage: '네트워크 사용량',
                    spec: '서버 상세',
                    contect_info: '연락처',
                    twitter: '트위터',
                    email: '이메일',
                    checkout: '확인하기',
                    speedtest_title: '속도 체크',
                    speedtest_detail: '30MiB 파일을 내려받는데 걸리는 속도를 테스트합니다.',
                    speedtest_size: '파일 크기',
                    speedtest_elapsed: '걸린 시간',
                    speedtest_avg: '평균 속도',
                    tryagain: '다시 시도',
                    start: '시작',
                    net_usage_detail_1: '하단의 링크를 통해 미러의 네트워크 사용량을 조회하실 수 있습니다.',
                    net_usage_detail_2: '스패머를 막기 위해 유저이름은 "goodman", 비밀번호는 "i-am-not-a-spammer"로 로그인하셔야 열람이 가능합니다.',
                },
                en: {
                    new_ver: 'We are currently using the new version of the mirror main page. If there is a problem, please report it through the inquiry email.',
                    summary: 'Summary',
                    welcome: 'Welcome to Viento Mirror!',
                    summary_info: 'Viento Mirror provides open source software mirroring and mirroring of multiple files and software, and can be accessed via HTTP. The operating system of the system is Ubuntu GNU/Linux, and free software such as nginx and rsync are used.',
                    disclaimer: 'Disclaimer',
                    disclaimer_info_1: 'The Viento Mirror service operator disclaims any and all possible legal liability for the service. ALL SERVICES ARE USED AT YOUR OWN RISK.',
                    disclaimer_info_2: 'The Viento Mirror service operator is not responsible for any problems that may arise from this service.',
                    disclaimer_info_3: 'Service usage records are automatically collected and can be used for service quality improvement and statistical analysis, and restrictions on use may be imposed for service improvement.',
                    sync_status: 'Sync Status',
                    sync_cycle: 'Synchronization cycle',
                    source: 'Source',
                    last_time: 'Last sync time',
                    update: 'Update',
                    unknown: 'Unknown',
                    success: 'Success',
                    failed: 'Failed',
                    syncing: 'Syncing',
                    goto: 'Go to storage',
                    contact: 'Contact',
                    package: 'Package',
                    address: 'Available w/',
                    notice: 'Notifications',
                    speedcheck: 'Network Usage',
                    net_usage: 'Network Usage',
                    spec: 'Specification',
                    contect_info: 'Contact',
                    twitter: 'Twitter',
                    email: 'E-mail',
                    checkout: 'Check out',
                    speedtest_title: 'Speed Test',
                    speedtest_detail: 'Test how much time takes to download a 30MiB file.',
                    speedtest_size: 'File Size',
                    speedtest_elapsed: 'Elapsed Time',
                    speedtest_avg: 'Avg Speed',
                    tryagain: 'Try again',
                    start: 'Start',
                    net_usage_detail_1: 'You can see the network usage of Mirror via the links below.',
                    net_usage_detail_2: 'To prevent spammers, you should login with username "goodman" and password "i-am-not-a-spammer".',
                },
                jp: {
                    new_ver: '現在ミラーメインページの新バージョンを使用しています。 問題がある場合は、お問い合わせメールでご報告ください。',
                    summary: 'まとめ',
                    welcome: 'VientoMirrorへようこそ！',
                    summary_info: 'VientoMirrorは、オープンソースのソフトウェアミラーリングと複数のファイルとソフトウェアのミラーリングを提供し、HTTP経由でアクセスできます。 システムのオペレーティングシステムはUbuntuGNU/Linuxで、nginxやrsyncなどのフリーソフトウェアが使用されています。',
                    disclaimer: '免責事項',
                    disclaimer_info_1: 'VientoMirrorサービスオペレータは、本サービスに対する法的責任を一切負いません。 すべてのサービスは、お客様の責任において使用されます。',
                    disclaimer_info_2: 'VientoMirrorサービスオペレータは、このサービスによって発生する可能性のある問題について責任を負いません。',
                    disclaimer_info_3: 'サービス利用記録は自動的に収集され、サービス品質向上および統計分析に活用でき、サービス改善のために利用制限がかかることがある。',
                    sync_status: '同期状態',
                    sync_cycle: '同期サイクル',
                    source: '出典',
                    last_time: '最後の同期時間',
                    update: 'アップデート',
                    unknown: '不明',
                    success: '成功',
                    failed: '失敗した',
                    syncing: '同期化',
                    goto: 'ストレージに移動',
                    contact: '連絡先',
                    package: 'パッケージ',
                    address: 'サーバーアドレス',
                    notice: 'お知らせ',
                    speedcheck: 'ネットワークの使用状況',
                    net_usage: 'ネットワークの使用状況',
                    spec: '仕様書',
                    contect_info: '連絡先',
                    twitter: 'Twitter',
                    email: 'E-mail',
                    checkout: '確認',
                    speedtest_title: '速度テスト',
                    speedtest_detail: '30MiBファイルのダウンロードにかかる時間をテストします。',
                    speedtest_size: 'ファイルサイズ',
                    speedtest_elapsed: '経過時間',
                    speedtest_avg: '平均速度',
                    tryagain: '再試行',
                    start: 'スタート',
                    net_usage_detail_1: 'Mirrorのネットワーク使用状況は、次のリンクから確認できます。',
                    net_usage_detail_2: 'スパム送信者を防止するには、ユーザー名「goodman」とパスワード「i-am-not-a-spammer」でログインする必要があります。',
                },
            }
        }
    },
    build: {},
    loading: {
        color: 'blue',
        height: '3px',
        throttle: 0,
    },
}
