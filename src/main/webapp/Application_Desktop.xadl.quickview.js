(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("DatasetGlobal", this);
            obj.addEventHandler("cancolumnchange",this.DatasetGlobal_cancolumnchange,this);
            obj.addEventHandler("oncolumnchanged",this.DatasetGlobal_oncolumnchanged,this);
            obj._setContents("<ColumnInfo><Column id=\"학과\" type=\"STRING\" size=\"256\"/><Column id=\"성명\" type=\"STRING\" size=\"256\"/><Column id=\"학번\" type=\"STRING\" size=\"256\"/><Column id=\"재수강\" type=\"STRING\" size=\"256\"/><Column id=\"전자출결\" type=\"INT\" size=\"256\"/><Column id=\"출석\" type=\"FLOAT\" size=\"256\"/><Column id=\"중간\" type=\"INT\" size=\"256\"/><Column id=\"과제\" type=\"INT\" size=\"256\"/><Column id=\"기말\" type=\"INT\" size=\"256\"/><Column id=\"단위점수계\" type=\"INT\" size=\"256\"/><Column id=\"등급\" type=\"STRING\" size=\"256\"/><Column id=\"조정점수\" type=\"INT\" size=\"256\"/><Column id=\"성적총점\" type=\"INT\" size=\"256\"/><Column id=\"최종등급\" type=\"STRING\" size=\"256\"/><Column id=\"평점\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("CONTEXT","/mavennexacro/");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        /*
        ========================================================================
        파    일    명 : Application_Desktop.xadl
        ========================================================================
        작    성    자 : 강지호
        작    성    일 : 2020.11.04
        작  성  내  용 : Dataset값 다루는 게 대부분인 스크립트

        함  수  설  명 :
        1. DatasetGlobal_oncolumnchanged - Dataset에 입력된, DB에서 불러올 값을 다루는 함수(cancolumnchange 메소드가 true 를 리턴 했을 때 동작)
        2. DatasetGlobal_cancolumnchange - Dataset의 각 컬럼에 대해 유효성 검사는 여기서
        3. isNumeric - 입력된 값이 숫자 인지 검사하는 함수
        ========================================================================
        */
        this.DatasetGlobal_cancolumnchange = function(obj,e)
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

        this.DatasetGlobal_oncolumnchanged = function(obj,e)
        {
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

        // 숫자 인지 검사하는 함수
        function isNumeric(data) {
          return !isNaN(data);
        }
        });
        
        this.loadPreloadList();

    };
}
)();
