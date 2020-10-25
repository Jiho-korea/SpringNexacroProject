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
            obj = new Grid("Grid00","20","20","1150","270",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"187\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"84\"/><Column size=\"48\"/><Column size=\"54\"/><Column size=\"53\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"4\" text=\"학생정보\"/><Cell col=\"5\" rowspan=\"2\" text=\"전자출결&#13;&#10;(출석일수)\"/><Cell col=\"6\" colspan=\"4\" text=\"단위점수\"/><Cell col=\"10\" colspan=\"3\" text=\"자동계산(확인용)\"/><Cell col=\"13\" rowspan=\"2\" text=\"성적&#13;&#10;총점\"/><Cell col=\"14\" rowspan=\"2\" text=\"등급\"/><Cell col=\"15\" rowspan=\"2\" text=\"평점\"/><Cell row=\"1\" col=\"1\" text=\"학과\"/><Cell row=\"1\" col=\"2\" text=\"성명\"/><Cell row=\"1\" col=\"3\" text=\"학번\"/><Cell row=\"1\" col=\"4\" text=\"재수강\"/><Cell row=\"1\" col=\"6\" text=\"출석\"/><Cell row=\"1\" col=\"7\" text=\"중간\"/><Cell row=\"1\" col=\"8\" text=\"과제\"/><Cell row=\"1\" col=\"9\" text=\"기말\"/><Cell row=\"1\" col=\"10\" text=\"단위점수계\"/><Cell row=\"1\" col=\"11\" text=\"등급\"/><Cell row=\"1\" col=\"12\" text=\"조정&#13;&#10;점수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:학과\"/><Cell col=\"2\" text=\"bind:성명\"/><Cell col=\"3\" text=\"bind:학번\"/><Cell col=\"4\" text=\"bind:재수강\" edittype=\"checkbox\" expr=\"expr:재수강=='true' ? '1' : '0'\" displaytype=\"checkboxcontrol\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:전자출결\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:출석\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:중간\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:과제\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:기말\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:단위점수계\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:등급\"/><Cell col=\"12\" edittype=\"text\" editmaxlength=\"30\" text=\"bind:조정점수\"/><Cell col=\"13\" text=\"bind:성적총점\"/><Cell col=\"14\" text=\"bind:최종등급\"/><Cell col=\"15\" text=\"bind:평점\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
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
        작  성  내  용 : Dataset값 다루는 게 대부분인 스크립트

        함  수  설  명 :
        1. Dataset00_oncolumnchanged - Dataset에 입력된, DB에서 불러올 값을 다루는 함수(cancolumnchange 메소드가 true 를 리턴 했을 때 동작)
        2. Dataset00_cancolumnchange - Dataset의 각 컬럼에 대해 유효성 검사는 여기서
        3. isNumeric - 입력된 값이 숫자 인지 검사하는 함수
        ========================================================================
        */

        "use strict";

        // cancolumnchange 메소드가 true 를 리턴 했을 때 동작
        this.Dataset00_oncolumnchanged = function(obj,e){
        	// 재수강 컬럼 동작
        	if(e.columnid == "재수강") {
        		// 다른 이벤트가 동작하지 않도록 설정
        		obj.enableevent = false; //false can stop event temporarily
        		// 변경된 값이 1(체크가 된 경우)인경우
        			if(e.newvalue == '1') {
        				// 1인 경우 Dataset의 chk 값을 Y로 변경
        				obj.setColumn(e.row,"재수강",'true');
        			}else if(e.newvalue == '0') {
        				// 0인 경우 Dataset의 chk 값을 N로 변경
        				obj.setColumn(e.row,"재수강",'false');
        			}
        		obj.enableevent = true;
        	} // 다시 이벤트가 정상 동작하도록 설정


        	// 전자 출결 일 수에 따른 출석 점수 계산
        	if(e.columnid == "전자출결"){
        		obj.setColumn(e.row,"출석", nexacro.round((e.newvalue * (20/15)), 2));
        	}

        	// 단위 점수계 계산
        	obj.setColumn(e.row,"단위점수계", obj.getColumn(e.row, "출석") + obj.getColumn(e.row, "중간") + obj.getColumn(e.row, "과제") + obj.getColumn(e.row, "기말"));

        	// 등급, 성적 총점 계산
        	let score = obj.getColumn(e.row, "단위점수계");
        	let grade = (score >= 95) ? 'A+' : (score >=90) ? 'A0' : (score >=85) ? 'B+' : ((score >=80) ? 'B0' : (score >= 75) ? 'C+' : (score >= 70) ? 'C0' : 'F');
        	obj.setColumn(e.row, "등급", grade);
        	obj.setColumn(e.row, "성적총점", (score + obj.getColumn(e.row, "조정점수")));

        	// 최종 등급 계산 (자동확인용 X)
        	let finalScore = obj.getColumn(e.row, "성적총점");
        	let finalGrade = (finalScore >= 95) ? 'A+' : (finalScore >=90) ? 'A0' : (finalScore >=85) ? 'B+' : ((finalScore >=80) ? 'B0' : (finalScore >= 75) ? 'C+' : (finalScore >= 70) ? 'C0' : 'F');
        	if(obj.getColumn(e.row, "재수강") == true && finalGrade == 'A+'){
        		finalGrade = 'A0';
        	}
        	obj.setColumn(e.row, "최종등급", finalGrade);

        	// 평점 계산
        	let gradeScore = (finalGrade == 'A+') ? 4.5 : (finalGrade =='A0') ? 4.0 : (finalGrade =='B+') ? 3.5 : ((finalGrade =='B0') ? 3.0 : (finalGrade =='C+' ) ? 2.5 : (finalGrade =='C0') ? 2.0 : 0);
        	obj.setColumn(e.row, "평점", gradeScore);



        };


        // Dataset의 각 컬럼에 대해 유효성 검사는 여기서
        this.Dataset00_cancolumnchange = function(obj,e)
        {

        	// 전자출결 컬럼인 경우
        	if(e.columnid == "전자출결") {
        		// 숫자인지 검사
        		if(!isNumeric(e.newvalue)){
        			return false;
        		}

        		// 15초과 0미만 일 경우 false 리턴 oncolumnchanged 동작 X
        		if(e.newvalue > 15 || e.newvalue < 0){
        			return false;
        		}
        	}

        	// 중간 컬럼인 경우
        	if(e.columnid == "중간") {
        		if(!isNumeric(e.newvalue)){
        			return false;
        		}
        		if(e.newvalue > 30 || e.newvalue < 0){
        			return false;
        		}
        	}

        	// 과제 컬럼인 경우
        	if(e.columnid == "과제") {
        		if(!isNumeric(e.newvalue)){
        			return false;
        		}
        		if(e.newvalue > 20 || e.newvalue < 0){
        			return false;
        		}
        	}

        		// 기말 컬럼인 경우
        	if(e.columnid == "기말") {
        		if(!isNumeric(e.newvalue)){
        			return false;
        		}
        		if(e.newvalue > 30 || e.newvalue < 0){
        			return false;
        		}
        	}

        	if(e.columnid == "조정점수") {
        		if(!isNumeric(e.newvalue)){
        			return false;
        		}
        		if(e.newvalue > 30 || e.newvalue < 0){
        			return false;
        		}
        	}

        	return true;

        };

        // 숫자 인지 검사하는 함수
        function isNumeric(data) {
          return !isNaN(data);
        }



        // load 될 때 웹 서버 애플리케이션을 거쳐 데이터베이스 에서 데이터 받음
        this.NexacroMidtermExam_onload = function(obj,e)
        {
        	this.Dataset00.clear();
        	let id = "scorelist_xml";
        	let url = "list/score";
        	let reqDs = "";
        	let respDs = "Dataset00=scorelist";
        	let args = "";
        	let callback = "received";

        	// 폼변수
        	this.serverInfo = "";

        	this.transaction(id, nexacro.getApplication().CONTEXT + url, reqDs, respDs, args, callback);

        };

        // 콜백 함수
        this.received = function(id, code, message)
        {
        	if (code == 0) {
        		this.alert("SUCESS["+code+"]:"+message);
        	} else {
        		this.alert("Error["+code+"]:"+message);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NexacroMidtermExam_onload,this);
            this.Dataset00.addEventHandler("cancolumnchange",this.Dataset00_cancolumnchange,this);
            this.Dataset00.addEventHandler("oncolumnchanged",this.Dataset00_oncolumnchanged,this);
            this.Dataset00.addEventHandler("onload",this.Dataset00_onload,this);
        };
        this.loadIncludeScript("NexacroMidtermExam.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
