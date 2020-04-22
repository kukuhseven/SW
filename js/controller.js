angular.module('maxi',[]).controller('maxikomp', function($scope){
    $scope.nama      = 'Maxi Komputer';
    $scope.deskripsi = 'Maxi Komputer merupakan salah satu Toko Komputer termurah se-Jogja menyediakan berbagai peripheral dan aksesoris komputer.';
    
    // nomor telepon
    $scope.telepon   = 'Call (0274) 581158';
    $scope.wa = 'Whatsapp 0857 2799 7753';

    // alamat
    $scope.alamat1   = 'Jl. Rajawali No. 6';
    $scope.alamat2   = 'Jl. Rajawali No. 6, Mrican, Caturtunggal';
    $scope.alamat3   = 'Jl. Rajawali No. 6, Mrican, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281';

    // jam buka
    $scope.jambuka   = 'Daily 09:00 – 21:00';

    // email
    $scope.email     = 'maxi.komputer@gmail.com';

    //catalog
    $scope.catalog   = [
        {
            title:'Laptops & PCs',
            src:'images/catalog/computers.svg',
            alt:'Laptops & PCs',
            total:'367',
            link0:'category',
            sub1:'Laptops',
            link1:'subcategory',
            sub2:'PCs',
            link2:'subcategory',
            sub3:'Peripherals',
            link3:'subcategory',
            sub4:'Keyboards & Mouses',
            link4:'subcategory',
            sub5:'Accessories',
            link5:'subcategory'
        },
        {
            title:'Phones & Gadgets',
            src:'images/catalog/phones.svg',
            alt:'Phones & Gadgets',
            total:'144',
            link0:'category',
            sub1:'Gadgets',
            link1:'subcategory',
            sub2:'Powerbanks',
            link2:'subcategory',
            sub3:'Charging and batteries',
            link3:'subcategory',
            sub4:'Gamepads',
            link4:'subcategory',
            sub5:'Phone Accessories',
            link5:'subcategory'
        },
        {
            title:'Monitors & Projectors',
            src:'images/catalog/monitors.svg',
            alt:'Monitors & Projectors',
            total:'58',
            link0:'category',
            sub1:'Monitors',
            link1:'subcategory',
            sub2:'Satellite & Tuner TV',
            link2:'subcategory',
            sub3:'Projectors',
            link3:'subcategory',
            sub4:'Converters & Connectors',
            link4:'subcategory',
            sub5:'Cables & Accessories',
            link5:'subcategory'
        },
        {
            title:'Games & Accessories',
            src:'images/catalog/games.svg',
            alt:'Games & Accessories',
            total:'13',
            link0:'category',
            sub1:'Printers',
            link1:'subcategory',
            sub2:'Inks',
            link2:'subcategory',
            sub3:'Cartridges',
            link3:'subcategory',
            sub4:'Paper &amp; Accessories',
            link4:'subcategory',
            sub5:'',
            link5:''
        },
        {
            title:'Printers, Inks & Cartrdiges',
            src:'images/catalog/printers.svg',
            alt:'Printers, Inks & Cartrdiges',
            total:'59',
            id:'printers',
            link0:'category',
            sub1:'Games',
            link1:'subcategory',
            sub2:'Softwares',
            link2:'subcategory',
            sub3:'Joysticks & gamepads',
            link3:'subcategory',
            sub4:'Game Accessories',
            link4:'subcategory',
            sub5:'',
            link5:''
        }

    ]

    // Pages
    $scope.pages     = [
        {title: 'Catalog', link:'subcategory'},
        {title: 'Category', link:'subcategory'},
        {title: 'Subcategory', link:'subcategory'},
        {title: 'Product', link:'subcategory'},
        {title: 'Favorites', link:'subcategory'},
        {title: 'Cart', link:'subcategory'},
        {title: 'Checkout', link:'subcategory'},
        {title: 'Compare', link:'subcategory'},
        {title: 'Account', link:'subcategory'},
        {title: 'Personal', link:'subcategory'},
        {title: 'Settings', link:'subcategory'},
        {title: 'Article', link:'subcategory'},
        {title: 'FAQ', link:'subcategory'},
        {title: 'Delivery', link:'subcategory'},
        {title: 'News', link:'subcategory'}
    ]

    // category
    $scope.category  = [
        {title: 'Laptops',src: 'laptops',alt:'Laptops',price:'Rp 2.999.000'},
        {title: 'Desktop PC',src: 'pc',alt:'Desktop PC',price:'Rp 1.599.000'},
        {title: 'Processors',src: 'processors',alt:'Processors',price:'Rp 999.000'},
        {title: 'Graphic Card',src: 'vga',alt:'Graphic Card',price:'Rp 1.999.000'},
        {title: 'Monitors',src: 'monitors',alt:'Monitors',price:'Rp 1.499.000'},
        {title: 'Motherboards',src: 'motherboards',alt:'Motherboards',price:'Rp 999.000'},
        {title: 'Cases',src: 'cases',alt:'Cases',price:'Rp 299.000'},
        {title: 'PC Cooler',src: 'cooler',alt:'PC Cooler',price:'Rp 299.000'},
        {title: 'Power Supply',src: 'psu',alt:'Power Supply',price:'Rp 199.000'},
        {title: 'Accessories',src: 'accessories',alt:'Accessories',price:'Rp 99.000'},
        {title: 'Storage',src: 'storage',alt:'Storage',price:'Rp 299.000'},
        {title: 'Memory',src: 'ram',alt:'Memory',price:'Rp 199.000'},
        {title: 'Speaker',src: 'speaker',alt:'Speaker',price:'Rp 299.000'}
    ];

    //brands
    $scope.brands    = [
        {title:'Acer',src:'acer',alt:'Acer'},
        {title:'Asus',src:'asus',alt:'Asus'},
        {title:'HP',src:'hp',alt:'HP'},
        {title:'Lenovo',src:'lenovo',alt:'lenovo'},
        {title:'MSI',src:'msi',alt:'MSI'},
        {title:'Dell',src:'dell',alt:'Dell'},
        {title:'Intel',src:'intel',alt:'Intel'},
        {title:'AMD',src:'amd',alt:'AMD'},
        {title:'Microsoft',src:'microsoft',alt:'Microsoft'},
        {title:'Asrock',src:'asrock',alt:'Asrock'},
        {title:'Gigabyte',src:'gigabyte',alt:'Gigabyte'},
        {title:'Zotac',src:'zotac',alt:'Zotac'},
        {title:'Epson',src:'epson',alt:'Epson'},
        {title:'Canon',src:'canon',alt:'Canon'},
        {title:'LG',src:'lg',alt:'LG'},
        {title:'Cooler Master',src:'cooler-master',alt:'Cooler Master'},
        {title:'Deepcool',src:'deepcool',alt:'Deepcool'},
        {title:'Corsair',src:'corsair',alt:'Corsair'},
        {title:'Samsung',src:'samsung',alt:'Samsung'},
        {title:'Kingston',src:'kingston',alt:'Kingston'},
        {title:'Sandisk',src:'sandisk',alt:'Sandisk'},
        {title:'Adata',src:'adata',alt:'Adata'},
        {title:'Logitech',src:'logitech',alt:'Logitech'},
        {title:'Rexus',src:'rexus',alt:'Rexus'},
        {title:'Fantech',src:'fantech',alt:'Fantech'},
        {title:'Sony',src:'sony',alt:'Sony'}
    ];

    $scope.brands2    = [
        {title:'Acer',src:'acer',alt:'Acer', link:'subcategory'},
        {title:'Asus',src:'asus',alt:'Asus', link:'subcategory'},
        {title:'HP',src:'hp',alt:'HP', link:'subcategory'},
        {title:'Lenovo',src:'lenovo',alt:'lenovo', link:'subcategory'},
        {title:'Intel',src:'intel',alt:'Intel', link:'subcategory'},
        {title:'AMD',src:'amd',alt:'AMD', link:'subcategory'},
        {title:'Microsoft',src:'microsoft',alt:'Microsoft', link:'subcategory'},
        {title:'Gigabyte',src:'gigabyte',alt:'Gigabyte', link:'subcategory'},   
        {title:'Canon',src:'canon',alt:'Canon', link:'subcategory'},
        {title:'LG',src:'lg',alt:'LG', link:'subcategory'},      
        {title:'Samsung',src:'samsung',alt:'Samsung', link:'subcategory'},
        {title:'Logitech',src:'logitech',alt:'Logitech', link:'subcategory'}
    ];

    // marketplace
    $scope.marketplace = [
        {title:'Tokopedia', src:'tokopedia', alt:'Tokopedia', desc:'Ingin transksi di Tokopedia dan dapat Cashback?'},
        {title:'Bukalapak', src:'bukalapak', alt:'Bukalapak', desc:'Ambil barang langsung dengan fitur Bukalapak?'},
        {title:'Shopee', src:'shopee', alt:'Shopee', desc:'Gratis Ongkir atau Cashback dari Shopee?'},
        {title:'Blibli', src:'blibli', alt:'Blibli', desc:'Ingin harga murah dari Flash Sale Blibli?'},
        {title:'OLX', src:'olx', alt:'OLX', desc:'Ribet pakai Kurir dan ingin COD via OLX?'}
    ];

    // footer
    $scope.footer1   = ['Catalog','Brands','Delivery','FAQ','Payment'];
    $scope.footer2   = ['About','Contacts','Blog','News'];

    //FAQ
    $scope.faq       = [
        {
            question:'Apakah transaksi melalui website ini aman dan terjamin?',
            detail:'Kami dapat memberikan jaminan 100% bahwa transaksi melalui website ini aman. Jika anda ragu, anda bisa mengunjungi Toko Offline kami di'
        },
        {
            question:'Saya masih ragu untuk melakukan transaksi melalui website ini? Apakah ada metode lain?',
            detail:'Selain dapat mengunjungi Toko Offline kami, anda bisa berkunjung ke toko kami yang sudah tersedia di Marketplace di Indonesia pada menu di bawah.'
        },
        {
            question:'Apakah barang yang di jual di website ini Original dan Baru?',
            detail:'Jika ada barang OEM atau KW serta kondisi Second, maka akan kami infokan pada deskripsi item yang bersangkutan. Untuk barang status Original kami berikan jaminan 100% dan garansi uangk kembali jika barang OEM atau KW.'
        },
        {
            question:'Apakah harga sudah pas atau masih boleh nego?',
            detail:'Harga yang kami berikan bersifat NETT atau sudah pas. Kami memberikan harga termurah se-Jogja Raya. Akan tetapi kami memberikan potongan untuk pembelian partai besar. Setiap potongan akan kami sesuaikan dengan banyaknya item yang di beli.'
        }
    ]
})