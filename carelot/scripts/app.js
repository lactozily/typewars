!function(){"use strict";angular.module("carelot",["ui.router","ui.bootstrap","angular-jwt","angular-storage","angular-loading-bar","ngAnimate","toastr","carelot.core","carelot.dashboard","carelot.transfer","carelot.product","carelot.seller","carelot.buyer","carelot.invoice","carelot.point","carelot.setting"])}(),function(){"use strict";angular.module("carelot.buyer",[])}(),function(){"use strict";angular.module("carelot.core",[])}(),function(){"use strict";angular.module("carelot.dashboard",[])}(),function(){"use strict";angular.module("carelot.invoice",[])}(),function(){"use strict";angular.module("carelot.payment",[])}(),function(){"use strict";angular.module("carelot.point",[])}(),function(){"use strict";angular.module("carelot.product",[])}(),function(){"use strict";angular.module("carelot.seller",[])}(),function(){"use strict";angular.module("carelot.setting",[])}(),function(){"use strict";angular.module("carelot.transfer",[])}(),function(){"use strict";function t(t,e){e.state("core.buyer",{"abstract":!0,url:"/buyer",template:"<div ui-view></div>"}).state("core.buyer.index",{url:"",templateUrl:"app/buyer/views/index.view.html",controller:"ProductIndexController",controllerAs:"ProductCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.buyer").config(t)}(),function(){"use strict";function t(t,e,n){n.html5Mode(!0).hashPrefix("!"),t.tokenGetter=["store",function(t){return t.get("jwt")}],e.interceptors.push("jwtInterceptor")}t.$inject=["jwtInterceptorProvider","$httpProvider","$locationProvider"],angular.module("carelot.core").config(t)}(),function(){"use strict";function t(t,e){e.state("core",{"abstract":!0,url:"",templateUrl:"app/core/views/main.layout.view.html"}).state("index",{url:"/",templateUrl:"app/core/views/index.view.html",controller:"MainController",controllerAs:"MainCTRL"}).state("core.not-found",{url:"/404",templateUrl:"app/core/views/404.view.html"}).state("core.not-authorize",{url:"/403",templateUrl:"app/core/views/403.view.html"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.core").config(t)}(),function(){"use strict";function t(){}angular.module("carelot.core").run(t)}(),function(){"use strict";angular.module("carelot.core").constant("CARELOT_API","").constant("CARELOT_ADMIN_API","http://carelot.herokuapp.com/api/prototype/admin/")}(),function(){"use strict";function t(t,e){e.state("core.dashboard",{"abstract":!0,url:"/dashboard",template:"<div ui-view></div>"}).state("core.dashboard.index",{url:"",templateUrl:"app/dashboard/views/index.view.html",controller:"DashboardController",controllerAs:"DashboardCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.core").config(t)}(),function(){"use strict";function t(t,e){e.state("core.invoice",{"abstract":!0,url:"/invoice",template:"<div ui-view></div>"}).state("core.invoice.index",{url:"",templateUrl:"app/invoice/views/index.view.html",controller:"InvoiceIndexController",controllerAs:"InvoiceCtrl"}).state("core.invoice.detail",{url:"/:id",templateUrl:"app/invoice/views/detail.view.html",controller:"InvoiceDetailController",controllerAs:"InvoiceDetailCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.invoice").config(t)}(),function(){"use strict";function t(t,e){e.state("core.payment",{"abstract":!0,url:"/payment",template:"<div ui-view></div>"}).state("core.payment.index",{url:"",templateUrl:"app/payment/views/index.view.html",controller:"PaymentIndexController",controllerAs:"PaymentIndexCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.payment").config(t)}(),function(){"use strict";function t(t,e){e.state("core.point",{"abstract":!0,url:"/point",template:"<div ui-view></div>"}).state("core.point.index",{url:"",templateUrl:"app/point/views/index.view.html",controller:"PointIndexController",controllerAs:"PointIndexCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.point").config(t)}(),function(){"use strict";function t(t,e){e.state("core.product",{"abstract":!0,url:"/product",template:"<div ui-view></div>"}).state("core.product.index",{url:"?page",templateUrl:"app/product/views/index.view.html",controller:"ProductIndexController",controllerAs:"ProductCtrl"}).state("core.product.detail",{url:"/:id",templateUrl:"app/product/views/detail.view.html",controller:"ProductDetailController",controllerAs:"ProductDetailCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.product").config(t)}(),function(){"use strict";function t(t,e){e.state("core.seller",{"abstract":!0,url:"/seller",template:"<div ui-view></div>"}).state("core.seller.index",{url:"",templateUrl:"app/seller/views/index.view.html",controller:"ProductIndexController",controllerAs:"ProductCtrl"}).state("core.seller.reject",{url:"/reject",templateUrl:"app/seller/views/index.view.html",controller:"ProductRejectController",controllerAs:"ProductCtrl"}).state("core.seller.all",{url:"/all",templateUrl:"app/seller/views/index.view.html",controller:"ProductAllController",controllerAs:"ProductCtrl"}).state("core.seller.detail",{url:"/:id",templateUrl:"app/seller/views/detail.view.html",controller:"ProductDetailController",controllerAs:"ProductDetailCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.seller").config(t)}(),function(){"use strict";function t(t,e){e.state("core.setting",{"abstract":!0,url:"/setting",templateUrl:"app/setting/views/layout.view.html"}).state("core.setting.reject-product-reason",{url:"/reject-product-reason",templateUrl:"app/setting/views/reject-product-reason.view.html",controller:"RejectProductReasonController",controllerAs:"RejectReasonCtrl"}).state("core.setting.reject-invoice-reason",{url:"/reject-invoice-reason",templateUrl:"app/setting/views/reject-product-reason.view.html",controller:"RejectInvoiceReasonController",controllerAs:"RejectReasonCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.core").config(t)}(),function(){"use strict";function t(t,e){e.state("core.transfer",{"abstract":!0,url:"/transfer",template:"<div ui-view></div>"}).state("core.transfer.index",{url:"",templateUrl:"app/transfer/views/index.view.html"}).state("core.transfer.detail",{url:"/:seller_id",templateUrl:"app/transfer/views/detail.view.html",controller:"TransferDetailController",controllerAs:"TransferDetailCtrl"})}t.$inject=["$urlRouterProvider","$stateProvider"],angular.module("carelot.transfer").config(t)}(),function(){"use strict";function t(t){function e(e){var n=this.API_ENDPOINT;return c(e)&&(n+=this.generateQuery(e)),t.get(n)}function n(e){return t.get(this.API_ENDPOINT+e)}function r(e){return t.post(this.API_ENDPOINT,e)}function i(e,n){return t.put(this.API_ENDPOINT+"/"+e,n)}function o(e){return t["delete"](this.API_ENDPOINT+"/"+e)}function c(t){return"undefine"!=typeof t}function a(t){var e=this,n="?";return t?(Object.keys(t).forEach(function(r){return e.isHasManyValuesQuery(r)?void(l(t[r])&&(n+=u(r,t[r])+"&")):void(n+=r+"="+t[r]+"&")}),n=d(n)):""}function s(t){return this.hasManyValuesQuery.indexOf(t)>-1}function u(t,e){var n=t+"=";return Object.keys(e).forEach(function(t){e[t]&&(n+=t+",")}),n=d(n)}function l(t){return Object.keys(t).reduce(function(e,n){return e||t[n]},!1)}function d(t){return t.substr(0,t.length-1)}this.API_VERSION="prototype",this.API_ENDPOINT="http://carelotdev.herokuapp.com/api/"+this.API_VERSION+"/admin/",this.hasManyValuesQuery=[],this.isHasManyValuesQuery=s,this.generateQuery=a,this.find=e,this.findById=n,this.create=r,this.update=i,this.remove=o}t.$inject=["$http"],angular.module("carelot.core").service("CoreService",t)}(),function(){"use strict";function t(t,e){function n(e){return t.find(e).success(function(t){c.data={},c.data=t}).error(function(){})}function r(e,n){return t.findById(e).success(function(t){t.buyer.thumbnail="https://s3.amazonaws.com/uifaces/faces/twitter/bramk/128.jpg",c.data=t})}function i(e){return t.findNotTransfer(e).success(function(t){c.data=t})}function o(n){return t.transferOrderBySellerId(n).success(function(){e.success("โอนเงินเสร็จสมบูรณ์")})}var c={};return c.LIMIT_PER_PAGE=10,c.data=[],c.find=n,c.findById=r,c.findNotTransfer=i,c.transferOrderBySellerId=o,c}t.$inject=["OrderService","toastr"],angular.module("carelot.core").factory("Order",t)}(),function(){"use strict";function t(t,e){function n(t){var n=this.API_ENDPOINT+"group_by_seller/not_transfer/";return i(t)&&(n+=o(t)),e.get(n)}function r(t){return e.post(this.API_ENDPOINT+"transfer/current_due",{seller_id:t})}function i(t){return"undefined"!=typeof t}function o(t){return t.due.current_due&&t.due.next_due?"":t.due.current_due?"current_due":t.due.next_due?"next_due":""}this.API_ENDPOINT=t.API_ENDPOINT+"orders/",this.find=t.find.bind(this),this.findById=t.findById.bind(this),this.findNotTransfer=n.bind(this),this.transferOrderBySellerId=r.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.core").service("OrderService",t)}(),function(){"use strict";function t(t){function e(){var t=document.getElementById("sidebar-container"),e=document.getElementById("sidebar-overlay");t.classList.toggle("show"),e.classList.toggle("show")}this.toggleSidebar=e.bind(this)}t.$inject=["$document"],angular.module("carelot.core").service("SidebarService",t)}(),function(){"use strict";function t(t,e){function n(){this.element.removeClass("hide")}function r(){this.element.addClass("hide")}function i(){return!this.element.hasClass("hide")}this.element=angular.element(document.getElementById("carelot-spinner")),this.showSpinner=n.bind(this),this.hideSpinner=r.bind(this),this.isShow=i}t.$inject=["$document","$timeout"],angular.module("carelot.core").service("SpinnerService",t)}(),function(){"use strict";function t(t){function e(){return t.dashboard().success(function(t){i.data=t})}function n(){return t.products().success(function(t){i.data=t})}function r(){return t.invoices().success(function(t){i.data=t})}var i={};return i.data={},i.dashboard=e,i.products=n,i.invoices=r,i}t.$inject=["StatisticsService"],angular.module("carelot.core").factory("Statistics",t)}(),function(){"use strict";function t(t,e){function n(){return e.get(this.API_ENDPOINT+"dashboard")}function r(){return e.get(this.API_ENDPOINT+"products")}function i(){return e.get(this.API_ENDPOINT+"invoices")}this.API_ENDPOINT=t.API_ENDPOINT+"statistics/",this.dashboard=n.bind(this),this.products=r.bind(this),this.invoices=i.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.core").service("StatisticsService",t)}(),function(){"use strict";function t(t,e,n){function r(e){return t.find(e).success(function(t){t.data=t.data.map(function(t){return t.current_pay_in_slip=s(t),t.current_reject_reasons=u(t),t.isEdited=l(t),t}),p.data={},p.data=t,n.hideSpinner()}).error(function(){})}function i(e,n){return t.findById(e).success(function(t){p.data=t,p.data.current_pay_in_slip=s(p.data),p.data.current_reject_reasons=u(p.data)})}function o(n){return t.approve(n).success(function(t){e.success("ตรวจสอบใบแจ้งหนี้เสร็จสมบูรณ์")}).error(function(t){e.error(t.error)})}function c(n,r){var i=r.map(function(t){return t.reason_id});return t.reject(n.invoice_id,i).success(function(t){e.success("ตรวจสอบใบแจ้งหนี้เสร็จสมบูรณ์")})}function a(t){switch(t){case p.STATUS_APPROVED:return"approved";case p.STATUS_REJECTED:return"rejected";case p.STATUS_WAITING:return"waiting";case p.STATUS_NO_PAYMENT:return"no-payment";default:return""}}function s(t){return t.pay_in_slips[t.pay_in_slips.length-1]}function u(t){return t.reject_reasons.filter(function(t){return!t.edited})}function l(t){return d(t)&&f(t)}function d(t){return 0!==t.current_reject_reasons.length}function f(t){return t.buyer_pay_in_status===p.STATUS_WAITING}var p={};return p.LIMIT_PER_PAGE=10,p.STATUS_APPROVED="พบการชำระเงิน",p.STATUS_REJECTED="ไม่พบการชำระเงิน",p.STATUS_WAITING="รอการตรวจสอบ",p.STATUS_NO_PAYMENT="ยังไม่ชำระเงิน",p.data=[],p.find=r,p.findById=i,p.approve=o,p.reject=c,p.convertStatusToClass=a,p}t.$inject=["InvoiceService","toastr","SpinnerService"],angular.module("carelot.invoice").factory("Invoice",t)}(),function(){"use strict";function t(t,e){function n(t){return e.post(this.API_ENDPOINT+"/approve",{invoice_id:t})}function r(t,n){return e.post(this.API_ENDPOINT+"/reject",{invoice_id:t,reject_reason_ids:n})}this.API_ENDPOINT=t.API_ENDPOINT+"invoices/",this.hasManyValuesQuery=["buyer_pay_in_status"],this.generateQuery=t.generateQuery.bind(this),this.isHasManyValuesQuery=t.isHasManyValuesQuery.bind(this),this.find=t.find.bind(this),this.findById=t.findById.bind(this),this.approve=n.bind(this),this.reject=r.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.invoice").service("InvoiceService",t)}(),function(){"use strict";function t(t){function e(e,r,i){var o=r||1,c=i||n.LIMIT_PER_PAGE;return n.data=t.findAll(),n.data.payments=n.data.payments.map(function(t){return t.payment_id%3===0?t.status=n.STATUS_APPROVED:t.payment_id%2===0?t.status=n.STATUS_REJECTED:t.status=n.STATUS_WAITING,t}),e.status.waiting||(n.data.payments=n.data.payments.filter(function(t){return t.status!==n.STATUS_WAITING})),e.status.approved||(n.data.payments=n.data.payments.filter(function(t){return t.status!==n.STATUS_APPROVED})),e.status.rejected||(n.data.payments=n.data.payments.filter(function(t){return t.status!==n.STATUS_REJECTED})),e.status.rejected||e.status.approved||e.status.waiting||(n.data.payments=response.payments.map(function(t){return t.product_id%3===0?t.status=n.STATUS_APPROVED:t.product_id%2===0&&(t.status=n.STATUS_REJECTED),t})),e.text&&""!==e.text&&(n.data.payments=n.data.payments.filter(function(t){return-1!==t.name.toLowerCase().indexOf(e.text.toLowerCase())})),n.data.count=n.data.payments.length,n.data.count>c,n.data.payments=n.data.payments.slice((o-1)*c,c*o),n.data}var n={};return n.LIMIT_PER_PAGE=9,n.STATUS_REJECTED="ไม่พบการชำระเงิน",n.STATUS_APPROVED="พบการชำระเงิน",n.STATUS_WAITING="รอการอนุมัติ",n.data=[],n.search=e,n}angular.module("carelot.payment").factory("Payment",t),t.$inject=["PaymentService"]}(),function(){"use strict";function t(){function t(){return{count:n.length,payments:n}}function e(){}this.findAll=t,this.search=e;for(var n=[],r=1;32>r;r++){var i={payment_id:r,invoice_id:"CL000000"+String(r),buyer:{buyer_id:r,name:"Buyer "+String(r),thumbnail:"http://placehold.it/48x48"},amount:String(r)+"000"};n.push(i)}}angular.module("carelot.payment").service("PaymentService",t)}(),function(){"use strict";function t(t,e,n){function r(n){n.page||1,n.limit||f.LIMIT_PER_PAGE;return t.find(n).success(function(t){f.data=t,t.data=t.data.map(function(t){return t.current_reject_reasons=s(t),t.isEdited=u(t),t}),f.data={},f.data=t,e.hideSpinner()}).error(function(t){console.log(t)})}function i(n){return t.findById(n).success(function(t){t.current_reject_reasons=s(t),t.isEdited=u(t),f.data=t,e.hideSpinner()}).error(function(t){console.log(t)})}function o(e){return t.approve(e).success(function(t){n.success("ตรวจสอบสินค้าเสร็จสมบูรณ์")}).error(function(t){n.error(t.error)})}function c(e,r){var i=r.map(function(t){return t.reason_id});return t.reject(e.product_id,i).success(function(t){n.success("ตรวจสอบสินค้าเสร็จสมบูรณ์")})}function a(t){switch(t){case f.STATUS_APPROVED:return"approved";case f.STATUS_REJECTED:return"rejected";case f.STATUS_WAITING:return"waiting";default:return""}}function s(t){return t.reject_reasons.filter(function(t){return!t.edited})}function u(t){return d(t)&&l(t)}function l(t){return t.admin_approve_status===f.STATUS_WAITING}function d(t){return 0!==t.current_reject_reasons.length}var f={};return f.LIMIT_PER_PAGE=10,f.STATUS_REJECTED="ไม่ผ่านการอนุมัติ",f.STATUS_APPROVED="ผ่านการอนุมัติ",f.STATUS_WAITING="รอการอนุมัติ",f.data={},f.find=r,f.findById=i,f.approve=o,f.reject=c,f.convertStatusToClass=a,f}t.$inject=["ProductService","SpinnerService","toastr"],angular.module("carelot.product").factory("Product",t)}(),function(){"use strict";function t(t,e){function n(t){return e.post(this.API_ENDPOINT+"/approve",{product_id:t})}function r(t,n){return e.post(this.API_ENDPOINT+"/reject",{product_id:t,reject_reason_ids:n})}this.API_ENDPOINT=t.API_ENDPOINT+"products/",this.hasManyValuesQuery=["status"],this.generateQuery=t.generateQuery.bind(this),this.isHasManyValuesQuery=t.isHasManyValuesQuery.bind(this),this.find=t.find.bind(this),this.findById=t.findById.bind(this),this.approve=n.bind(this),this.reject=r.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.product").service("ProductService",t)}(),function(){"use strict";function t(t,e){function n(e){return t.find(e).success(function(t){a.data={},a.data=t}).error(function(){})}function r(e){return t.findById(e).success(function(t){t.buyer.thumbnail="https://s3.amazonaws.com/uifaces/faces/twitter/bramk/128.jpg",a.data=t})}function i(e){return t.findAllOrders(e).success(function(t){a.data=t})}function o(e){return t.findAllPaidOrders(e).success(function(t){a.data=t})}function c(e){return t.findAllOrdersNotTransferInCurrentDue(e).success(function(t){a.data=t})}var a={};return a.data=[],a.find=n,a.findById=r,a.findAllOrders=i,a.findAllPaidOrders=o,a.findAllOrdersNotTransferInCurrentDue=c,a}t.$inject=["SellerService","toastr"],angular.module("carelot.seller").factory("Seller",t)}(),function(){"use strict";function t(t,e){function n(t){return e.get(this.API_ENDPOINT+t+"/orders")}function r(t){return e.get(this.API_ENDPOINT+t+"/orders/not_transfer/current_due")}function i(t){return e.get(this.API_ENDPOINT+t+"/orders?status=approved")}this.API_ENDPOINT=t.API_ENDPOINT+"sellers/",this.find=t.find.bind(this),this.findById=t.findById.bind(this),this.findAllOrders=n.bind(this),this.findAllOrdersNotTransferInCurrentDue=r.bind(this),this.findAllPaidOrders=i.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.seller").service("SellerService",t)}(),function(){"use strict";function t(t,e){function n(){return t.find().success(function(t){s.data=t})}function r(n){return c(n.reason)?t.create(n).success(function(t){e.success("เพิ่มเหตุผลเสร็จสมบูรณ์")}):void e.error("กรุณาใส่เหตุผล")}function i(n,r){return t.update(n,r).success(function(t){e.success("แก้ไขเหตุผลเสร็จสมบูรณ์")})}function o(n){return t.remove(n).success(function(t){e.success("ลบเหตุผลเสร็จสมบูรณ์")})}function c(t){return a(t)}function a(t){return"undefine"!=typeof t&&0!==t.length}var s={};return s.data={},s.find=n,s.create=r,s.update=i,s.remove=o,s}t.$inject=["RejectInvoiceReasonService","toastr"],angular.module("carelot.setting").factory("RejectInvoiceReason",t)}(),function(){"use strict";function t(t,e){this.API_ENDPOINT=t.API_ENDPOINT+"settings/reject_invoice_reasons",this.generateQuery=t.generateQuery.bind(this),this.find=t.find.bind(this),this.create=t.create.bind(this),this.update=t.update.bind(this),this.remove=t.remove.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.setting").service("RejectInvoiceReasonService",t)}(),function(){"use strict";function t(t,e){function n(){return t.find().success(function(t){s.data=t})}function r(n){return c(n.reason)?t.create(n).success(function(t){e.success("เพิ่มเหตุผลเสร็จสมบูรณ์")}).error(function(t){e.error(t.error)}):void e.error("กรุณาใส่เหตุผล")}function i(n,r){return t.update(n,r).success(function(t){e.success("แก้ไขเหตุผลเสร็จสมบูรณ์")}).error(function(t){e.error(t.error)})}function o(n){return t.remove(n).success(function(t){e.success("ลบเหตุผลเสร็จสมบูรณ์")})}function c(t){return a(t)}function a(t){return"undefine"!=typeof t&&0!==t.length}var s={};return s.data={},s.find=n,s.create=r,s.update=i,s.remove=o,s}t.$inject=["RejectProductReasonService","toastr"],angular.module("carelot.setting").factory("RejectProductReason",t)}(),function(){"use strict";function t(t,e){this.API_ENDPOINT=t.API_ENDPOINT+"settings/reject_product_reasons",this.generateQuery=t.generateQuery.bind(this),this.find=t.find.bind(this),this.create=t.create.bind(this),this.update=t.update.bind(this),this.remove=t.remove.bind(this)}t.$inject=["CoreService","$http"],angular.module("carelot.setting").service("RejectProductReasonService",t)}(),function(){"use strict";function t(t,e){t(function(){e.hideSpinner()},1e3)}t.$inject=["$timeout","SpinnerService"],angular.module("carelot.core").controller("MainController",t)}(),function(){"use strict";function t(t){function e(){t.dashboard().then(function(){n.statistics=t.data}),n.labels=[new Date("2016-04-05").toLocaleDateString(),new Date("2016-04-25").toLocaleDateString(),new Date("2016-05-05").toLocaleDateString(),new Date("2016-05-25").toLocaleDateString(),new Date("2016-06-05").toLocaleDateString(),new Date("2016-06-25").toLocaleDateString()],n.data=[[2403,1582,5900,3402,5990,2102]],n.options={borderColor:"#FFFFFF"}}var n=this;e()}t.$inject=["Statistics"],angular.module("carelot.dashboard").controller("DashboardController",t)}(),function(){"use strict";function t(t,e,n,r){function i(){n.findById(t.id).then(function(){s.invoice=n.data,s.invoice.total_cost_without_discount=s.invoice.products_price+s.invoice.shipping_cost,e.hideSpinner()}),r.find().then(function(){s.rejectReasons=r.data.data})}function o(t){n.reject(s.invoice,t).then(function(){i()})}function c(t){return t.buyer_pay_in_status===n.STATUS_WAITING||t.buyer_pay_in_status===n.STATUS_REJECTED}function a(){switch(s.invoice.buyer_pay_in_status){case n.STATUS_APPROVED:return"approved";case n.STATUS_REJECTED:return"rejected";case n.STATUS_WAITING:return"waiting";case n.STATUS_NO_PAYMENT:return"no-payment"}}var s=this;s.invoice={},s.$invoice=n,s.getStatusClass=a,s.rejectReasons=[],s.onRejectSubmit=o,s.isViewingSlipNeeded=c,i()}t.$inject=["$stateParams","SpinnerService","Invoice","RejectInvoiceReason"],angular.module("carelot.invoice").controller("InvoiceDetailController",t)}(),function(){"use strict";function t(t){var e=this;t.invoices().then(function(){e.statistics=t.data})}t.$inject=["Statistics"],angular.module("carelot.invoice").controller("InvoiceIndexController",t)}(),function(){"use strict";function t(){function t(){}var e=this;e.title="IndexController",t()}angular.module("carelot.payment").controller("PaymentIndexController",t),t.$inject=[]}(),function(){"use strict";function t(t){function e(){t.getWaitingApprove(r.page).then(function(){r.products=angular.copy(t.data)})}function n(){r.points.push({point:r.point,money:r.money})}var r=this;r.points=[{point:100,money:300}],r.addPoint=n,e()}t.$inject=["Product"],angular.module("carelot.point").controller("PointIndexController",t)}(),function(){"use strict";function t(t,e,n){function r(){e.findById(n.id).then(function(){c.product=angular.copy(e.data)}),t.find().then(function(){c.rejectReasons=t.data.data})}function i(){e.approve(c.product.product_id).then(function(){r()})}function o(t){e.reject(c.product,t).then(function(){r()})}var c=this;c.product={},c.$product=e,c.rejectReasons=[],c.approve=i,c.onRejectSubmit=o,r()}t.$inject=["RejectProductReason","Product","$stateParams"],angular.module("carelot.product").controller("ProductDetailController",t)}(),function(){"use strict";function t(t){var e=this;e.products=[],e.title="รายการสินค้า",e.itemPerPage=10,e.page=1,t.products().then(function(){e.statistics=t.data})}t.$inject=["Statistics"],angular.module("carelot.product").controller("ProductIndexController",t)}(),function(){"use strict";function t(t){function e(){i(d.reason)}function n(t,e){switch(t.keyCode){case 13:s(e);break;case 27:c(e)}}function r(t){switch(t.keyCode){case 13:i(d.reason)}}function i(e){var n={reason:e};t.create(n).then(function(){d.reason="",l()})}function o(t){t.temp=angular.copy(t.reason),t.edited=!0}function c(t){t.reason=t.temp,a(t)}function a(t){t.edited=!1}function s(e){var n={reason_id:e.reason_id,reason:e.reason};t.update(n.reason_id,n).then(function(){a(e),l()})}function u(e){t.remove(e.reason_id).then(function(){l()})}function l(){t.find().then(function(){d.rejectReasons=t.data})}var d=this;d.reason="",d.rejectReasons={},d.onClickCreateReason=e,d.onEditReasonInputKeyup=n,d.onCreateReasonInputKeyup=r,d.createReason=i,d.startEdit=o,d.closeEdit=a,d.cancelEdit=c,d.submitEdit=s,d.removeEdit=u,l()}t.$inject=["RejectInvoiceReason"],angular.module("carelot.dashboard").controller("RejectInvoiceReasonController",t)}(),function(){"use strict";function t(t){function e(){i(d.reason)}function n(t,e){switch(t.keyCode){case 13:s(e);break;case 27:c(e)}}function r(t){switch(t.keyCode){case 13:i(d.reason)}}function i(e){var n={reason:e};t.create(n).then(function(){d.reason="",l()})}function o(t){t.temp=angular.copy(t.reason),t.edited=!0}function c(t){t.reason=t.temp,a(t)}function a(t){t.edited=!1}function s(e){var n={reason_id:e.reason_id,reason:e.reason};t.update(n.reason_id,n).then(function(){a(e),l()})}function u(e){t.remove(e.reason_id).then(function(){l()})}function l(){t.find().then(function(){d.rejectReasons=t.data})}var d=this;d.reason="",d.rejectReasons={},d.onClickCreateReason=e,d.onEditReasonInputKeyup=n,d.onCreateReasonInputKeyup=r,d.createReason=i,d.startEdit=o,d.closeEdit=a,d.cancelEdit=c,d.submitEdit=s,d.removeEdit=u,l()}t.$inject=["RejectProductReason"],angular.module("carelot.dashboard").controller("RejectProductReasonController",t)}(),function(){"use strict";function t(t,e,n){function r(){e.findAllOrdersNotTransferInCurrentDue(t.seller_id).then(function(){o.transfer=e.data})}function i(){n.transferOrderBySellerId(t.seller_id)}var o=this;o.transfer={},o.onClick=i,r()}t.$inject=["$stateParams","Seller","Order"],angular.module("carelot.transfer").controller("TransferDetailController",t)}(),function(){"use strict";function t(t,e,n){function r(t,r,i){function o(t,e){return t===e}function c(){n.onSuccess({to:"core.*.*"},function(){s=i.uiSref.split(".")[1],u=e.current.name.split(".")[1],a(s,u)})}function a(t,e){o(t,e)?r.addClass("active"):r.hasClass("active")&&r.removeClass("active")}var s=i.uiSref.split(".")[1],u=e.current.name.split(".")[1];a(s,u),c()}var i={link:r,restrict:"A"};return i}t.$inject=["$rootScope","$state","$transitions"],angular.module("carelot.core").directive("menu",t)}(),function(){"use strict";function t(){var t={replace:!0,templateUrl:"app/core/directives/sidebar/sidebar.view.html",restrict:"E",controller:e,controllerAs:"SidebarCtrl"};return t}function e(){function t(t,n,r){e.menus.push({state:t,icon:n,text:r})}var e=this;e.menus=[],t("core.dashboard.index","icon-icon_dashboard_menu","ภาพรวม"),t("core.product.index","icon-icon_product_menu","สินค้า"),t("core.invoice.index","icon-icon_bill_dashboard","ใบแจ้งหนี้"),t("core.transfer.index","icon-icon_transfer_menu","โอนเงิน"),t("core.point.index","icon-file-powerpoint-box","ระบบคะแนน"),t("core.seller.index","icon-icon_seller_menu","ผู้ขาย"),t("core.buyer.index","icon-icon_buyer_menu","ผู้ซื้อ"),t("core.buyer.index","icon-icon_report_menu","ร้องเรียน"),t("core.setting.reject-product-reason","icon-icon_setting_menu","ตั้งค่า")}angular.module("carelot.core").directive("sidebar",t)}(),function(){"use strict";function t(){var t={replace:!0,bindToController:!0,controller:"NavbarController",controllerAs:"NavbarCtrl",restrict:"E",templateUrl:"app/core/directives/navbar/navbar.view.html"};return t}function e(t){function e(){t.toggleSidebar()}var n=this;n.toggleSidebar=e}e.$inject=["SidebarService"],angular.module("carelot.core").controller("NavbarController",e).directive("navbar",t)}(),function(){"use strict";function t(t,e){function n(n,r,i){var o=!1;e.onStart({to:"core.*.*"},function(){(r.hasClass("hide")||o)&&r.removeClass("hide")}),t.$on("cfpLoadingBar:completed",function(){o=!1,r.hasClass("hide")||r.addClass("hide")}),t.$on("cfpLoadingBar:started",function(){o=!0})}var r={templateUrl:"app/core/directives/spinner/spinner.view.html",replace:!0,restrict:"E",link:n};return r}t.$inject=["$rootScope","$transitions"],angular.module("carelot.core").directive("spinner",t)}(),function(){"use strict";function t(){var t={bindToController:!0,templateUrl:"app/product/directives/product-images-preview/product-images-preview.view.html",controller:e,controllerAs:"ProductImagesPreviewCtrl",restrict:"E",scope:{images:"=?"}};return t}function e(t,e){function n(){t.$watch(function(){return i.images},function(){"undefined"!=typeof i.images&&0!==i.images.length&&(i.currentImage=i.images[0])})}function r(t){i.currentImage=angular.copy(i.images[t])}var i=this;i.currentImage="",i.changePreviewImage=r,n()}e.$inject=["$scope","$element"],angular.module("carelot.product").directive("productImagesPreview",t)}(),function(){"use strict";function t(){var t=this;t.buyer1={buyer_id:1,name:"John Doe",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/artexor/128.jpg"},t.buyer2={buyer_id:2,name:"Dylan Meringue",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/ronniegolec/128.jpg"},t.buyer3={buyer_id:3,name:"Burgundy Flemming",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/bramk/128.jpg"},t.buyers=[t.buyer1,t.buyer2,t.buyer3]}angular.module("carelot.buyer").component("buyerList",{templateUrl:"app/buyer/components/buyer-list/buyer-list.view.html",controller:t,bindings:{title:"@"}})}(),function(){"use strict";function t(){}angular.module("carelot.buyer").component("buyerRow",{templateUrl:"app/buyer/components/buyer-row/buyer-row.view.html",controller:t,bindings:{buyer:"<"}})}(),function(){"use strict";function t(){}angular.module("carelot.buyer").component("buyerTable",{templateUrl:"app/buyer/components/buyer-table/buyer-table.view.html",controller:t,bindings:{buyers:"<",query:"@"}})}(),function(){"use strict";function t(){function t(){e.onChangePage({page:e.page})}var e=this;e.changePage=t}angular.module("carelot.core").component("pagination",{templateUrl:"app/core/components/pagination/pagination.view.html",controller:t,bindings:{page:"<",onChangePage:"&"}})}(),function(){"use strict";function t(t,n){function r(){n.on("click",function(){i()})}function i(){var n=t.open({templateUrl:"app/core/components/reject-button/reject-button.modal.html",controller:e,controllerAs:"RejectModalCtrl",resolve:{title:function(){return c.title},reasons:function(){return angular.copy(c.reasons)},onSubmit:function(){return c.onSubmit}}});n.result.then(function(){},function(){})}function o(){return"undefined"==typeof c.text}var c=this;c.isTextEmpty=o,r()}function e(t,e,n,r,i){function o(){if(s(),!u.form.$invalid){if(0===a())return void(u.validateCount=!1);var t=u.reasons.filter(function(t){return t.selected});n({reasons:t}),r.close()}}function c(){r.dismiss("cancel")}function a(){var t=0;return u.reasons.map(function(e){e.selected&&t++}),t}function s(){u.form.$submitted=!0,u.validateCount=!0}var u=this;u.title=t,u.reasons=e,u.dismiss=c,u.confirm=o,u.validateCount=!0}t.$inject=["$uibModal","$element"],e.$inject=["title","reasons","onSubmit","$uibModalInstance","toastr"],angular.module("carelot.core").component("rejectButton",{template:['<i class="mdi mdi-close"></i>','<span class="text">{{ $ctrl.text }}</span>'].join("\n"),controller:t,bindings:{text:"@",title:"@",reasons:"<",onSubmit:"&"}})}(),function(){"use strict";function t(t){var e=this;e.convertStatusToClass=t.convertStatusToClass}t.$inject=["Invoice"],angular.module("carelot.invoice").component("invoiceRow",{templateUrl:"app/invoice/components/invoice-row/invoice-row.view.html",controller:t,bindings:{invoice:"<"}})}(),function(){"use strict";function t(t){function e(){a.$invoice=t,a.tableOpacity={opacity:1},a.invoices={count:0,data:[]},a.query={text:"",buyer_pay_in_status:{waiting:!0,rejected:!1,approved:!1,no_payment:!1},page:1,limit:10},a.onQueryChange=o,a.onSubmit=i,a.fetchData=c,c()}function n(){return 0===a.invoices.count?0:a.query.limit*(a.query.page-1)+1}function r(){var t=a.query.limit*a.query.page;return t>a.invoices.count&&(t=a.invoices.count),t}function i(t){13===t.keyCode&&o()}function o(){a.query.page=1,c()}function c(e){a.tableOpacity.opacity=.3,t.find(a.query).then(function(){a.invoices=t.data,a.tableOpacity.opacity=1,a.lastItemPosition=r(),a.firstItemPosition=n(),e&&(document.querySelector(".content-container").scrollTop=0);
})}var a=this;e()}t.$inject=["Invoice"],angular.module("carelot.invoice").component("invoiceList",{templateUrl:"app/invoice/components/invoice-list/invoice-list.view.html",controller:t,bindings:{}})}(),function(){"use strict";function t(){}angular.module("carelot.invoice").component("invoiceTable",{templateUrl:"app/invoice/components/invoice-table/invoice-table.view.html",controller:t,bindings:{invoices:"<"}})}(),function(){"use strict";function t(t){var e=this;e.$Payment=t,e.rejectReasons=[{id:1,text:"รูปภาพไม่ชัดเจน"},{id:2,text:"ไม่พบเงินเข้าในบัญชี"},{id:3,text:"รายละเอียดไม่ครบถ้วนสมบูรณ์"}]}t.$inject=["Payment"],angular.module("carelot.payment").component("paymentItem",{templateUrl:"app/payment/components/payment-item/payment-item.view.html",controller:t,bindings:{payment:"<"}})}(),function(){"use strict";function t(){var t=this;t.buyer1={buyer_id:1,name:"John Doe",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/artexor/128.jpg"},t.buyer2={buyer_id:2,name:"Dylan Meringue",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/ronniegolec/128.jpg"},t.buyer3={buyer_id:3,name:"Burgundy Flemming",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/bramk/128.jpg"},t.payment3={invoice_id:"CL0000003",buyer:t.buyer2,amount:500},t.payment2={invoice_id:"CL0000002",buyer:t.buyer1,amount:60},t.payment1={invoice_id:"CL0000002",buyer:t.buyer3,amount:450},t.payments=[t.payment1,t.payment2,t.payment3]}angular.module("carelot.payment").component("paymentDashboardList",{templateUrl:"app/payment/components/payment-dashboard-list/payment-dashboard-list.view.html",controller:t,bindings:{}})}(),function(){"use strict";function t(t,e){function n(){s.tableOpacity={opacity:1},s.payments={count:0,payments:[]},s.query={text:"",status:{waiting:!0,rejected:!1,approved:!1}},s.itemPerPage=e.LIMIT_PER_PAGE,s.currentPage=1,s.onQueryChange=c,s.onSubmit=o,s.fetchData=a,a()}function r(){return 0===s.payments.count?0:s.itemPerPage*(s.currentPage-1)+1}function i(){var t=s.itemPerPage*s.currentPage;return t>s.payments.count&&(t=s.payments.count),t}function o(t){13===t.keyCode&&(s.currentPage=1,a())}function c(){s.currentPage=1,a()}function a(t){s.tableOpacity.opacity=.3,s.payments=e.search(s.query,s.currentPage),s.tableOpacity.opacity=1,s.lastItemPosition=i(),s.firstItemPosition=r(),t&&(document.querySelector(".content-container").scrollTop=0)}t.hideSpinner();var s=this;n()}t.$inject=["SpinnerService","Payment"],angular.module("carelot.payment").component("paymentList",{templateUrl:"app/payment/components/payment-list/payment-list.view.html",controller:t,bindings:{}})}(),function(){"use strict";function t(t,e){function n(){s.tableOpacity={opacity:1},s.products={count:0,data:[]},s.query={text:"",status:{waiting:!0,rejected:!1,approved:!1},limit:10,page:1},s.onQueryChange=c,s.onSubmit=o,s.fetchData=a,a()}function r(){return 0===s.products.count?0:s.query.limit*(s.query.page-1)+1}function i(){var t=s.query.limit*s.query.page;return t>s.products.count&&(t=s.products.count),t}function o(t){13===t.keyCode&&c()}function c(){s.query.page=1,a()}function a(e){s.tableOpacity.opacity=.3,t.find(s.query).then(function(){s.products=t.data,s.lastItemPosition=i(),s.firstItemPosition=r(),s.tableOpacity.opacity=1,e&&(document.querySelector(".content-container").scrollTop=0)})}var s=this;n()}t.$inject=["Product","SpinnerService"],angular.module("carelot.product").component("productList",{templateUrl:"app/product/components/product-list/product-list.view.html",controller:t,bindings:{onChangePage:"&",title:"@"}})}(),function(){"use strict";function t(t){var e=this;e.$Product=t}t.$inject=["Product"],angular.module("carelot.product").component("productRow",{templateUrl:"app/product/components/product-row/product-row.view.html",controller:t,bindings:{product:"<"}})}(),function(){"use strict";function t(){}angular.module("carelot.product").component("productTable",{templateUrl:"app/product/components/product-table/product-table.view.html",controller:t,bindings:{products:"<",title:"@"}})}(),function(){"use strict";function t(){var t=this;t.seller1={seller_id:1,name:"Hello Healthy",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/watch84/128.jpg"},t.seller2={seller_id:2,name:"Spa & Massage",thumbnail:"https://s3.amazonaws.com/uifaces/faces/twitter/jupelletier/128.jpg"},t.seller3={seller_id:3,name:"Booky Healthy World",thumbnail:"https://z-1-scontent-sin.xx.fbcdn.net/v/t1.0-1/c0.58.320.320/p320x320/11659454_769544219832252_8312296913337275781_n.jpg?oh=1c4bada377bd059be76b728eb187d9a0&oe=57DCF2A1"},t.sellers=[t.seller1,t.seller2,t.seller3]}angular.module("carelot.seller").component("sellerList",{templateUrl:"app/seller/components/seller-list/seller-list.view.html",controller:t,bindings:{title:"@"}})}(),function(){"use strict";function t(){}angular.module("carelot.seller").component("sellerRow",{templateUrl:"app/seller/components/seller-row/seller-row.view.html",controller:t,bindings:{seller:"<"}})}(),function(){"use strict";function t(){}angular.module("carelot.seller").component("sellerTable",{templateUrl:"app/seller/components/seller-table/seller-table.view.html",controller:t,bindings:{sellers:"<",query:"@"}})}(),function(){"use strict";function t(t){function e(){a.$order=t,a.tableOpacity={opacity:1},a.transfers={count:0,data:[]},a.query={status:{approved:!0},due:{current_due:!0,next_due:!1},is_already_transfer:!1,page:1,limit:10},a.onQueryChange=o,a.onSubmit=i,a.fetchData=c,c()}function n(){return 0===a.transfers.count?0:a.query.limit*(a.query.page-1)+1}function r(){var t=a.query.limit*a.query.page;return t>a.transfers.count&&(t=a.transfers.count),t}function i(t){13===t.keyCode&&o()}function o(){a.query.page=1,c()}function c(e){a.tableOpacity.opacity=.3,t.findNotTransfer(a.query).then(function(){a.transfers=t.data,a.tableOpacity.opacity=1,a.lastItemPosition=r(),a.firstItemPosition=n(),e&&(document.querySelector(".content-container").scrollTop=0)})}var a=this;e()}t.$inject=["Order"],angular.module("carelot.transfer").component("transferList",{templateUrl:"app/transfer/components/transfer-list/transfer-list.view.html",controller:t,bindings:{}})}(),function(){"use strict";function t(t){var e=this;console.log(e)}t.$inject=["Order"],angular.module("carelot.transfer").component("transferRow",{templateUrl:"app/transfer/components/transfer-row/transfer-row.view.html",controller:t,bindings:{transfer:"<"}})}(),function(){"use strict";function t(){}angular.module("carelot.transfer").component("transferTable",{templateUrl:"app/transfer/components/transfer-table/transfer-table.view.html",controller:t,bindings:{transfers:"<"}})}();