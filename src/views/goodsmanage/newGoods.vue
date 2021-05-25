<template>
  <div class="releaseProduct-content">
    <p class="f700 p-10">发布新商品</p>
    <p class="f700 p-10" style="font-size: 14px">选择商品分类</p>
    <div class="p-10" style="font-size: 14px">
      已选分类
      <span class="f700">{{ chooseValue }}</span>
    </div>

    <div class="m-t-50" v-show="zhedieFlag">
      <el-cascader-panel
        :options="options"
        v-model="optionValue"
        @change="handleChange"
        @expand-change="handleNodes"
      ></el-cascader-panel>
      <el-button class="p-10" type="primary" @click="releaseBtn()"
        >发布新商品</el-button
      >
    </div>

    <!-- 基本信息 -->
    <div class="newGoodsInfoContainer m-t-50">
      <!-- 售后数据 -->
      <div class="">
        <span class="line"></span>
        <span class="f700 p-l-10">基本信息</span>
      </div>

      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品标题" prop="title">
            <el-col :span="18">
              <span class="m-l-50 l-right" style="l"
                >组成：商品描述+规格，最多输入60个汉字（120个字符）</span
              >
              <el-input v-model="ruleForm.title"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="商品规格">
            <div class="specContainer bg-c p-10" style="min-height: 300px">
              <p class="c-6">请准确填写属性，有利于商品在搜索和推荐中露出。</p>
              <div>
                <el-col :span="11">
                  <el-form-item label="品牌" prop="desc">
                    <el-input type="text" v-model="ruleForm.desc"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="*穿耳材质" prop="region">
                    <el-select
                      v-model="ruleForm.region"
                      placeholder="请选择活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </div>
            </div>
          </el-form-item>

          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

          <!-- 商品轮播图 -->
          <el-form-item label="商品轮播图">
            <div class="p-l-20 c-3" style="margin-top: 9px">
              图片要求：宽高相等且大于480px，大小1M内。已上传0/10张，拖拽可调整顺序
            </div>
            <div class="m-t-20 p-10" style="height: 151px;">
              <el-upload
                action=""
                list-type="picture-card"
                :auto-upload="false"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-exceed="handleExceed"
                multiple
                drag
                :limit=2
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog v-model="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </div>
          </el-form-item>

           <!-- 商品素材 -->
           <el-form-item label="商品素材">
            <div class="p-l-20 c-3" style="margin-top: 9px">
              上传素材，以用于搜索、推荐、频道和活动列表等多个流量场景
            </div>
            <div class="m-t-20 p-10" style="height: 151px;">
              <el-upload
                action=""
                list-type="picture-card"
                :auto-upload="false"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                multiple
                drag
                :limit=5
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog v-model="materialdialogVisible">
                <img width="100%" :src="materialdialogImageUrl" alt="" />
              </el-dialog>
            </div>
          </el-form-item>

          <!-- 规格与库存 -->
          <div class="m-b-50">
            <span class="line"></span>
            <span class="f700 p-l-10">规格与库存</span>
          </div>

          <el-form-item label="商品规格">
            <div class="specContainer bg-c p-10">
              <p class="c-6">
                最多添加两个商品规格，第一个商品规格可添加规格图片
              </p>
              <div class="m-t-20 p-10" style="min-height: 70px">
                <el-col :span="8">
                  <el-input
                    v-model="specinputOne"
                    placeholder="请输入"
                  ></el-input>
                </el-col>

                <el-col :span="2" :offset="2" style="margin-left: 60px">
                  <el-checkbox v-model="imgchecked">图片</el-checkbox>
                </el-col>

                <el-col :span="3">
                  <el-button type="text" @click="deleteSpec()"
                    >删除规格</el-button
                  >
                </el-col>
              </div>

              <div class="m-t-20 m-l-20">
                <el-button type="primary" @click="addSpec()"
                  >添加规格</el-button
                >
              </div>
            </div>
          </el-form-item>

          <el-form-item label="价格及库存" prop="markettable">
            <el-col :span="18">
              <span class="m-l-50 c-6"
                >请如实填写库存信息，以确保商品可以在承诺发货时间内发出，避免可能的物流违规</span
              >
              <div>
                <div class="divHeader">
                  <div style="flex: 1" class="items">型号</div>
                  <div style="flex: 1" class="items">
                    <i class="c-must">* </i> 库存
                  </div>
                  <div style="flex: 1" class="items">
                    <i class="c-must">* </i> 价格
                  </div>
                  <div style="flex: 1" class="items">
                    <i class="c-must">* </i> 预览图
                  </div>
                  <div style="flex: 1" class="items">行数</div>
                </div>
                <div
                  class="divContent"
                  v-for="(domain, index) in dyBody"
                  :key="index"
                >
                  <div style="flex: 1; border-right: 1px solid #e0e0e0"></div>
                  <div style="flex: 1" class="items">
                    <el-input
                      class="input"
                      type="number"
                      placeholder="请输入"
                      v-model="domain.kucun"
                    ></el-input>
                  </div>
                  <div style="flex: 1" class="items">
                    <el-input
                      class="input"
                      placeholder="请输入"
                      type="number"
                      v-model="domain.price"
                    ></el-input>
                  </div>
                  <div style="flex: 1" class="items">
                    <el-upload
                      action=""
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :auto-upload="false"
                      class="imgup"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="" />
                    </el-dialog>
                  </div>
                  <div style="flex: 1" class="items">{{ ++index }}</div>
                </div>
                <el-button @click="tryAdd()">try</el-button>
              </div>

              <!-- <el-table :data="tableData" border class="tForm">
                <el-table-column label="入学年份" width="180">
                  <template #default="scope">
                    <el-select
                      v-model="scope.row.teacherTime"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in teacherTime"
                        :key="item.sTime"
                        :label="item.sTime"
                        :value="item.sTime"
                      >
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="班级名称" width="200">
                  <template #default="scope">
                    <el-select
                      v-model="scope.row.classNam"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in classNam"
                        :key="item.label"
                        :label="item.label"
                        :value="item.label"
                      >
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="所教科目">
                  <template #default="scope">
                    <el-select v-model="sub" placeholder="请选择">
                      <el-option
                        v-for="item in scope.row.sub"
                        :key="item.sub"
                        :label="item.sub"
                        :value="item.sub"
                      >
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="教材版本">
                  <template #default="scope">
                    <el-select v-model="scope.row.book" placeholder="请选择">
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <el-button @click="addTable()">添加</el-button>
                </el-table-column>
              </el-table> -->
            </el-col>
          </el-form-item>

          <el-form-item label="商品市场价" prop="marketprice">
            <el-col :span="18" style="position: relative">
              <span class="m-l-50 c-6">应高于本平台价格</span>
              <el-input
                v-model="ruleForm.marketprice"
                type="number"
                class="deal"
              ></el-input>
              <div style="position: absolute; right: 10px; top: 40px">
                <span>|</span>
                <span class="p-l-10">元</span>
              </div>
            </el-col>
          </el-form-item>

          <!-- 服务与承诺 -->
          <div class="m-b-50">
            <span class="line"></span>
            <span class="f700 p-l-10">服务与承诺</span>
          </div>

          <el-form-item label="商品类型" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="original">普通商品</el-radio>
              <el-radio label="out">海外进口</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="是否二手" prop="secondhand">
            <el-radio-group v-model="ruleForm.secondhand">
              <el-radio label="1">非二手</el-radio>
              <!-- <el-radio label="海外进口"></el-radio> -->
            </el-radio-group>
          </el-form-item>

          <el-form-item label="是否预售" prop="presale">
            <el-radio-group v-model="ruleForm.presale">
              <el-radio label="1">非预售</el-radio>
              <el-radio label="2">预售</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="承诺发货时间" prop="fahuotime">
            <el-radio-group v-model="ruleForm.fahuotime">
              <el-radio label="1">当日发货</el-radio>
              <el-radio label="2">24小时</el-radio>
              <el-radio label="3">24小时</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 运费地区 -->
          <el-form-item label="运费">
            <div class="p-l-20 c-3" style="margin-top: 9px">包邮</div>
            <div class="m-t-20 p-10" style="height: 111px; background: #f4f6f4">
              <p class="baoyouquyue">
                包邮配送地区：北京、安徽、福建、甘肃、广东、广西、贵州、海南、河北、河南、黑龙江、湖北、湖南、吉林、江苏、江西、辽宁、内蒙古、宁夏、青海、山东、山西、陕西、上海、四川、天津、西藏、新疆、
                云南、浙江、重庆
              </p>
              <p class="p-t-10 baoyouquyue">不配送地区：香港、澳门、台湾</p>
            </div>
          </el-form-item>
          <el-form-item label="承诺" prop="promisetime">
            <el-radio-group v-model="ruleForm.promisetime">
              <el-radio label="1"
                >7天无理由退换货
                该类商品，必须支持【七天无理由退换货】服务</el-radio
              >
              <el-radio label="2">假一赔十</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 添加规格 -->
    <el-dialog title="提示" v-model="dialogFormVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <template #footer>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    // str中的汉字换成字符
    var getBLen = function (str) {
      if (str == null) return 0
      if (typeof str != 'string') {
        str += ''
      }
      return str.replace(/[^\x00-\xff]/g, "01").length; // eslint-disable-line
    }
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      bannerdialogImageUrl: '',
      bannerdialogVisible: false,
      materialrdialogImageUrl: '',
      materialdialogVisible: false,
      sub: '',
      tableData: [
        {
          classNam: [
            {
              label: '一班'
            },
            {
              label: '二班'
            },
            {
              label: '三班'
            },
            {
              label: '四班'
            },
            {
              label: '五班'
            },
            {
              label: '六班'
            }
          ],
          teacherTime: [
            {
              sTime: '2019'
            },
            {
              sTime: '2018'
            },
            {
              sTime: '2017'
            },
            {
              sTime: '2016'
            },
            {
              sTime: '2015'
            },
            {
              sTime: '2014'
            }
          ],
          sub: [
            {
              sub: '语文'
            },
            {
              sub: '数学'
            },
            {
              sub: '英语'
            },
            {
              sub: '物理'
            },
            {
              sub: '化学'
            }
          ]
        }
      ],
      zhedieFlag: true,
      optionValue: [],
      chooseValue: '',
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      specinputOne: '', // 规格1
      imgchecked: false, // 规格是否勾选图片
      dyBody: [{ kucun: '', price: '' }],
      form: {
        name: '',
        region: ''
      },
      dialogFormVisible: false,
      ruleForm: {
        title: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        markettable: {}, // 价格及库存
        marketprice: '', // 商品市场价格
        spec: [], // 商品规格
        resource: 'original',
        secondhand: '1', // 是否二手
        presale: '1', // 是否预售
        fahuotime: '1', // 承诺发货时间
        promisetime: '1',
        desc: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入商品标题', trigger: 'blur' },
          {
            validator: function (rule, value, callback) {
              if (!value) {
                callback()
              } else {
                if (getBLen(value) >= 61) {
                  callback(
                    new Error(
                      '商品标题组成：商品描述+规格，最多输入60个汉字（120个字符）'
                    )
                  )
                } else {
                  callback()
                }
              }
            }
          }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        markettable: [{ required: true, message: '请选择', trigger: 'change' }],
        secondhand: [{ required: true, message: '请选择', trigger: 'change' }],
        marketprice: [{ required: true, message: '请输入', trigger: 'change' }],
        fahuotime: [{ required: true, message: '请选择', trigger: 'change' }],
        presale: [{ required: true, message: '请选择', trigger: 'change' }],
        promisetime: [{ required: true, message: '请选择', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    handleNodes (value, label) {
      console.log('展开变化', value, label)
    },
    releaseBtn () {
      this.zhedieFlag = false
      if (!this.optionValue) {
        this.$message({
          message: '请选择商品分类',
          type: 'warning'
        })
        return false
      }
    },
    addSpec () {
      this.dialogFormVisible = true
    },
    deleteSpec () {
      this.$confirm('确定删除该规格嘛?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    addTable () {
      this.tableData.push({
        classNam: [
          {
            label: '一班'
          }
        ],
        teacherTime: [
          {
            sTime: '2019'
          }
        ],
        sub: [
          {
            sub: '语文'
          }
        ]
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleExceed (files, fileList) {
      console.log(fileList)
      console.log(files)
      // 只有超过了limit才进来
      this.$message.warning(`当前限制选择 ${fileList.length} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    tryAdd () {
      this.dyBody.push({
        kucun: '',
        price: ''
      })
    }
  }
}
</script>
<style>
.releaseProduct-content {
  padding: 10px 10px 200px 10px;
  background: #fff;
}
.demo-ruleForm .el-form-item {
  margin-left: 30px;
}
.c-3 {
  color: #333333;
  line-height: 22px;
}
.c-6 {
  color: #666;
}
.c-must {
  color: #ff8989;
}
.bg-c {
  background: #f4f6f4;
}
.baoyouquyue {
  color: #666666;
  font-size: 14px;
}

.el-input__inner::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
.el-input__inner::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
}
.divHeader {
  display: flex;
  height: 47px;
  background: #f4f6f4;
  border: 1px solid #e0e0e0;
  text-align: center;
}
.divHeader div.items:not(:last-child) {
  border-right: 1px solid #e0e0e0;
}
.divContent {
  display: flex;
  height: 60px;
  border: 1px solid #e0e0e0;
  border-top: none;
  text-align: center;
}
.divContent div.items:not(:last-child) {
  border-right: 1px solid #e0e0e0;
}
.divContent div.items .input {
  margin-top: 8px;
  width: 80%;
}
.divContent .el-upload--picture-card {
  height: 44px !important;
  line-height: 44px !important;
  margin: 6px 0px;
}
</style>
