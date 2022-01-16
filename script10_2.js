/*
function HocSinh (age,name,gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;
}

let hs_0 = new HocSinh(20,'Son','Nam');
let hs_4 = new HocSinh(32,'Tu','Gay');
console.log(hs_0);
console.log(hs_4);
*/

function NgheSi (name,age,gender,field,hobbies) {
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.field = field;
    this.hobbies = hobbies;
}

let artist_1 = new NgheSi('Vu Phong Lam',23,'Nam','Am Nhac',['singing','shopping','sleeping']);
console.log(artist_1.field);
console.log(artist_1.hobbies[2]);

let vpl = ["vu","phong","lam"]
//Thêm dữ liệu vào object: obj.key = value;

artist_1.vuphonglam=vpl;
console.log(artist_1);

const contacts = [
    {
      firstName: "Van",
      lastName: "Nguyen",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Pho"],
    },
    {
      firstName: "Son",
      lastName: "Trinh",
      number: "0994372684",
      likes: ["Cheese", "Donut", "Apple"],
    },
    {
      firstName: "Trong",
      lastName: "Le",
      number: "0487345643",
      likes: ["Beer", "King Crab"],
    },
    {
      firstName: "Tong",
      lastName: "Vo",
      number: "unknown",
      likes: ["Tiger", "Sword", "Wine"],
    },
  ];
 /* 
  - Sử dụng vòng lặp for để duyệt contacts list.
  - Sử dụng nested if để check firstname và sau đó là check prop.
  - Trả về giá trị “Không tồn tại thông tin trên” bên ngoài vòng lặp.
  - `lookUpProfile("Tong", "lastName")` nên trả về string `Vo`
  - `lookUpProfile("Trong", "likes")` nên trả về array `["Beer", "King Crab"]`
  - `lookUpProfile("Yen", "number")` nên trả về `Không tồn tại thông tin trên` bởi vì Yen không có trong Object contacts
  - `lookUpProfile("Son", "address")` nên trả về `Không có thuộc tính trên`
  */
  
  function lookUpProfile(name,prop) {
    let x = contacts.length;
    for(let i = 0; i < x ; i++) {
        if(name === contacts[i].firstName) {
            if(contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {
                return "Không có thuộc tính trên";
            }
        }
    }
    return "Không tồn tại thông tin trên";
  }

 console.log(lookUpProfile("Tong", "lastName"));
 console.log(lookUpProfile("Trong", "likes"));
 console.log(lookUpProfile("Yen", "number"));
 console.log(lookUpProfile("Son", "address"));