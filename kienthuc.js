// REACTJS

//1. ReactElement: tạo ra react element
    //Create Syntax: React.createElement(type, props, children, n ) - từ n trở đi là children
        //vd có 1 component là Button:
            <Button {...props}> {children} </Button> //gọi component
                //props: phải nằm trong cặp < > của thẻ mở component
                //children: nó thường xuất hiện giữa thẻ mở và đóng của component(string, object, function...)
            function Button({props, children}){
                return //logic
            } //nhận đối số: props rồi đến children

    //vd: 
    const h1Element = React.createElement('h1',{
            className: 'h1Elm',
            id: 'h1Element',
            style: 'color: #ccc; font-size:20px'
        }, 'Hi, Guys!' )
    // type: tên thẻ html
    // props: object các thuộc tính củ thẻ - nếu không có attribute thì để null hoặc {} rổng
        React.createElement('li', null, 'ReactJs')
    // children: nội dung của thẻ(value hoặc element con) - cũng là 1 PROPS
        const ulElement = React.createElement('ul', null, 
            React.createElement('li', null, 'ReactJs'), //children là thẻ con
            React.createElement('li', null, 'Javascript') //children là thẻ con
        )
    // LƯU Ý: Children có thể là bất cứ kiểu dữ liệu gì: string, function, class...   
                // từ 2 children trở lên thì sẽ là ARRAY children
                // 1 khi children là ARRAY thì mỗi children phải có 1 prop KEY riêng - là quy định
    // BT:
        const postItem = React.createElement('div', { class: 'post-item',}, 
            React.createElement('h2', { 
                title: 'Học ReactJS tại F8',
            }, 'Học ReactJS'),
            React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
        )
            console.log(postItem)

// 2. React-DOM: để render element ra view
    ReactDOM.render(postItem, document.getElementById('root'))    
                    // postItem: là react element
                    // document.getElementById('root') là div muốn render
            
// 3. JSX: JavaScript XML ( HTML là cú pháp mở rộng của XML - XML không phải là HTML)
    //JSX: để giúp viết XML, HTML trong JavaScript( viết trong thẻ script)
    //Cần phả có JavaScript, thư viện Babel để dùng JSX
    //vd:
        //a. code bằng react.createElement
        const h2 = React.createElement('h2',{
            className: 'h2',
            id: 'h2',
        }, 'Hi, Guys!' )
        ReactDOM.render(h2, document.getElementById('root'))

        //b. code bằng JSX - giống cú pháp html bình thường 
        const courses = [
            {
                name: 'HTML & CSS',
            },
            {
                name: 'Java',
            },
            {
                name: 'Ruby',
            },
        ]
        const ul = (
                    <ul>
                        {courses.map((course, index) => 
                            <li key={index}>{course.name}</li>
                        )}
                    </ul>
                )
        ReactDOM.render(ul, document.getElementById('root'))

    // LƯU Ý: khi render nhiều element thì cần bọc các element đó lại bằng <React.Fragment>
    //vd: 
         const jsx = (
            <React.fragment> //thẻ này không hiển thị trong DOM
                <h1>H1</h1>
                <h2>H2</h2>
            </React.fragment>
         )

//4. React elements types: gồm các kiểu DL: string, function, class...
    // tạo component bằng function - có thể dụng như 1 thẻ tag bình thường
    function Header(){
        return (
            <div className="header">Header</div>
        )
    }
    // tạo component bằng class - có thể dụng như 1 thẻ tag bình thường
    class Content extends React.Component {
        render() {
            return (
                <div className="content">Content</div>
            )
        }
    }

    // LƯU Ý: phải VIẾT HOA ALL CHỮ CÁI ĐẦU thì react mới nhận

    const app =  (
        <div className = 'wrapper'>
            <Header /> 
            <Content />
            <div className="footer">footer</div>
        </div>
    )

    ReactDOM.render(app, document.getElementById('root'))

//5. PROPS:

        // PROPS TRONG ELEMENT GIỐNG NHƯ ATTRIBUTE CỦA ELEMENT //
        // PROPS TRONG COMPONENT GIỐNG NHƯ THAM SỐ CỦA FUNCTION //

    //React elements
        // - Sử dụng props giống như với attribute của thẻ HTML
        // - 2 props class, for => className, htmlFor
        // - Phải tuân theo quy ước có sẵn
    // React components
        // - Sử dụng props giống như đối số cho Function
        // - Tự do đặt tên props
        // - Đặt theo camelCase - từ chữ thứ 2 viết hoa chữ đầu
        // - *Có thể bao gồm dấu gạch ngang - ít dùng

    // - Chú ý:
        // - Prop "key" là prop đặc biệt - KHÔNG phải là PROP
        // - Props cơ bản là đối số của Component → Props có thể là bất cứ kiểu dữ liệu gì
            //có thể truyền: Array, object, function( nếu là function thì chính là callback)
        // - Sử dụng destructuring - để có thể đặt được giá trị default cho prop
    
    //vd: 3 file (imports - exports)
    //postitem.js - file tạo components
    function PostItem(props){
        //gọi callback: props.callback()
        return (
            <div className="post-item">
                <img className='post-image' src={props.image} />
                <h2 className = 'post-title' onClick = {() => props.onClick(props)}>{props.title}</h2>
                <p className='post-description'>{props.description}</p>
            </div>
        )
    }
    //app.js - chứa content web
    function App(){
        function handleClick(props){
            console.log(props.title)
        }
        return (
            <div className="wrapper">
                <PostItem
                    title = 'Kiến Thức Nhập Môn IT'
                    image = 'https://files.fullstack.edu.vn/f8-prod/courses/7.png'
                    description = 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.'
                    onClick = { handleClick }
                />
                <PostItem
                    title = '1 Kiến Thức Nhập Môn IT'
                    image = 'https://files.fullstack.edu.vn/f8-prod/courses/7.png'
                    description = '1 Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.'
                    onClick = { handleClick }
                />
            </div>
        )
    }
    //index.js - để render ra view
    ReactDOM.render(<App />, document.getElementById('root'))

//6. ReactDOM events:
    //syntax: on + tên DOM event VIẾT HOA chữ cái đầu
    //vd: onClick, onDoubleClick, ...
        function App(){
            return (
                <div className="wrapper">
                    <button onClick={(event) => (alert(event.target))}>
                        Click me!
                    </button>
                </div>
            )   
        }

//7. Component example
    //OBJECT: các phương thức của object có thể làm component
        const Form = {
            Input(){
                return <input />
            },

            Checkbox(){
                return <input type = 'checkbox' />
            }
        }
        //app.js
        function App(){
            // const type = 'Input'
            const type = 'Checkbox' //gọi phương thức theo type (Form[type])
            const Component = Form[type] //gán phương thức cho biến để dùng như component
            return (
                <Component /> //không thể dùng Form[type] để làm component vì có dấu []
            )   
        }
        //index.js
        ReactDOM.render(<App />, document.getElementById('root'))

    //Tạo 1 component: khi sử dụng nếu truyền vào có href thì component sẽ là thẻ a
                        //khi truyền vào không có href thì sẽ là button
        function Button({title, href, onClick}){
            let Component = "button" //type của element mặc định là button
            let props = {} //tạo object props để lưu các props nếu có
            if(href){
                Component = 'a' //nếu có truyền href thì đổi type thành a
                props.href = href //thêm href vào props
            }
            if(onClick){
                props.onClick = onClick //nếu có onClick thì thêm onClick vào props
            }
            return <Component {...props}>{title}</Component>
                //Component: tên thẻ thay đổi theo biến Component
                //dùng spread để giải các props (nếu có) vào làm props
        }

        //app.js
        function App(){
            return (
            <div className= 'wrapper'>
                <Button
                    title= 'Click me!'
                    href="https://youtu.be/5SU6P-cqoJw" //truyền href cho thẻ a
                    onClick = {() => { console.log(Math.round(Math.random() * 100))}} //truyền callback cho button
                />
            </div>
            )   
        }
        //index.js
        ReactDOM.render(<App />, document.getElementById('root'))

    //Các kiểu DL: boolean, null, undefined sẽ không được render - vì để có thể sử dụng toán tử logic
        function App(){
            return (
                <div className="wrapper">
                    {true}
                    {/* {false} {undefined} {null} - không được render ra view */}
                </div>
                
            )   
        }

    //Có thể kết hợp toán tử logic để render theo điều kiện
        function App(){
            let firstAccess = true
            return (
                <div className="wrapper">
                    <h1> { firstAccess && 'Wellcom to F8'} </h1>
                        {/* nếu có firstAccess(true) thì sẽ render h1 */}
                </div>
                //TOÁN TỬ LOGIC:
                    // true && 'string' - nếu true thì lấy vế sau
                    // false && 'string' - nếu false thì KHÔNG lấy vế sau
            )   
        }

    //Dùng ...REST, ...SPREAD
        function Input({label, ...inputProps}){ //nếu có nhiều props chung thì có thể dùng ...rest
            return (
                <div>
                    <label>{label}</label>   
                    <input {...inputProps} />  // dùng ...spread để giải all các props vào
                </div>
            )
        }
        //app.js
        function App(){
            return (
            <Input
                label= 'Fullname: '
                type = 'text'
                placeholder = 'Enter full name'
                onFocus = {() => { console.log(Math.round(Math.random() * 100))}} 
            />
            )   
        }
        //index.js
        ReactDOM.render(<App />, document.getElementById('root'))



//################################################################################################//



//8. HOOK: là các hàm đặc biệt của React dùng trong các function components 
    //a. useState: quản lí các trạng thái trong component
        //vd:
        import { useState } from 'react'; //import useState
        function App() {
            const [name, setName] = useState(''); //dùng destructuring lấy state và hàm cập nhật state từ hook
            return (
                <div className="App">
                    <input value={name} onChange={(e) => (setName(e.target.value))} type="text" />
                    <button onClick={() => setName('abc')}>change</button>
                </div>
            );
        }
    //syntax:
    const [state, setState] = useState(initialState)
    //state là giá trị hiện tại của state.
    //setState là một hàm để cập nhật giá trị của state.
    //useState(): chứa giá trị khởi tạo và gán cho biến state CHỈ trong LẦN ĐẦU chạy function component
                // từ lầ thứ 2 chạy function component thì biến state được hàm setState gán lại giá trị mới
    //vd:
    function App() {
        const [cars, setCars] = useState(['Bugatti', 'Roll-Royce', 'Maybach']);
        const handleUpdate = () => {
             setCars((prevState) => { //dùng callback để đảm bảo tính toàn vẹn của giá trị trước đó
                  return [...prevState, 'Lamborghini'] //...spread để lấy all giá trị trước và thêm giá trị mới
             })
        }
        console.log(cars) // Output: ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
        return (
            <div>
                <h1>ReactJS</h1>
                <button onClick={handleUpdate}>Update</button>
            </div>
        )
    }
    //GT: khi App() chạy lần đầu thì cars được gán giá trị từ useState(['Bugatti', 'Roll-Royce', 'Maybach'])
        //khởi tạo hàm handleUpdate và dùng setCars để gán giá trị mới cho cars thành ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
        //nhưng chỉ gán vì hàm handleUpdate chưa được gọi
        //App() sẽ return lại div để render ra view LẦN 1 với cars là ['Bugatti', 'Roll-Royce', 'Maybach']
        //khi click vào button update thì hàm handleUpdate chạy và gọi hàm setCars gán lại giá trị mới cho cars là ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
        //sau khi setCars chạy xong thì App() sẽ retturn để render lại
        //nên console.log(cars) // Output: ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']

    //LƯU Ý: một khi khi setState() chạy xong thì component sẽ return để render ra view

    //vd: bấm nút để chọn quà ngẫu nhiên
    const cars = ['Bugatti', 'Roll-Royce', 'Maybach', 'Lamborghini']
    function App() {
        const [gift, setGift] = useState();
        function handleClick() {
            const index = Math.floor(Math.random() * cars.length);
            setGift(() => {
                return cars[index];
            })
        }
        return (
            <div className="App">
                <p>{gift || 'Bạn chưa chọn quà.'}</p>
                <button onClick={handleClick}>Get Girf</button>
            </div>
        );
    }

    //vd: lấy value từ thẻ input để call API...
    function App() {
        const [name, setName] = useState(''); //dùng destructuring lấy state và hàm cập nhật state từ hook
        const [email, setEmail] = useState(''); //dùng destructuring lấy state và hàm cập nhật state từ hook
        function handleClick(){
          console.log({name, email})
          //đã lấy được value 2 ô input name, email bằng cách setState lại cho state(dùng onchange())
          //xử lí logic: gọi API...
        }
        return (
            <div className="App">
                <input onChange={(e) => (setName(e.target.value))} type="text" /> 
                <input onChange={(e) => (setEmail(e.target.value))} type="text" />
                <button onClick={handleClick}>Login</button>
            </div>
        );
      }

      //vd: lấy value radio để call API...
        const cars1 = [{id: 1,  name: 'Bugatti',},{id: 2, name: 'Lamborghini',},{id: 3, name: 'Maybach',}]
        function App() {
            const [checked, setChecked] = useState(); //dùng biến checked để lưu id tùng thẻ radio
                function handlsubmit(){
                    //call API
                    //checked đã chứa giá trị id của radio được checked
                    console.log({id: checked})    
                }
            return (
                <div className="App">
                    {cars1.map(car => (
                        <div key={car.id}>
                            <input type="radio"
                            //trạng thái check hay không check của radio
                            checked = {checked === car.id} //nếu giá trị checked(id) === id của car thì true(checked)
                            //set lại checked(set lại giá trị id) khi radio thay đổi
                            onChange={() => setChecked(car.id)} /> 
                            {car.name}
                        </div>
                    ))}
                    <button onClick={handlsubmit}>Submit</button>
                </div>
            )
        }

        //vd: lấy list value checkbox để call API...
        const cars2 = [{id: 1,  name: 'Bugatti',},{id: 2, name: 'Lamborghini',},{id: 3, name: 'Maybach',}]
        function App() {
            const [checked, setChecked] = useState([]); //tạo mảng chứa id checked
            function handlCheck(id){ //nhận id đã checked
                setChecked(prev => { //thay đổi list id checked
                    const isChecked = checked.includes(id) //theo dõi checkbox đã checked hay chưa
                    if(isChecked){
                        return checked.filter(item => item !== id) //nếu đã checked thì loại id đó ra khỏi mảng checked
                    }else{
                        return  [...prev, id] //nếu chưa thì giữ các id cũ và thêm id mới
                    }})
                } //hàm này chạy xong sẽ render lại vì list checked đã được thay đổi
                
            function handlsubmit(id){
                // call API
                console.log({ids: checked}) //nhận được mảng ids đã checked
            }
            return (
                <div className="App">
                    {cars2.map(car => (
                        <div key={car.id}>
                            <input type="checkbox"
                            checked = {checked.includes(car.id)} //nhận lại trạng thái checked sau khi render lại 
                            onChange={() => handlCheck(car.id)} />  //truyền id đã checked khi checkbox thay tđổi
                            {car.name}
                        </div>
                    ))}
                    <button onClick={handlsubmit}>Submit</button>
                </div>
            )
        }

//9. useEffect: thực hiện các tác vụ liên quan đến "side effects" trong component.
    // "Side effects" là các tác vụ không trực tiếp liên quan đến việc render UI:
        //call API, update DOM, add / remove DOM events, cleanup(hàm dọn dẹp tránh tràng bộ nhớ)...

    //vd: call API khi state thay đổi
        const tabs = [{id: 1, name: 'posts'}, {id: 2, name: 'comments'}, {id: 3, name: 'albums'}, ]

        const Content = () => {
            const [contents, setContents] = useState([])
            const [type, setType] = useState('posts')

            useEffect(() => {
                console.log(type) //xem thay đổi type
                fetch(`https://jsonplaceholder.typicode.com/${type}`) //call API theo type
                    .then(response => response.json())
                    .then(datas => {
                        setContents(datas) //setContents để cập nhật lại giá trị của contents.
                    }) //sau khi setContents thì state thay đổi => re-render component
                    .catch(err => {console.error(err)})
            },[type]) //nếu type thay đổi thì callback trong useEffect sẽ được gọi lại

            return (
                <>
                    {tabs.map(tab => (
                        <div key={tab.id}>
                            <button onClick={() => setType(tab.name)}>{tab.name}</button>
                        </div>
                    ))}
                    <ol>
                        {contents.map(content => (
                                <li key={content.id}>{content.title || content.name}</li>
                            )
                        )}
                    </ol>
                </>   
            )
        }
    
    //vd: Xử lí event resize window
        useEffect(() => {
            const handleResize = () => {
                // Xử lý sự kiện thay đổi kích thước cửa sổ
            };
        
            window.addEventListener('resize', handleResize);
        
            // Hàm cleanup - Hủy đăng ký sự kiện khi component bị hủy
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []); // []: không có dependency, sẽ chỉ gọi 1 lần khi component được mount
    
    //vd: Cập nhật document title 
        useEffect(() => {
            document.title = 'New Title';
        }, []); // []: không có dependency, sẽ chỉ gọi 1 lần khi component được mount

    
    //LƯU Ý: callback trong useEffect:
                //luôn được gọi sau khi component được mounted -  nếu không có dependency (mảng rỗng [])
                //không được gọi ngay lập tức khi component được render lần đầu tiên - nếu có dependency

            //CÓ 3 TRƯỜNG HỢP DÙNG useEffect CHÍNH:

        useEffect(() => {
            //logic
        }) //không có dependency - callbacks luôn được gọi sau khi component re-render

        useEffect(() => {
            //logic
        }, []) //dependency rỗng => callback chỉ được gọi 1 lần khi component được mounted

        useEffect(() => {
            //logic
        }, [dependency]) //có dependency - callback đươcj gọi mỗi khi dependency thay đổi state


//10. useLayoutEffect - GIỐNG VỚI useEffect NHƯNG KHÁC THỨ TỰ THỰC HIỆN CODE
    // useEffect
        // 1. Cập nhật lại state
        // 2. Cập nhật DOM (mutated - chỉ cập nhật lại 1 phần trong Dom node thay vì cập nhật all)
        // 3. Render lại UI
        // 4. Gọi cleanup nếu deps thay đối - cleanup function nằm trong useEffect
        // 5. Gọi useEffect callback

    // useLayoutEffect
        // 1. Cập nhật lại state
        // 2. Cập nhật DOM (mutated - chỉ cập nhật lại 1 phần trong Dom node thay vì cập nhật all)
        // 3. Gọi cleanup nếu deps thay đổi (sync) - cleanup function nằm trong useEffect
        // 4. Gọi useLayoutEffect callback (sync)
        // 5. Render lại UI
    
    //vd: đếm số đến 3 sẽ reset lại từ 0
        import React, { useState, useLayoutEffect } from 'react'
        const Content = () => {
            const [count, setCount] = useState(0)
            function handleClick(){
                setCount(count + 1)
            }
            useLayoutEffect(() => { //Render lại UI ở bước cuối cùng
                if(count > 3){
                    setCount(0)
                }
            }, [count])
            return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={handleClick}>Run</button>
                </div>
            )
        }

//11. useRef - lưu các giá trị qua 1 tham chiếu bên ngoài function component
        //giúp giữ giá trị của biến khi component re-render
    import React, { useState, useRef } from 'react'
    const Content = () => {
        const [count, setCount] = useState(60)
    
        //hoạt động giống như tạo 1 biến global timerId ngoài Content component(let timerId;)
        //có thể gán giá trị cho biến bằng cách thêm vào trong useRef(123)
    
        let timerId = useRef() //useRef() LUÔN trả về 1 OBJECT có 1 key là current
    
        let prevCount = useRef() //tạo biến để lấy giá trị state trước đó của count
        useEffect(() => {
            prevCount.current = count
        }, [count])
        console.log(count, prevCount.current) //xem giá trị trước và sau của count
    
        let h1Ref = useRef() //luôn trỏ đến thẻ h1 trong DOM dù cho component re-render
        useEffect(() => {
            console.log(h1Ref.current) //get element như js thuần
        })
    
        function handleStart(){
            timerId.current = setInterval(() => { //gán timerId tạo ra từ setInterval vào key current
                setCount(prevCount => prevCount - 1)
            }, 1000)
        }
        function handleStop(){
            clearInterval(timerId.current) //xóa giá trị current đã tạo trước đó
        }
        return (
            <div> 
                <h1 ref={h1Ref}>{count}</h1>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div> //ref={h1Ref} - dùng để get thẻ h1 giống như js thuần(querySelector...)
        )
    }
    //Nếu không dùng useRef() để tạo biến(bên trong function component) thì khi component re-render 
        //sẽ tạo ra 1 phạm vi hoàn toàn mới - không liên quan đến phạm vi function component chạy trước đó
        //nên sẽ không tham chiếu được đến giá trị của biến trong function component chạy trước đó
        //dùng useRef() để lưu được giá trị biến đó ra ngoài phmạ vi function component 
        //thì khi re-render lại vẫn có thể tham chiếu đến biến đó được(useRef() - giúp tạo biến global )

//12.React.memo HOC : một Higher Order Components được sử dụng để memoize component. 
                    //Nếu props không thay đổi, component không sẽ được render lại, giúp tối ưu hóa hiệu suất
//13. useCallback: giúp tránh việc tạo lại hàm callback mỗi khi component render lại, 
                    //đặc biệt là khi truyền hàm callback xuống các component con.

//14. useMemo: sử dụng để lưu giá trị tính toán và thực hiện TÍNH TOÁN LẠI chỉ khi CẦN THIẾT(state liên quan đến kết quả thay đổi)
    //vd: tính lại tổng price chỉ khi state products thay đổi
    const Content = () => { 
        const [products, setProdusts] = useState([])
        const [name, setName] = useState('')
        const [price, setPrice] = useState('')
        const nameRef = useRef() //lấy element name input
        const handleClick = () => {
            setProdusts(prev => [...prev, {
                name,
                price: +price //thêm dấu + để chuyển chuỗi thành số
            }])
            setName('') //sau khi setName thì thêm value thẻ input để nhận state mới
            setPrice('')
            nameRef.current.focus() //focus lại vào ô name input
        }
        //hàm tính tổng price dùng useMemo để xác định xem có cần tính lại giá trị result hay không
        //dựa vào state products trong dependency
        //nếu không dùng useMemo thì hàm này sẽ chạy lại mỗi khi component re-render
        const result = useMemo(() => { //dùng useMemo cho hàm tính tổng price của mảng products
            products.reduce((total, product) => {
                return total + product.price
            }, 0)
        }, [products]) //chỉ tính lại rusult khi cần thiết(state products thay đổi)
        return (
            <div> 
                <input value={name} ref={nameRef} onChange={(e) => setName(e.target.value)} type='text' /><br/>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type='text' /><br/>
                <button onClick={handleClick}>Add</button><br/>
                Total: {products.length > 0 && result}
                <ul>
                    {products.map((product, index) => {return (<li key={index}>{product.name} - {product.price}</li>)})}
                </ul>
            </div> 
        )
    }


//14. useReducer: giúp quản lý trạng thái của component(giống State) 
                //bằng cách sử dụng một hàm reducer để xử lý logic thay đổi trạng thái dựa trên các hành động.

    //Các bước thực hiện:
        //b1: init state - NGOÀI COMPONENT
        //b2: action - khai báo các action mà người dùng có thể thực hiện - NGOÀI COMPONENT
        //b3: reducer function - xác định cách thay đổi trạng thái dựa trên hành động - NGOÀI COMPONENT
        //b4: khai báo const [biến state, dispatch] = useReducer(reducer, initState) - TRONG COMPONENT
        //b4: dùng hàm dispatch() gửi hành động đến hàm reducer - TRONG COMPONENT

    //vd: cộng / trừ counters
        //init state
        const initState = 0; //khởi tạo biến state

        //action - khai báo các action mà người dùng có thể thực hiện
        const UP_ACTION = 'up';
        const DOWN_ACTION = 'down';

        //reducer function - xác định cách thay đổi trạng thái dựa trên hành động
        function reducer(state, action) { //Reducer nhận STATE HIỆN TẠI và action được gửi từ dispatch
            switch (action) {
                case UP_ACTION:
                    return state + 1
                case DOWN_ACTION:
                    return state - 1
                default:
                    throw new Error('Invalid action')
            }
        }
        const Content = () => { 
            const [count, dispatch] = useReducer(reducer, initState) //useReducer nhận hàm reducer và biến khởi tạo state
                    //count - biến state hiện tại của component nhận giá trị khởi tạo từ initState
                    //dispatch - dispatch là một hàm được cung cấp bởi useReducer để gửi các hành động đến reducer
            return (
                <div> 
                    <h1>{count}</h1>
                    <button onClick={() => dispatch(UP_ACTION)}>Up</button>
                    <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
                </div> 
                //dispatch gởi action cho reducer thực thi thay đổi state
            )
        }

    //vd: todo list
        import { useState, useRef, useReducer } from 'react';
        //initState - nhiều state => khai báo bằng object
        const initStates = {
            job: '',
            jobs: [],
        }
        //actions
        const SET_JOB = 'set_job'
        const ADD_JOB = 'add_job'
        const DELETE_JOB = 'delete_job'
        //tạo actions bằng function để nhận thêm được dữ liệu từ dispatch
        //actions function trả về object chứa action và payload( dữ liệu mang theo)
        const setJob = (payload) => {
            return {
                payload,
                type: SET_JOB,
            }
        }
        const addJob = (payload) => {
            return {
                payload,
                type: ADD_JOB,
            }
        }
        const deleteJob = (index) => {
            return {
                index,
                type: DELETE_JOB,
            }
        }
        //reducer
        const reducer = (state, action) => {
            switch (action.type) {
                case SET_JOB:
                    return {
                        ...state, //lưu value cũ trong object
                        job: action.payload, //chỉ cập nhật lại value cần cập nhật
                    }
                case ADD_JOB:
                    return {
                        ...state,
                        jobs: [...state.jobs, action.payload]
                    }
                case DELETE_JOB:
                    return {
                        ...state,
                        jobs: state.jobs.filter( (job, index) => index != action.index)
                    }
                default:
                    return 'Invalid action'
            }
        }

        function App() {
            //lần đàu render thì biến state sẽ nhận value từ initStates
            //từ lần 2 sẽ nhận value từ hàm reducer trả về
            const [state, dispatch] = useReducer(reducer, initStates)
            const { job, jobs } = state //lấy job, jobs ra từ biến state

            const inputRef = useRef()
            
            const handleClick = () => {
                dispatch(addJob(job))
                dispatch(setJob(''))
                inputRef.current.focus()
            }
            // console.log(state)
            return (
                <div className="App">
                    <input ref={inputRef} value={job} type='text' onChange={(e) => {dispatch(setJob(e.target.value))}} />
                    <button onClick={handleClick}>Add</button>
                    <ol>
                        {jobs.map((job, index) => {
                            return (
                                <li key = {index}>{job}
                                    <span onClick={() => {dispatch(deleteJob(index))}}> &times;</span>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            )
        }

//15. useContext(ngữ cảnh): tạo ra 1 phạm vi để truyền dữ liệu trong phạm vi đó
                            //tạo 1 context ôm component cha thì dữ liệu sẽ được truyền đến all component con.
    
    //ContextName trả về 2 phương thức chính:
        //provider: dùng ôm component cha, nhận và truyền dữ liệu xuống các component con - là 1 COMPONENT
            //có 1 prop là value = {data} để truyền data đi
        //consumer: nhận dữ liệu từ component tkạo ra context - là 1 COMPONENT
    
    //file component cha
    import { useState, createContext } from 'react';
    import ChildComponet from './ChildComponet';

    export const ThemeContext = createContext() //tạo và xuất context
    
    function App() {
        const [data, setData] = useState('dark')
        const handleClick = () => {
            setData(data === 'dark' ? 'light' : 'dark');
        }
        
        return (
            <ThemeContext.Provider value={data}>
                <div className="App">
                    <button onClick={handleClick}>Toggle data</button>
                    <ChildComponet />
                </div>
            </ThemeContext.Provider>
        )
    }

    //file con nhận context
    import { useContext } from "react"
    import { ContextName } from './App' //lấy context từ file tạo ra context

    const Background = ({theme}) => {

        const data = useContext(ContextName) //lấy data từ context đã tạo và truyền đi bằng 
                                                //<ThemeContext.Provider value={theme}> thông qua prop value

        return (
            <div>
                <p className={data}>Background</p>
            </div>
        )
    }
    
//LƯU Ý: 
    //<ThemeContext.Provider value={theme}> truyền đi data gì thì
    //const data = useContext(ThemeContext) sẽ nhận data đó

    //vd: Global State with Context + useReducer - todo app

        //file Context
            import { createContext } from 'react'
            const Context = createContext()
            export default Context
        //file Provider
        import { useReducer } from "react"
        import Context from "./Context"
        import reducer, { initState} from "./reducer"
        function Provider({ children }) {
            const [state, dispatch] = useReducer(reducer, initState)
            const { todos, todoInput } = state
            return (
                <Context.Provider value={[state, dispatch]}>
                    {children}
                </Context.Provider>
            )
        }
        export default Provider
        //file hook
        import { useContext }  from 'react'
        import Context from './Context'
        export const useStore = () => {
            const [ state, dispatch ] = useContext(Context)
            return [ state, dispatch]
        }
        //file index
        export { default as StoreProvider } from './Provider'
        export { default as StoreContext } from './Context'
        export * from './hooks' //export hết các phần export lẻ
        export * as actions from './actions' //lấy all đưa vào object actions
        //file constants
        export const SET_TODO_INPUT = 'set_todo_input';
        export const ADD_TODO = 'add_todo';
        export const DELETE_TODO = 'delete_todo';
        export const EDIT_TODO = 'edit_todo';
        //file actions
        import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";
        export function setTodoInput(payload) {
            return {
                type: SET_TODO_INPUT,
                payload
            }
        }
        export function addTodo(payload) {
            return {
                type: ADD_TODO,
                payload
            }
        }
        export function deleteTodo(index) {
            return {
                type: DELETE_TODO,
                index
            }
        }
        export function editTodo(todoInput, index) {
            return {
                type: EDIT_TODO,
                todoInput,
                index
            }
        }
        //file reducer
        import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants'
        const initState = {
            todos: [],
            todoInput: '',
        }
        function reducer(state, action) {
            switch (action.type) {
                case SET_TODO_INPUT:
                    return {
                        ...state,
                        todoInput: action.payload,
                    }
                case ADD_TODO:
                    return {
                        ...state,
                        todos: [...state.todos, action.payload],
                    }
                case DELETE_TODO:
                    return {
                        ...state,
                        todos: state.todos.filter( (todo, index) => index != action.index)
                    }
                    case EDIT_TODO:
                        return {
                            ...state,
                            todos: [...state.todos, state.todos[action.index] = action.todoInput]
                        }
                default: 
                    throw new Error('Invalid action type')
            }
        }
        export {initState} //export lẻ ở cuối file
        export default reducer

//16. useImperativeHandle() hook

