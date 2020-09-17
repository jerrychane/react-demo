import React, { Component } from 'react';
import WarningComponent from 'warning-component';
import 'warning-component/dist/main.css';
import './App.css'
import moment from 'moment';
import Modal from 'bee-modal';
import 'bee-modal/build/Modal.css';
import Button from 'bee-button';
import 'bee-button/build/Button.css';
// moment.locale('zh-cn');  //中文
moment.locale('en');//英文
window.$$msdomain = ''
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: 'UTC-10:00',  //时区格式
      timezonePK: '', //时区pk
      taskDetailDataTaskTime: [{ "starttime": 1600053851991, "endtime": 1600313064000, "modetype": 4, "modefrequency": 1, "modevaule": "04-11", "duramode": 0, "duravalue": "08:00", "periodmode": "0", "periodstart": "", "periodend": "", "timezoneCode": "cc4ee641-7d33-4133-8857-30468220cde8", "timezone": "UTC+08:00", "key": 0 }],//任务定时规则
      taskUserList: [{ "uname": "阿斯顿23", "ucode": "未知邮箱", "key": 0, "userid": "0678157a-1f89-4612-95c1-173ab25ada00" }],//当前已选消息接收人
      taskNameList: { "zh_CN": "1", "en_US": "2", "zh_TW": "3" },// 任务名称
      rulesForTasktimeTips: '',//必填提示语
      tableDataForTaskway: {},//任务定时规则
      userlistAllData: [],//所有消息接收人   
      taskDetailData: [],//任务详情 
      mode: '',// 选人组件环境模式
      languageFlag: 'zh_CN',
      sendflag: 0,
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  /**
 * 获取当前选中row的信息
 * @param {Array} selectedList 选中行信息
 * @param {Object} record 选中行信息
 * @param {Number} index 选中行行数
 * @param {Array} newData 选中行信息
 */

  getSelectedDataForTimerules = (selectedList, record, index, newData) => {
    console.log('App -> getSelectedDataForTimerules -> selectedList, record, index, newData', selectedList, record, index, newData)
  }
  /**
   * 新增定时规则点击确定后的回调
   * @param {Object} value 新增定时规则数据
   */
  tasktimeCallback = (value) => {
    console.log('App -> tasktimeCallback -> value', value)
  }
  /**
   * 删除定时规则
   * @param {String} oper 默认值为 'delete'
   * @param {Number} index 删除行索引
   */
  onDeleteTimeRules = (oper, index) => {
    console.log('App -> onDeleteTimeRules -> oper, index', oper, index)
  }
  /**
   * 编辑定时规则
   * @param {String} oper 默认值为 'edit'
   * @param {Object} data 编辑行数据
   * @param {Number} index 编辑行索引
   */
  onEditTimerules = (oper, data, index) => {
    console.log('App -> onEditTimerules -> oper, data, index', oper, data, index)
  }

  /**
 * 选人组件:消息设置-设置-确定后的回调函数，获取消息接收人
 * @param {Number} sendflag 发送时机 0-都不发送 1-失败发送 2-成功失败都发送
 * @param {Array} taskUserList 消息设置选中行信息
 */
  taskuserListCallback = (sendflag, taskUserList) => {
    console.log('App -> taskuserListCallback -> sendflag, taskUserList', sendflag, taskUserList)
    this.setState({sendflag})
  }

  /**
 * 选人组件:获取消息设置后的所有状态信息
 * @param {Object} TaskUserState 消息设置点击确定后所有state信息
 */
  getTaskUserState = (TaskUserState) => {
    console.log('App -> getTaskUserState -> TaskUserState', TaskUserState)
  }
  /**
   * 选人组件：删除接收人
   * @param {Object} record 选中行信息
   * @param {Number} index 选中行行数
   */
  deleteUserSelected = (record, index) => {
    console.log('App -> deleteUserSelected -> record, index', record, index)
  }

  /**
  * 任务名称输入框 onChange 函数
  * @param {String} taskNameValue 任务名称
  * @param {Object} taskNameList  多语言任务名称
  */
  handleInputChange = (taskNameValue, taskNameList) => {
    console.log('App -> handleInputChange -> taskNameList', taskNameList)
    console.log(taskNameValue, taskNameList)
  }
  /**
  * 任务名称点击确定后的回调函数
  * @param {Object} taskNameList 多语言任务名称
  */
  handleOnOk = (taskNameList) => {
    console.log(taskNameList)
  }

  close () {
    this.setState({
      showModal: false
    });
  }
  open () {
    this.setState({
      showModal: true
    });
  }

  render () {
    console.log(process.env)
    const { taskDetailDataTaskTime, tableDataForTaskway, rulesForTasktimeTips, userlistAllData, taskUserList, taskDetailData, timezone, timezonePK, languageFlag, mode, taskNameList, sendflag } = this.state
    console.log(window.navigator.language);
    return (
      <div className="demo">
        <Button
          bordered
          className="demo-margin"
          onClick={this.open}>
          调度
            </Button>
        <Modal
          show={this.state.showModal}
          width='50%'
          onHide={this.close} >
          <Modal.Header closeButton closeButtonProps={{ fieldId: 'closeBtn' }}>
            <Modal.Title>标题</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <WarningComponent
              className={'demoClassName'}
              refs={'demoRefs'}
              mode={mode}
              locale={languageFlag}
              taskDetailDataTaskTime={taskDetailDataTaskTime}
              rulesForTasktimeTips={rulesForTasktimeTips}
              tableDataForTaskway={tableDataForTaskway}
              userlistAllData={userlistAllData}
              taskUserList={taskUserList}
              taskNameList={taskNameList}
              sendflag={sendflag}
              taskDetailData={taskDetailData}
              timezone={timezone}
              timezonePK={timezonePK}
              getSelectedDataForTimerules={this.getSelectedDataForTimerules}
              tasktimeCallback={this.tasktimeCallback}
              onDeleteTimeRules={this.onDeleteTimeRules}
              onEditTimerules={this.onEditTimerules}
              taskuserListCallback={this.taskuserListCallback}
              getTaskUserState={this.getTaskUserState}
              deleteUserSelected={this.deleteUserSelected}
              handleInputChange={this.handleInputChange}
              handleOnOk={this.handleOnOk}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close} colors="secondary" style={{ marginRight: 8 }}>取消</Button>
            <Button onClick={this.close} bordered>确认</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default App;