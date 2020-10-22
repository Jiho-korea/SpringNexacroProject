(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HelloWorld");
            this.set_titletext("New Form");
            this.set_font("bold 36px/normal \"Gulim\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","74","30","352","108",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("HelloWorld!!!!!!!!");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Spring_Page","448","224","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("스프링의 페이지 이동");
            obj.set_font("12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button_Nexacro_Page","598","224","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("넥사크로의 페이지 이동");
            obj.set_font("12px/normal \"Gulim\"");
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
        this.registerScript("HelloWorld.xfdl", function() {
        /*
        ========================================================================
        파    일    명 : HelloWorld.xfdl
        ========================================================================
        작    성    자 : 강지호
        작    성    일 : 2020.10.23
        작  성  내  용 : HelloWorld 출력
        ========================================================================
        수    정    자 : 강지호
        수    정    일 : 2020.10.23
        수  정  내  용 : 스프링 페이지 이동, 넥사크로 페이지 이동 테스트
        ========================================================================
        */

        // 서버에 요청보냄
        this.Button_Spring_Page_onclick = function(obj,e)
        {
        	location.href = "springView";
        };

        this.Button_Nexacro_Page_onclick = function(obj,e)
        {
        	this.go("Base::HelloWorld2.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button_Spring_Page.addEventHandler("onclick",this.Button_Spring_Page_onclick,this);
            this.Button_Nexacro_Page.addEventHandler("onclick",this.Button_Nexacro_Page_onclick,this);
        };
        this.loadIncludeScript("HelloWorld.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
