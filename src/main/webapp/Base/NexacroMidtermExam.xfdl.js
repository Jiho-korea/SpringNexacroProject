(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NexacroMidtermExam");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"학과\" type=\"STRING\" size=\"256\"/><Column id=\"성명\" type=\"STRING\" size=\"256\"/><Column id=\"학번\" type=\"STRING\" size=\"256\"/><Column id=\"재수강\" type=\"STRING\" size=\"256\"/><Column id=\"전자출결\" type=\"INT\" size=\"256\"/><Column id=\"출석\" type=\"FLOAT\" size=\"256\"/><Column id=\"중간\" type=\"INT\" size=\"256\"/><Column id=\"과제\" type=\"INT\" size=\"256\"/><Column id=\"기말\" type=\"INT\" size=\"256\"/><Column id=\"단위점수계\" type=\"INT\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"조정점수\" type=\"INT\" size=\"256\"/><Column id=\"성적총점\" type=\"INT\" size=\"256\"/><Column id=\"최종등급\" type=\"STRING\" size=\"256\"/><Column id=\"평점\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"학과\">스마트소프트웨어</Col><Col id=\"재수강\">false</Col><Col id=\"성명\">강지호</Col><Col id=\"학번\">21660003</Col></Row><Row><Col id=\"재수강\">true</Col><Col id=\"학과\">스마트소프트웨어</Col><Col id=\"성명\">김철수</Col><Col id=\"학번\">22000000</Col></Row><Row><Col id=\"재수강\">true</Col><Col id=\"학과\">스마트소프트웨어</Col><Col id=\"학번\">22000001</Col><Col id=\"성명\">홍길동</Col></Row><Row><Col id=\"재수강\">false</Col><Col id=\"학과\">스마트소프트웨어</Col><Col id=\"학번\">22000002</Col><Col id=\"성명\">이순신</Col></Row><Row><Col id=\"학과\">스마트소프트웨어</Col><Col id=\"성명\">이종수</Col><Col id=\"학번\">22000003</Col><Col id=\"재수강\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","15","166","1150","270",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("DatasetGlobal");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"187\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"84\"/><Column size=\"48\"/><Column size=\"54\"/><Column size=\"53\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"4\" text=\"학생정보\"/><Cell col=\"5\" rowspan=\"2\" text=\"전자출결&#13;&#10;(출석일수)\"/><Cell col=\"6\" colspan=\"4\" text=\"단위점수\"/><Cell col=\"10\" colspan=\"3\" text=\"자동계산(확인용)\"/><Cell col=\"13\" rowspan=\"2\" text=\"성적&#13;&#10;총점\"/><Cell col=\"14\" rowspan=\"2\" text=\"등급\"/><Cell col=\"15\" rowspan=\"2\" text=\"평점\"/><Cell row=\"1\" col=\"1\" text=\"학과\"/><Cell row=\"1\" col=\"2\" text=\"성명\"/><Cell row=\"1\" col=\"3\" text=\"학번\"/><Cell row=\"1\" col=\"4\" text=\"재수강\"/><Cell row=\"1\" col=\"6\" text=\"출석\"/><Cell row=\"1\" col=\"7\" text=\"중간\"/><Cell row=\"1\" col=\"8\" text=\"과제\"/><Cell row=\"1\" col=\"9\" text=\"기말\"/><Cell row=\"1\" col=\"10\" text=\"단위점수계\"/><Cell row=\"1\" col=\"11\" text=\"등급\"/><Cell row=\"1\" col=\"12\" text=\"조정&#13;&#10;점수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:학과\"/><Cell col=\"2\" text=\"bind:성명\"/><Cell col=\"3\" text=\"bind:학번\"/><Cell col=\"4\" text=\"bind:재수강\" edittype=\"none\" expr=\"expr:재수강=='true' ? '1' : '0'\" displaytype=\"checkboxcontrol\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:전자출결\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:출석\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:중간\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:과제\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:기말\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:단위점수계\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:등급\"/><Cell col=\"12\" edittype=\"none\" editmaxlength=\"30\" text=\"bind:조정점수\"/><Cell col=\"13\" text=\"bind:성적총점\"/><Cell col=\"14\" text=\"bind:최종등급\"/><Cell col=\"15\" text=\"bind:평점\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","24","119","180","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","97","92","34","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","224","119","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","256","92","34","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","374","92","34","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("학번");
            this.addChild(obj.name, obj);

            obj = new Edit("studentId","329","119","105","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","454","92","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("재수강");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","464","119","25","17",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","519","92","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("출석일수");
            this.addChild(obj.name, obj);

            obj = new Edit("attendanceDay","504","119","80","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","606","92","36","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출석");
            this.addChild(obj.name, obj);

            obj = new Edit("attendance","598","119","36","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("middleScore","648","119","36","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","652","92","36","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("중간");
            this.addChild(obj.name, obj);

            obj = new Edit("homework","693","119","36","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","697","92","36","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("과제");
            this.addChild(obj.name, obj);

            obj = new Edit("finalScore","739","119","36","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","744","92","36","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("기말");
            this.addChild(obj.name, obj);

            obj = new Edit("unitScore","804","119","51","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","798","92","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("단위점수계");
            this.addChild(obj.name, obj);

            obj = new Edit("grade","882","119","38","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","888","92","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("등급");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","941","92","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("조정점수");
            this.addChild(obj.name, obj);

            obj = new Spin("adjustScore","934","119","70","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","1023","92","57","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("성적총점");
            this.addChild(obj.name, obj);

            obj = new Edit("allScore","1017","119","63","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("finalGrade","1089","119","41","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","1095","92","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("등급");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","1150","92","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("평점");
            this.addChild(obj.name, obj);

            obj = new Edit("gpa","1143","119","34","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1089","28","152","42",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","DatasetGlobal","학과");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit01","value","DatasetGlobal","성명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","studentId","value","DatasetGlobal","학번");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","CheckBox00","value","DatasetGlobal","재수강");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","attendanceDay","value","DatasetGlobal","전자출결");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","attendance","value","DatasetGlobal","출석");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","middleScore","value","DatasetGlobal","중간");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","homework","value","DatasetGlobal","과제");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","finalScore","value","DatasetGlobal","기말");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","unitScore","value","DatasetGlobal","단위점수계");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","grade","value","DatasetGlobal","등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","adjustScore","value","DatasetGlobal","조정점수");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","allScore","value","DatasetGlobal","성적총점");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","finalGrade","value","DatasetGlobal","최종등급");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","gpa","value","DatasetGlobal","평점");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("NexacroMidtermExam.xfdl", function() {
        /*
        ========================================================================
        파    일    명 : NexacroMidtermExam.xfdl
        ========================================================================
        작    성    자 : 강지호
        작    성    일 : 2020.10.24
        작  성  내  용 : 학생 정보 조회 요청, 콜백
        ========================================================================
        수    정    자 : 강지호
        수    정    일 : 2020.10.24
        수  정  내  용 : 학생 성적 수정 요청, 콜백
        ========================================================================
        함  수  설  명 :
        NexacroMidtermExam_onload: 이 폼이 로드될 때 서버에 Dataset 요청 후 데이터 셋 받아 저장 후, 콜백 메소드 호출
        received1: 학생 조회 시 콜백 함수
        Button00_onclick: 버튼 클릭 시 서버에 업데이트 요청(컨트롤러 매핑 요청 경로로) 매개변수로 입력 한 값 넣어줌
        received2: 학생 성적 업데이트 시 콜백 함수
        ========================================================================
        */

        "use strict";

        // load 될 때 웹 서버 애플리케이션을 거쳐 데이터베이스 에서 데이터 받음
        this.NexacroMidtermExam_onload = function(obj,e)
        {
        	nexacro.getApplication().DatasetGlobal.clear();
        	let id = "scorelist_xml";
        	let url = "list/score";
        	let reqDs = "";
        	let respDs = "DatasetGlobal=scorelist";
        	let args = "";
        	let callback = "received1";

        	// 폼변수
        	this.serverInfo = "";

        	this.transaction(id, nexacro.getApplication().CONTEXT + url, reqDs, respDs, args, callback);

        };

        // 콜백 함수1
        this.received1 = function(id, code, message)
        {
        	if (code == 0) {
        		this.alert("SUCESS["+code+"]:"+message);
        	} else {
        		this.alert("Error["+code+"]:"+message);
        	}
        }

        // 버튼 클릭 시 서버에 업데이트 요청(컨트롤러 매핑 요청 경로로) 매개변수로 입력 한 값 넣어줌
        this.Button00_onclick = function(obj,e)
        {
        	var id = "";
        	var url = "update/score";
        	var reqDs = "";
        	var respDs = "";
        	var args = "attendanceDay=" + this.attendanceDay.text + " attendance="+this.attendance.text + " middleScore="+this.middleScore.text + " homework="+this.homework.text + " finalScore="+this.finalScore.text + " unitScore="+this.unitScore.text + " grade="+this.grade.text + " adjustScore="+this.adjustScore.text + " allScore="+this.allScore.text
        			+ " finalGrade="+this.finalGrade.text + " gpa="+this.gpa.text + " studentId="+this.studentId.text;
        	var callback = "received2";

        	this.transaction(id, nexacro.getApplication().CONTEXT + url, reqDs, respDs, args, callback);
        };

        // 콜백 함수2
        this.received2 = function(id, code, message)
        {
        	if (code == 0) {
        		this.alert("SUCESS["+code+"]:"+message);
        		this.reload();
        	} else {
        		this.alert("Error["+code+"]:"+message);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NexacroMidtermExam_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("NexacroMidtermExam.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
