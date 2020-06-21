
var tbdy1;
var filter1 
var enterbtn
var input1
var Main = document.getElementById("Main");
var ttl = 0
var hr = new XMLHttpRequest()
var selectarr;
var typingTimer;  
var JobDetails = {JobID: "" , Status: "" , JobNumber: "" , CustomerCode: "" , CustomerName: "" , OrderNumber: "" , RequiredDeliveryDate: "" , Date: "" , AccountStatus: "" , TransportCo: "" , FreightOptions: "" , PlusGSTTotal: "" , SalesPerson: "" , QuoteNumber: "" , Address1: "" , Address2: "" , Address3: "" , Address4: "" , PhoneNumber: "" , Contact: "" , Email: "" , DeliveryAddress: "" , Suburb: "" , City: "" , SiteContactName: "" , SiteContactMobile: "" , SiteContactPhone: "" , siteContactEmail: "" , SN1: "" , SN2: "" , SN3: "" , SN4: "" , SN5: "" , SN6: "" , InvoiceNumber: "" , Custom: "" , Assembly: "" , Acrylic: "" , Steel: "" , Glass: "" , PowderCoat: "" , AluminiumWelding: "" , RecdDeliveryAddress: "" , RecdAcrylicColour: "" , RecdPCColour: "" , RecdCustomDrawing: "" , RecdDeposit: "" , ReviewDate: "" , AdjDate: "" , AdjReason: "" , NSTD: "" }
var Sequence = [[0, "Start", 1],[1, "Select Customer", 2], [2, "Cash Sale Name", 3], [3, "Order Number", 4], [4, "Order Number", 5], [5, "Order Number", 6], [6, "Order Number", 7]]
var SelectedRow;
var Step = 0



//-----------------------------------------------------------------------------------------------

function Controller() {
    Step = Sequence[Step][2]
    if (Step > 0) {
        window["A" + Step]()
    }    
}
     
function tbdy1f(){
    tbdy1 = document.getElementById("tbdy1"); 
    tbdy1.addEventListener("click", function(event){ 
        SelectedRow = event.target.parentElement;
        window["C" + Step]()
    },true);
}

function filter1f(){
    filter1 = document.getElementById("filter1");
    filter1.addEventListener("keyup", function(event){ 
        clearTimeout(typingTimer);
        typingTimer = setTimeout(window["B" + Step](), 200);
    },true);
}

function enterbtnf(){
    enterbtn = document.getElementById("enterbtn")
    enterbtn.addEventListener("click", function(event){ 
        window["C" + Step]()
    },true);    
}

function input1f(){
    input1 = document.getElementById("input1");
    input1.addEventListener("keydown", function(event){ 
        if (event.keyCode === 13){
            window["C" + Step]()
        }
    },true);
}



function A1 (){      //Select Customer 
    Main.innerHTML = "<h2>Select Customer</h2><div class='d1'><label>Filter</label><input id='filter1'></div><div class='d1'><table><tbody id='tbdy1'><tr><td></td></tr></tbody></table></div>"
    filter1f()
    tbdy1f()
    // var RequestString = "Req=GetCompanies"
    // hr.open("POST", "Req.php", true);
    // hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // hr.send(RequestString);    
    // hr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         selectarr = JSON.parse(hr.responseText);
    //         B1();  
    //     }
    // } 
    selectarr = [["C30794","ACE CARAVANS"],["A40047","AMALGAMATED BUILDERS LTD (INVERCARGILL)"],["M4632","AW HOLDER & SONS LTD"],["G42311","BRADFORD SALES & MARKETING"],["D40388","BUNNINGS LIMITED (SOUTH)"],["S30000","CASH SALES No 3 ACCOUNT"],["R30788","COMAG LTD"],["R20791","COWPERTHWAITE ROOFING LTD"],["R21881","DIXON ROOFING CONTRACTORS LTD"],["R41933","F H S ROOFING LTD"],["A31930","FOSTER CONSTRUCTION LTD"],["D32318","GERALDINE BUILDING CENTRE ITM LTD"],["B22701","HANS ELLEHUUS BUILDERS"],["R22700","HOPKINS ROOFING LTD"],["C30784","KEVIN HOLLIS GLASS LTD"],["A24234","LINDESAY CONSTRUCTION"],["D44770-7","MARTIN & CO WESTPORT LTD MITRE 10"],["R34777","METALCRAFT ROOFING NEW PLYMOUTH"],["D34770-1","MITRE 10 MEGA (NEES HARDWARE & BUILDING SUPPLIES)"],["A25001","NAYLOR LOVE CONSTRUCTION LTD"],["M2529","NORTHLAND SKYLIGHTS"],["D45851-3","PLACEMAKERS ASHBURTON"],["D35851-4","PLACEMAKERS HAWERA"],["D45851-11","PLACEMAKERS MOTUEKA"],["D35851-14","PLACEMAKERS PARAPARUMU"],["D35851-19","PLACEMAKERS TAUPO"],["D35851-25","PLACEMAKERS WHAKATANE"],["A25772","PRECISION CONSTRUCTION LIMITED"],["D21158","REECE PLUMBING - MANUKAU"],["R26563","ROOF WISE ROOFING LTD"],["R36571","ROOFING THE BAY LTD"],["S29998","SCHOOL CASH SALES No 2 ACCOUNT"],["C26925","SOUTH AUCKLAND CARAVANS LTD"],["P26930","STRYDE PROJECTS"],["A20017","TBS REMCON LTD"],["G42315","TOTAL SITE SUPPLIES"],["S38473","WATTS & HUGHES CONSTRUCTION (BOP)"],["T30789-3","zCRIGHTON ITM - GREYTOWN"],["A31932-7","zFLETCHER STEEL LTD WELLINGTON"],["D31179","ZIP PLUMBING PLUS MT MAUNGANUI"],["D44618-1","zMICO PLUMBING RANGIORA"],["D25850-3","zPLUMBING WORLD EAST TAMAKI"],["D25850-2","zPLUMBING WORLD MANUKAU"],["D35850-21","zPLUMBING WORLD PAPAMOA"],["D35850-18","zPLUMBING WORLD TAURANGA"],["D40388-2","zzBUNNINGS - BLENHEIM"],["D20388-11","zzBUNNINGS - KAIKOHE"],["D20388-6","zzBUNNINGS - NORTH SHORE"],["D30388-18","zzBUNNINGS - TAUPO"],["D20388-14","zzBUNNINGS TRADE - EAST TAMAKI"],["D20775-17","zzCARTERS DRURY"],["D20775-6","zzCARTERS KERIKERI"],["D20775-10","zzCARTERS PAPAKURA"],["D30775-23","zzCARTERS WAIPUKURAU"],["D30775-19","zzCARTERS WHITIANGA"]]
    B1()
}

function B1 () {
var i
var SelectText = ""
    for (i in selectarr) {
        var Company = selectarr[i][1].toUpperCase()
        if (filter1.value =="" || Company.includes(filter1.value.toUpperCase())) {
            SelectText += "<tr><td>" + selectarr[i][0] + "</td><td>" + selectarr[i][1] + "</td></tr>"
        }
    }
    tbdy1.innerHTML = SelectText
}


function C1 () {
    JobDetails.CustomerCode = SelectedRow.childNodes[0].innerHTML
    JobDetails.CustomerName = SelectedRow.childNodes[1].innerHTML
    Controller();
}


function A2() {     //Cash Sale Name 
    if(JobDetails.CustomerName.includes("CASH")){
        Main.innerHTML= "<h2>Cash Sale Customer Name</h2><div class='d1'><input id='input1'></div><div class='d1'><button id='enterbtn'>Enter</button></div>"
        input1f()
        enterbtnf()
    }   else {Controller();}
}

function C2 () {
    if(input1.value != "") {
        JobDetails.CustomerName = input1.value
        Controller();
    }
}


function A3() {    //Order Number
    Main.innerHTML = "<h2>Order Number</h2><div class='d1'><input id='input1'></div><div class='d1'><button id='enterbtn'>Enter</button></div>"
    input1f()
    enterbtnf()
}

function C3 () {
if(input1.value != "") {
    JobDetails.OrderNumber = input1.value
    Controller();
}
}

function A4() {   //Sales Person
    Main.innerHTML = "<h2>Sales Person</h2><div class='d1'><table><tbody id='tbdy1'><tr><td>Ben</td></tr><tr><td>Bryce</td></tr><tr><td>Clynt</td></tr><tr><td>Maria</td></tr><tr><td>Matthew</td></tr><tr><td>Gerald</td></tr></tbody></table></div>"
    tbdy1f()
}

function C4 () {
if(input1.value != "") {
    JobDetails.SalesPerson = input1.value
    Controller();
}
}


//-----------------------------------------------------------------------------------------------


Controller()


