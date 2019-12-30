var abkAddress = "0x0ecd4ac8a1acd3e9695435b99973b0ddad84150f",
	abkAbi = [{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"admission_check","outputs":[{"internalType":"bool","name":"result","type":"bool"},{"internalType":"string","name":"reason","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"bigPoolTriggerByOver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"can_reg_check","outputs":[{"internalType":"bool","name":"result","type":"bool"},{"internalType":"string","name":"reason","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"executeDividentPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"gameOver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"cash","type":"uint256"}],"name":"personWithdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"cash","type":"uint256"}],"name":"platformWithdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reenter","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"refer_valid_check","outputs":[{"internalType":"bool","name":"result","type":"bool"},{"internalType":"string","name":"reason","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"reg","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reg","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"showAmbassadorBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showBigPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showBigRound","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showDividentNextTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showLittePool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showLittleRound","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showNowTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showOutDifference","outputs":[{"internalType":"uint8","name":"rate","type":"uint8"},{"internalType":"uint256","name":"difference","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonBonums","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonDividentEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonExist","outputs":[{"internalType":"bool","name":"exist","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonId","outputs":[{"internalType":"uint16","name":"id","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonIsOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonPay","outputs":[{"internalType":"uint16","name":"id","type":"uint16"},{"internalType":"uint256","name":"pay","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonPoolEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonReferrerBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPersonUnwithdraw","outputs":[{"internalType":"uint256","name":"unwithdraw","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPlatformBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPoolTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showPredictEarn","outputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showReferrerBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showRelation","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"num","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showTotalPay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showTotalWiethdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
	// 1: 主網  3: Ropsten测试网络  42: Kovan测试网络  4: Rinkeby测试网络
	gnetId = 3;

var userAccount = "",
	isStart = false,
	// 如果是循环检查，则不用反复提示错误提示
	isCheckInterval = false,
	// 网络检查
	netCheck = false,
	// 用户是否存在
	userExist = false,
	// 推荐是否有效
	recommendedEffective = {
		effective: true,
		// 推荐无效原因
		reason: ""
	},
	web3 = window.web3,
	BN = BigNumber.clone(),
	abkContract;

window.addEventListener('load', function() {
	/**
	 * 检查是浏览器是否安装web3
	 */
	var checkNet = function() {
		if (isStart) {
			return
		}
		console.log("init web3...");
		if (window.ethereum) {
			// window.ethereum.enable().then(function() {
			// }).catch()
			web3 = window.web3 = new Web3(window.ethereum);
			isStart = true;
			handlerWeb3(window.web3);
		} else if (window.web3) {
			web3 = window.web3 = new Web3(window.web3.currentProvider);
			isStart = true;
			handlerWeb3(window.web3)
		} else if (!isCheckInterval) {
			errWeb3()
		}
	};

	/**
	 * 连接web3
	 * @param {Object} web3
	 */
	var handlerWeb3 = function(web3) {
		try{
			abkContract = new web3.eth.Contract(abkAbi, abkAddress);
		}catch(e){
			console.log(e);
		}
		web3.eth.net.getId(function(err, netId) {
			console.log('netId', netId);
			if (netId != gnetId) {
				if ((gnetId == 3 || gnetId == 4) && !isCheckInterval) {
					alert('這是壹個測試，請使用ropsten測試網！');
				} else if (gnetId == 1 && !isCheckInterval) {
					alert('請使用正式以太坊主網！');
				} else if (!isCheckInterval) {
					alert('請使用自定义网络！');
				}
			} else {
				netCheck = true;
				checkLogin();
			}
		})

	};
	/**
	 * 检查是否登录并获取用户账号
	 */
	var checkLogin = function() {
		var accountInterval = setInterval(function() {
			web3.eth.getAccounts(function(err, accounts) {
				if (err) {
					console.log(err);
					return
				}
				if (accounts.length == 0 && userAccount !== "") {
					window.location.reload();
					return
				}
				if (accounts.length == 0) {
					return
				}
				if (userAccount != accounts[0]) {
					userAccount = accounts[0];
					window.location.reload();
					console.log("account change, start bat updateData!");
				}
			})
		}, 1000)
		web3.eth.getAccounts().then(function(accounts) {
			if (accounts.length == 0) {
				if (!isCheckInterval) {
					errLogin();
				}
				throw new Error("用户未登录");
			}
			userAccount = accounts[0];
			if (!userAccount || userAccount == "") {
				throw new Error("用户未登录");
			}
			
			return checkBought();
		}).then(function(exist) {
			// 如果买入过，查询我的收益
			if (exist) {
				userExist = true;
			}

			initData();
		}).catch(function(err) {
			console.log(err);
		})
	};
	
	
	var initData = function() {
		if (userExist) {
			updateIntiveLink();
			getRelation();
			// 我的收益数据查询
			showSettlementRevenueCall();
			showRecommendedRewardCall();
			showPrizePoolIncomeCall();
			showNextTimeDifferenceInEarningsCall();
			showStillOutOfTheGameCall();
			showUnsettledProjectedEarningsCall();
			showMyPerformanceGainsCall();
			showUndrawnCoinsCall();
		}
		checkRecommander();
		// 统计数据查询
		showBigPoolRoundCall();
		showLittePoolRoundCall();
		showLittePoolIncomeCall();
		showBigPoolIncomeCall();
		showTotalInvestedCall();
		showTotalRecommendedCall();
		showTeamCall();
		showAmbassadorCall();
		showTotalSettledCall();
		showLittePoolNextTime();
		showBigPoolNextTime();
	}

	/**
	 * 生成推荐链接
	 */
	var updateIntiveLink = function() {
		var url = location.href;
		if (url.indexOf("?") != -1) {
			url = url.split("?")[0];
		}
		if (userAccount && $("#invite-link").html().trim() === "--") {
			$("#invite-link").html(url + '?r=' + userAccount).addClass("text-warning");
		}
	};

	// 获取推荐人
	var getRecomander = function() {
		var reg = new RegExp("(^|&)r=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2])
		}
		return null
	};
	
	var recommander = getRecomander();

	// 校验推荐人
	var checkRecommander = function() {
		// 未携带推荐人,可以进行无推荐购买
		if (!recommander) {
			return
		}
		
		var $willRecommander = $('.will-reg-recommander'),
			showStr = recommander.length > 15 ? recommander.substring(0, 10) + "..." + recommander.substr(-5) : recommander;
		
		// 如果用户已经购买过,则推荐链接无效,可以进行无推荐购买
		if (userExist) {
			$('.will-reg-recommander-con').removeClass('hidden');
			$willRecommander.html("<span class='text-danger'> Already recommended user!  </span>");
			return
		}
		
		if (abkContract) {
			recommendedEffective.effective = false;
			$('.will-reg-recommander-con').removeClass('hidden');
			try{
				abkContract.methods.refer_valid_check(recommander).call({from: userAccount}, function(error, result) {
					if (error) {
						$willRecommander.html("<span class='text-danger'> ERROR!  </span>");
						return
					}
					if (!result.result) {
						recommendedEffective.reason = result.reason;
						$willRecommander.html("<span class='text-danger'>" + showStr +
							"<span style='font-size:12px;'>&nbsp;(" + recommendedEffective.reason + ")</span>" + "</span>");
						return
					}
					
					recommendedEffective.effective = true;
					$willRecommander.html("<span class='text-success'>" + showStr + "</span>");
				})
			}catch(e){
				$willRecommander.html("<span class='text-danger'>" + showStr +
					"<span style='font-size:12px;'>&nbsp;(Wrong recommended address!)</span>" + "</span>");
			}
		}
	};
	
	// 查询用户是否买入过
	var checkBought = function() {
		return new Promise(function(resolve, reject) {
			abkContract.methods.showPersonExist().call({from: userAccount}, function(err, result) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(result);
			});
		})
	}
	
	// 检查时候拥有购买资格
	var checkBuy = function() {
		return new Promise(function(resolve, reject) {
			// 如果用户已经注册过,判断是否出出局
			// 已出局才能再次入局
			if (userExist) {
				abkContract.methods.showPersonIsOut().call({from: userAccount}).then(function(result) {
					// 未出局,无购买资格
					if (!result) {
						alert("您尚未出局!");
						throw new Error("User not out yet");
					}
					resolve();
				}).catch(function(error) {
					console.log(error);
					reject();
				})
			} else {
				// 检查是否拥有购买资格
				abkContract.methods.can_reg_check().call({from: userAccount}).then(function(result) {
					console.log(result);
					// 无购买资格
					if (!result.result) {
						alert(result.reason);
						throw new Error(result.reason);
					}
					resolve();
				}).catch(function(error) {
					console.log(error);
					reject(error);
				})
			}
		});
	}
	
	// 用户首次购买-不携带推荐
	var buy = function(etherValue) {
		abkContract.methods.reg().send({
			from: userAccount,
			value: etherValue,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("發送失敗!");
				return
			}
			alert("發送成功!", "success", 2, function() {
				if (recommander) {
					location.href = location.href.split("?")[0];
				} else {
					location.reload();
				}
			});
		})
	};
	
	// 用户首次购买-携带推荐
	var recommanderBuy = function(etherValue) {
		abkContract.methods.reg(recommander).send({
			from: userAccount,
			value: etherValue,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("發送失敗!");
				return
			}
			alert("發送成功!", "success", 2, function() {
				location.href = location.href.split("?")[0];
			});
		})
	}
	
	// 用户再次入局
	var reenter = function(etherValue) {
		abkContract.methods.reenter().send({
			from: userAccount,
			value: etherValue,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("發送失敗!");
				return
			}
			alert("發送成功!", "success", 2, function() {
				location.href = location.href.split("?")[0];
			});
		})
	}
	
	// 用户提币
	var personWithdraw = function(etherValue) {
		abkContract.methods.personWithdraw(etherValue).send({
			from: userAccount,
			gas: 1000000
		}, function(err) {
			if (err) {
				console.log(err);
				alert("提現收益失敗!");
				return
			}
			alert("提現收益成功!", "success", 2, function() {
				location.reload();
			});
		})
	}
	
	// 个人收益 查询已结算分红收益
	var showSettlementRevenueCall = function() {
		abkContract.methods.showPersonDividentEarn().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#settlementRevenue").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 个人收益 查询推荐奖励
	var showRecommendedRewardCall = function(err, result) {
		abkContract.methods.showPersonReferrerBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#recommendedReward").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 个人收益 查询奖池收益
	var showPrizePoolIncomeCall = function(err, result) {
		abkContract.methods.showPersonPoolEarn().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#prizePoolIncomeCall").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 个人收益 查询下次分红收益时间差
	var showNextTimeDifferenceInEarningsCall = function(err, result) {
		var micro_second, startMoment, endMoment,
			$nextTimeDifferenceInEarnings = $("#nextTimeDifferenceInEarnings");
		
		abkContract.methods.showDividentNextTime().call({from: userAccount}).then(function(result) {
			endMoment = moment(result, 'X');
			return abkContract.methods.showNowTime().call({from: userAccount});
		}).then(function(result) {
			startMoment = moment(result, 'X');
			micro_second = moment.duration(endMoment - startMoment);
			
			if (micro_second.as('ms') <= 0) {
				$nextTimeDifferenceInEarnings.html(timeDiffFormate(0, undefined));
				return
			}
			
			$nextTimeDifferenceInEarnings.html(timeDiffFormate(micro_second.as('ms'), undefined));
			var interval = setInterval(function() {
				if (micro_second.as('ms') <= 0) {
					$nextTimeDifferenceInEarnings.html(timeDiffFormate(0, undefined));
					clearInterval(interval);
					return
				}
				micro_second.subtract(1, 'seconds');
				$nextTimeDifferenceInEarnings.html(timeDiffFormate(micro_second.as('ms'), undefined));
			}, 1000);
		}).catch(function(e) {
			console.log(e);
		});
	};
	// 个人收益 查询几倍动静出局还差
	var showStillOutOfTheGameCall = function(err, result) {
		abkContract.methods.showOutDifference().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			$("#stillOutOfTheGameRate").html(result.rate + " ");
			var resultWei = web3.utils.fromWei(BN(result.difference).toFixed(), "ether");
			$("#stillOutOfTheGame").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 个人收益 查询未结算预计收益
	var showUnsettledProjectedEarningsCall = function(err, result) {
		abkContract.methods.showPredictEarn().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var minWei = web3.utils.fromWei(BN(result.min).toFixed(), "ether"),
				maxWei = web3.utils.fromWei(BN(result.max).toFixed(), "ether");
			$("#unsettledProjectedEarnings").html(BN(minWei).toFixed(6, 1) + "-" + BN(maxWei).toFixed(6, 1));
		});
	};
	// 个人收益 查询我得业绩收益
	var showMyPerformanceGainsCall = function(err, result) {
		abkContract.methods.showPersonBonums().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#myPerformanceGains").html(BN(resultWei).toFixed(6, 1));
		});
	};
	// 个人收益 查询未提币数量
	var showUndrawnCoinsCall = function(err, result) {
		abkContract.methods.showPersonUnwithdraw().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#undrawnCoins").html(BN(resultWei).toFixed(6, 1));
		});
	};
	
	var getRelation = function() {
		abkContract.methods.showRelation().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			if (result.referrer !== "0x0000000000000000000000000000000000000000") {
				$("#relation-referrer").html(result.referrer).addClass("text-warning");
			}
			$("#relation-num").html(result.num).addClass("text-warning");
		});
	}

	// 数据统计 已进入的总资金
	var showTotalInvestedCall = function() {
		abkContract.methods.showTotalPay().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#totalInvested").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 数据统计 总已结算分红收益
	var showTotalSettledCall = function() {
		abkContract.methods.showTotalWiethdraw().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#totalSettled").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 数据统计 总的推荐收益
	var showTotalRecommendedCall = function() {
		abkContract.methods.showReferrerBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#totalRecommended").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 数据统计 团队
	var showTeamCall = function() {
		abkContract.methods.showPlatformBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#team").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 数据统计 大使
	var showAmbassadorCall = function() {
		abkContract.methods.showAmbassadorBonus().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#ambassador").html(BN(resultWei).toFixed(6, 1));
		});
	}
	
	// 数据统计 小奖池收益
	var showLittePoolIncomeCall = function() {
		abkContract.methods.showLittePool().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#small-pot-eth, #smallPot").html(BN(resultWei).toFixed(6, 1));
		});
	}
	// 数据统计 大奖池收益
	var showBigPoolIncomeCall = function() {
		abkContract.methods.showBigPool().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			var resultWei = web3.utils.fromWei(BN(result).toFixed(), "ether");
			$("#big-pot-eth, #bigPot").html(BN(resultWei).toFixed(6, 1));
		});
	}
	
	// 数据统计 小奖池回合
	var showLittePoolRoundCall = function() {
		abkContract.methods.showLittleRound().call({from: userAccount}, function(err, result) {
			if (err) {
				return
			}
			$("#small-pot-round").html(result);
		});
	}
	// 数据统计 大奖池回合
	var showBigPoolRoundCall = function() {
		abkContract.methods.showBigRound().call({from: userAccount}, function(err, result) {
			if (err) {
				console.log(err);
				return
			}
			$("#big-pot-round").html(result);
		});
	}
	
	// 数据统计 小奖池下次收益时间 倒计时
	var showLittePoolNextTime = function() {
		var micro_second, startMoment, endMoment,
			$littlePoolTime = $(".downBox.little-pool .time");
		
		abkContract.methods.showDividentNextTime().call({from: userAccount}).then(function(result) {
			endMoment = moment(result, 'X');
			return abkContract.methods.showNowTime().call({from: userAccount});
		}).then(function(result) {
			startMoment = moment(result, 'X');
			micro_second = moment.duration(endMoment - startMoment);
			
			if (micro_second.as('ms') <= 0) {
				$littlePoolTime.html(timeDiffFormate(0, undefined));
				return
			}
			
			$littlePoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			var interval = setInterval(function() {
				if (micro_second.as('ms') <= 0) {
					$littlePoolTime.html(timeDiffFormate(0, undefined));
					clearInterval(interval);
					return
				}
				micro_second.subtract(1, 'seconds');
				$littlePoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			}, 1000);
		}).catch(function(e) {
			console.log(e);
		});
	}
	// 数据统计 大奖池下次收益时间 倒计时
	var showBigPoolNextTime = function() {
		var micro_second, startMoment, endMoment,
			$bigPoolTime = $(".downBox.big-pool .time");

		abkContract.methods.showPoolTime().call({from: userAccount}).then(function(result) {
			endMoment = moment(result, 'X');
			return abkContract.methods.showNowTime().call({from: userAccount});
		}).then(function(result) {
			startMoment = moment(result, 'X');
			micro_second = moment.duration(endMoment - startMoment);

			if (micro_second.as('ms') <= 0) {
				$bigPoolTime.html(timeDiffFormate(0, undefined));
				return
			}
			
			$bigPoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			var interval = setInterval(function() {
				if (micro_second.as('ms') <= 0) {
					$bigPoolTime.html(timeDiffFormate(0, undefined));
					clearInterval(interval);
					return
				}
				micro_second.subtract(1, 'seconds');
				$bigPoolTime.html(timeDiffFormate(micro_second.as('ms'), undefined));
			}, 1000);
		}).catch(function(e) {
			console.log(e);
		});;
	}
	
	// 按钮操作开始前的检查
	var checkAll = function() {
		if (!web3) {
			errWeb3();
			return false;
		}
		if (!netCheck) {
			errNet();
			return false;
		}
		if (!userAccount || userAccount == "") {
			errLogin();
			return false;
		}
		return true;
	};

	var errWeb3 = function() {
		alert(
			"對於Chrome、Firefox請下載 <a style='color:#fcd21c;font-size:18px;' href='https://metamask.io/' data-spop='close'>metamask</a> 或 手機端下載 <a style='color:#fcd21c;font-size:18px;' data-spop='close' href='https://trustwalletapp.com/'>trustwallet</a> ！"
		)
	};

	var errNet = function() {
		alert("請選擇正確的以太網絡！")
	};

	var errLogin = function() {
		alert('請先登錄 Metamask 或 trustwallet！');
	};

	var init = function() {
		$("#copyLinkBtn").click(function() {
			try{
				const range = document.createRange();
		        range.selectNode(document.getElementById('invite-link'));
		
		        const selection = window.getSelection();
		        if(selection.rangeCount > 0) selection.removeAllRanges();
		        selection.addRange(range);
		        var tag = document.execCommand('copy');
		        
		        if (tag) {
					// 复制完成后清除选中区域
			        window.getSelection().removeAllRanges();
					alert("複製成功!", "success")
				}
			}catch(e){
				alert("該瀏覽器不支持複製!");
			}
	        
		})

		$('#sendEthBtn').click(function() {
			if (!checkAll()) {
				return
			}
			
			// 校验推荐链接
			// if (recommander && !recommendedEffective.effective) {
			// 	alert(recommendedEffective.reason);
			// 	return
			// }
			
			var reg = /^\+?[1-9][0-9]*$/,
				$sendEthInput = $('#sendEthInput');
			var value = $sendEthInput.val();
			
			if (!reg.test(value)) {
				alert('门票单位 1 eth');
				return
			}
			
			// 校验用户是否符合购买资格
			checkBuy().then(function() {
				// 用户已存在,再次入局
				if (userExist) {
					// 用户确认再次购买
					alertify.dialog('confirm').set({
						transition: "zoom",
						title: "警告",
						message: "确认您的收益已提取完毕,否则再次购买后将清空您的所有收益?",
						onok: function(){
							reenter(web3.utils.toWei(value, 'ether'));
						},
						oncancel: function() {
							console.log("User cancel incoming");
						}
					}).show();
				} else if (recommander && recommendedEffective.effective) {  // 首次购买,携带了推荐链接,并且推荐链接有效
					recommanderBuy(web3.utils.toWei(value, 'ether'))
				} else {  // 首次购买
					buy(web3.utils.toWei(value, 'ether'))
				}
			}).catch(function(e) {
				console.log(e);
			});
		})
		
		$("#withdraw-income").click(function() {
			if (!checkAll()) {
				return
			}

			var value = $("#undrawnCoins").html();
			var valueBig = new BigNumber(value);
			if (valueBig.comparedTo(0) !== 1) {
				alert("沒有收益可以體現");
				return
			}
			alertify.dialog('confirm').set({
				transition: "zoom",
				title: "體現收益",
				message: "確認體現  "+ value +" ETH  收益?",
				onok: function(){
					personWithdraw(web3.utils.toWei(value, 'ether'));
				}
			}).show();
		})

		checkNet();

		if (!abkContract) {
			return
		}
		setInterval(function() {
			console.log('check net...');
			isCheckInterval = true;
			checkNet();
		}, 3000);
	};
	init();
})
