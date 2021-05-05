import {booksAction, booksState} from "../types/books";

const initialState: booksState = {
    books: [
        {id: 1, name: 'Метро 2033',author: 'Дмитрий Глуховский',read: true, readLater: false,rating: 8.0,
            desc: 'Двадцать лет спустя Третьей мировой войны последние выжившие люди прячутся на станциях и в туннелях московского метро, самого большого на Земле противоатомного бомбоубежища. Поверхность планеты заражена и непригодна для обитания, и станции метро становятся последним пристанищем для человека. Они превращаются в независимые города-государства, которые соперничают и воюют друг с другом. Они не готовы примириться даже перед лицом новой страшной опасности, которая угрожает всем людям окончательным истреблением. Артем, двадцатилетний парень со станции ВДНХ, должен пройти через все метро, чтобы спасти свой единственный дом – и все человечество. «Метро 2033» – культовый роман-антиутопия, один из главных российских бестселлеров нулевых. Переведен на 37 иностранных языков, заинтересовал Голливуд, превращен в атмосферные компьютерные блокбастеры, породил целую книжную вселенную и настоящую молодежную субкультуру во всем мире.',
            img: 'https://cdn1.ozone.ru/s3/multimedia-0/6011145708.jpg',},
        {id: 2, name: 'Метро 2034',author: 'Дмитрий Глуховский',read: true, readLater: false,rating: 8.0,
            desc: '«Метро 2033» – один из главных бестселлеров последних лет. 300 000 купленных книг. Переводы на десятки иностранных языков. Титул лучшего дебюта Европы. «Метро 2034» – долгожданное продолжение этого романа. Всего за полгода число читателей «Метро 2034» в Интернете достигло полумиллиона человек. Западные издательства купили права на «Метро 2034» даже до того, как роман был дописан.…2034 год. Весь мир разрушен ядерной войной. Крупные города стерты с лица Земли, о мелких ничего не известно. Остатки человечества коротают последние дни в бункерах и бомбоубежищах, самое большое из которых – Московский Метрополитен. Все, кто оказался в нем, когда на столицу падали боеголовки ракет, спаслись. Для уцелевших после Судного дня метро стало новым Ноевым ковчегом. Поверхность планеты заражена радиацией и населена чудовищами. Отныне жизнь возможна только под землей.Станции превратились в города-государства, а в туннелях властвуют тьма и страх. Жители Севастопольской, маленькой подземной Спарты, ценой невероятных усилий выживают на своей станции и обороняют ее.Но однажды Севастопольская оказывается отрезанной от большого метро, всем ее обитателям грозит гибель. Чтобы спасти людей, нужен настоящий герой…',
            img: 'https://avatars.mds.yandex.net/get-zen_doc/1108048/pub_5f5d9e1ed7092473174a80ee_5f5daa4f354535081e8b80c6/scale_1200',},
        {id: 3, name: 'Метро 2035',author: 'Дмитрий Глуховский',read: true, readLater: false,rating: 8.0,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-4/6011145964.jpg',},
        {id: 4, name: 'Потрет Дориана Грея',author: 'Оскар Уальд',read: true, readLater: false,rating: 7.2,
            desc: '',
        img: 'https://cdn1.ozone.ru/multimedia/c1200/1018732448.jpg',},
        {id: 5, name: '1984',author: 'Джордж Оруэлл',read: true, readLater: false,rating: 8.5,
            desc: '',
            img: 'https://ufa.top-1000.ru/foto/9de993e17b7d832994868c7727fb51de.jpg',},
        {id: 6, name: 'Самый богатый человек в Вавилоне',author: 'Джордж Клейсон',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://shop.kp.ru/catalog/media/kplitres/f/7/5a0f1fe5688f7.jpg',},
        {id: 7, name: 'О дивный новый мир',author: 'Олдос Хаксли',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://cv7.litres.ru/pub/c/bumajnaya-kniga/cover_max1500/64067377-avtor-o-divnyy-novyy-mir-haksli-oldos-64067377.jpg',},
        {id: 8, name: 'Богатый папа бедный папа',author: 'Роберт Киосаки',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-a/6030018898.jpg',},
        {id: 9, name: 'Тонкое искусситво пофигизма',author: 'Марк Мэнсон',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://avatars.mds.yandex.net/get-zen_doc/1570751/pub_5e6220326c3f9e70e9060a4c_5e62221f699c9613543af698/scale_1200',},
        {id: 10, name: 'На западном фронте без перемен',author: 'Эрих Мария Ремарк',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://фантазеры.рф/wa-data/public/shop/products/10/44/34410/images/80449/80449.750x0.jpg',},
        {id: 11, name: 'Три товарища',author: 'Эрих Мария Ремарк',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-o/c1200/6008526480.jpg',},
        {id: 12, name: 'Мартин Иден',author: 'Джек Лондон',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-p/6008954917.jpg',},
        {id: 13, name: 'Финансист',author: 'Теодор Драйзер',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://minemshop.ru/images/1021776622.jpg',},
        {id: 14, name: 'Жизнь взаймы',author: 'Эрих Мария Ремарк',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-m/6021208738.jpg',},
        {id: 15, name: 'Скотный двор',author: 'Джордж Оруэлл',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-d/6025554901.jpg',},
        {id: 16, name: 'Расширить сознание легально',author: 'Владислав Гайдулевич',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://rt-static.rt.ru/sites/default/files/img/litres/42351562.jpg',},
        {id: 17, name: 'Титан',author: 'Теодор Драйзер',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'http://img.yakaboo.ua/media/catalog/product/4/3/434561_77151204.jpg',},
        {id: 18, name: 'Старик и море',author: 'Эрнест Хемингуэй',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://creativity.mypartnershop.ru/image/1019616453.jpg',},
        {id: 19, name: 'МЫ',author: 'Евгений Замятин',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://im0-tub-ru.yandex.net/i?id=d5449bbb0edcf833a5ac00d8cd5c040b&ref=rim&n=33&w=120&h=188',},
        {id: 20, name: 'Важные годы',author: 'Мэг Джей',read: true, readLater: false,rating: 7.2,
            desc: '',
            img: 'https://www.mann-ivanov-ferber.ru/assets/images/covers/95/11295/2.00x-thumb.png',},
        {id: 21, name: 'Гении и аутсайдеры',author: 'Мальком Гладуэлл',read: true, readLater: false,rating: 9.2,
            desc: '',
            img: 'https://www.mann-ivanov-ferber.ru/assets/images/covers/06/3606/2.00x-thumb.png',},
        {id: 22, name: 'Бойцовский клуб',author: 'Чак Паланик',read: true, readLater: false,rating: 8.0,
            desc: '',
            img: 'https://cmp24.ru/images/prodacts/sourse/61778/61778587_boytsovskiy-klub-ast.jpg',},
        {id: 23, name: 'Заводной апельсин',author: 'Энтони Бёрджесс',read: false, readLater: true,rating: 8.0,
            desc: '',
            img: 'https://images.wbstatic.net/big/new/2370000/2374413-1.jpg',},
        {id: 24, name: 'Не тупи',author: 'Джен Синсеро',read: false, readLater: true,rating: 8.0,
            desc: '',
            img: 'https://cdn1.ozone.ru/s3/multimedia-h/6010544525.jpg',},
        ],
    readBooks: [],
    readLaterBooks: [],
    isBooksFetching: false,
    foundBooks: [],
}

export const booksReducer = (state = initialState, action: any): booksState => {
    switch (action.type) {
        case booksAction.SET_FOUND_BOOKS:
            return {
                ...state, foundBooks: [...action.payload]
            }
        case booksAction.BOOKS_FETCH_TOGGLE:
            return {
                ...state, isBooksFetching: action.payload
            }
        case booksAction.ADD_TO_READ_LATER_BOOKS:
            const books = state.books.filter(el => el.id === action.payload)
            const book = books[0]
            let newArr = []
            if (books.includes(book)) {
                book.readLater = !book.readLater
                newArr = [...state.readLaterBooks, book]
            } else {
                newArr = state.readLaterBooks
            }
            return {
                ...state, readLaterBooks: newArr
            }
        case booksAction.DEL_FROM_READ_LATER_BOOKS:
            const readLaterBooks = state.readLaterBooks.filter(el => el.id !== action.payload)
            const readLaterBook = state.readLaterBooks.filter(el => el.id === action.payload)[0]
            readLaterBook.readLater = !readLaterBook.readLater
            return {
                ...state, readLaterBooks: [...readLaterBooks]
            }
        default:
            return state
    }
}
