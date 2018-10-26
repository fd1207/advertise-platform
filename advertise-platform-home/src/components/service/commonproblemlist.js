/**
 * 常见问题
 */
export default {
    
    /*
    ** 获取常见问题
    **
    */
    getCommonProblemList(){
      let commonProblemList=[
          {q:'平台如何保障数据的真实性？'
            ,a:`雅耀管理团队具有超过十年的丰富互联网广告反作弊经验，建立了独到的反作弊数据模型，采用大数据技术多维度比对分析，结合人工核查处理，形成了机器+人工双重反作弊机制，可最大限度保障数据的真实有效性。
          （1）广告投放前：系统会收集合作媒体各项数据，并长期跟踪监测，通过各种算法识别媒体各项数据的真实性；同时，根据媒体的历史数据，评估出媒体每个广告位对应的上限阅读数，当广告阅读数超过上限时，超过部分将不予计费，以此控制作弊带来的风险。
          （2）广告投放中：系统会精准到分钟级监测跟踪媒体数据变化，通过多维度分析比对媒体阅读量的真实性，如发现数据异常或来源异常，我们将及时终止与媒体的合作，最大限度的降低损失，保障广告主的权益。
          （3）广告投放后：针对每个媒体进行质检验收，对于作弊媒体进行查处，有证据证明作弊的，佣金返还给广告主，最大限度的挽回广告主损失。同时，平台通过媒体投放的广告数据和效果反馈，判断媒体的广告效果、流量质量、信誉度等，并对媒体进行评级，对于评级低的媒体，我们将拒绝派单，只有评级高的媒体才能在平台进行接单，避免下次投放带来的风险。
          
          注意：媒体主推送广告文案后被官方删除或处罚，媒体主不承担任何责任，平台将做如下处理：
          1、广告文案推送100分钟后被官方删除，广告主需按媒体主接单位置预估值的三分之一结算，若删文时文案的实际阅读量大于预估值的三分之一则按实际阅读量结算；
          2、若广告文案推送后100分钟内被官方删除（秒删），则广告主需按媒体主接单位置预估值全额结算；
          3、若因为推送广告文案被官方处罚封号的，则广告主需按媒体主接单位置预估值全额结算；
          4、文案被删除后，媒体主自行取消订单的无法获得补偿。`},
          {q:'平台要如何充值？'
            ,a:`每个广告主注册进来都会有一个属于自己的专属客服，需要充值时请在线咨询专属客服充值。`},
          {q:'订单什么时候结算？怎么结算？'
            ,a:`媒体主提交订单申请结算请求后，广告主和雅耀平台会在48小时内对订单进行质检和结算。结算完成后，对应的订单金额会自动划到媒体主账号余额中。由于订单量较多，我们将根据申请结算提交的顺序进行操作，请您耐心等待。`}
      ];
      return commonProblemList;
    }
    
}