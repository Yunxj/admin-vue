/**
 * Created by xinye on 2016/12/29.
 */

import wx from "./base";

wx.Event = {
    SHOW_TIPMESSAGE: "SHOW_TIPMESSAGE",
    SHOW_LOADING: "SHOW_LOADING",
    HIDE_LOADING: "HIDE_LOADING",
    SEARCH_REFRESH: "SEARCH_REFRESH", // 刷新（查询）
    SEARCH_CONDITION_RESET: "SEARCH_CONDITION_RESET", // 重置查询条件
    SEARCH_IN_PROCESS: "SEARCH_IN_PROCESS", // 查询中
    SEARCH_SUCCESS: "SEARCH_SUCCESS", // 查询成功
    SEARCH_FAILED: "SEARCH_FAILED", // 查询失败
    SEARCH_RESULT_SORT_CHANGED: "SEARCH_RESULT_SORT_CHANGED", // 排序改变
    SEARCH_RESULT_FILTER_CHANGED: "SEARCH_RESULT_FILTER_CHANGED", // 过滤筛选
    SEARCH_PAGER_CHANGED: "SEARCH_PAGER_CHANGED", // 分页改变

    POPUP_CREATE_DIALOG: "POPUP_CREATE_DIALOG", // 弹出添加记录框
    POPUP_UPDATE_DIALOG: "POPUP_UPDATE_DIALOG", // 弹出编辑记录框

    SUBMIT_DATA_SUCCESS: "SUBMIT_DATA_SUCCESS", // 提交数据(创建,编辑)

    OPTION_DATA_CHANGED: "OPTION_DATA_CHANGED", // 选择值改变

    FILE_UPLOAD_FAILED: 'FILE_UPLOAD_FAILED',
    FILE_UPLOAD_REMOVE: 'FILE_UPLOAD_REMOVE',

    CLOSE_SUBMIT_DATA_MODAL: 'CLOSE_SUBMIT_DATA_MODAL',// 关闭submitModal
    DETAIL_TABLE_RESULT_NONE: 'DETAIL_TABLE_RESULT_NONE', // detail中的列表没有搜索到信息
    DETAIL_TABLE_RESULT_HAVE: 'DETAIL_TABLE_RESULT_HAVE', // detail中的列表有搜索到信息
    SEARCH_TAB_CHANGED: "SEARCH_TAB_CHANGED"         // search-box中的tabs切换
};

export default wx