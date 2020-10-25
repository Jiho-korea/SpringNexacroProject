(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DBtest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"학과\" type=\"STRING\" size=\"256\"/><Column id=\"성명\" type=\"STRING\" size=\"256\"/><Column id=\"학번\" type=\"STRING\" size=\"256\"/><Column id=\"재수강\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","32","20","398","182",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"142\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"재수강\"/></Band><Band id=\"body\"><Cell text=\"bind:학과\"/><Cell col=\"1\" text=\"bind:성명\"/><Cell col=\"2\" text=\"bind:학번\"/><Cell col=\"3\" text=\"bind:재수강\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBtest.xfdl", function() {
        /*
        ========================================================================
        파    일    명 : DBtest.xfdl
        ========================================================================
        작    성    자 : 강지호
        작    성    일 : 2020.10.24
        작  성  내  용 : DB연동 테스트 용

        함  수  설  명 :
        1. DBtest_onload - 페이지 로드할 때 트랜잭션을 이용해 WAS에 요청, 조회 결과를 XML로 받아 데이터셋에 띄움
        ========================================================================
        */
        this.DBtest_onload = function(obj,e)
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
        		this.alert("SUCCESS["+code+"]:"+message);
        	} else {
        		this.alert("Error["+code+"]:"+message);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DBtest_onload,this);
        };
        this.loadIncludeScript("DBtest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
